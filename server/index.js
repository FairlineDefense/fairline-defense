const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db')
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 8080
const app = express()
const socketio = require('socket.io')
const {User, Order} = require('./db/models')
const dateString = require('../utils/dateString')
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
module.exports = app

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}
app.use('/webhook/klaviyo', require('./webhook/klaviyo'))
app.use('/webhook', require('./webhook'))
/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== 'production') require('../secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({where: {id: id}, include: {model: Order}})
    const data = JSON.stringify(user, 2, null)
    let obj = JSON.parse(data)
    const getStatus = async () => {
      const date = Date.now() / 1000
      const orders = obj.orders
      for (let i = 0; i < orders.length; i++) {
        const startDate = orders[i].periodStart
        const endDate = orders[i].periodEnd
        if (startDate < date) {
          if (endDate > date) {
            if (orders[i].status === 'actionRequired') {
              obj.status = 'actionRequired'
            }
            if (orders[i].status === 'paid') {
              obj.status = 'paid'
            }
            if (orders[i].status === 'cancelled') {
              obj.status = 'cancelled'
            }

            obj.planActive = true
            let daysTotal = Math.floor((endDate - startDate) / 86400)
            let daysLeft = Math.floor((endDate - date) / 86400)
            let percentageLeft = Math.floor(100 - daysLeft / daysTotal * 100)
            let periodStartString = dateString(startDate)
            let periodEndString = dateString(endDate)
            obj.subscription = orders[i].orderId
            obj.interval = orders[i].interval
            obj.periodStart = periodStartString
            obj.periodEnd = periodEndString
            obj.daysTotal = daysTotal
            obj.daysLeft = daysLeft
            obj.percentageLeft = percentageLeft
          }
        }
        break
      }
    }
    getStatus()
    done(null, obj)
  } catch (err) {
    done(err)
  }
})

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  // compression middleware
  app.use(compression())

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  // auth and api routes
  app.use('/auth', require('./auth'))
  app.use('/api', require('./api'))
  app.use('/payment', require('./payment'))
  app.use('/klaviyo', require('./klaviyo'))
  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )

  // set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
}

const syncDb = () => db.sync()

async function bootApp() {
  await sessionStore.sync()
  await syncDb()
  await createApp()
  await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}
