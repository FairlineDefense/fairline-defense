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
app.use('/webhooks/stripe', require('./webhooks/stripe'))
app.use('/webhooks/klaviyo', require('./webhooks/klaviyo'))

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({where: {id: id}, include: {model: Order}})
    const data = JSON.stringify(user, 2, null)
    let profile = JSON.parse(data)

    const subscription = await stripe.subscriptions.retrieve(
      /* String of user's subscription id in the Orders database.
      Should just attach to their user database upon creation and deprecate the Orders model because
      the id is all we need.
      
      Currently it would be something like: profile.orders[0].orderId
      */
    );
    
    const getStatus = async () => {
        const date = Date.now() / 1000
        /*
        See Github project board for an example of what the subscription
        object looks like. The below subscription.<property> is just an example. 
        EG: subscription.periodStart should be subscription.current_period_start
        */
        const startDate = subscription.periodStart
        const endDate = subscription.periodEnd

            if (subscription.status === 'actionRequired') {
              profile.status = 'actionRequired'
            }
            if (subscription.status === 'paid') {
              profile.status = 'paid'
            }
            if (subscription.status === 'cancelled') {
              profile.status = 'cancelled'
            }
            if (subscription.status === 'incomplete') {
              profile.status = 'actionRequired'
            }

            profile.planActive = true
            let daysTotal = Math.floor((endDate - startDate) / 86400)
            let daysLeft = Math.floor((endDate - date) / 86400)
            let percentageLeft = Math.floor(100 - daysLeft / daysTotal * 100)
            let periodStartString = dateString(startDate)
            let periodEndString = dateString(endDate)
            profile.subscription = subscription.orderId
            profile.interval = subscription.interval
            profile.periodStart = periodStartString
            profile.periodEnd = periodEndString
            profile.daysTotal = daysTotal
            profile.daysLeft = daysLeft
            profile.percentageLeft = percentageLeft
          }
    
    getStatus()
    done(null, profile)
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
}

// WARNING use db.sync({force: true}) to clear database of all data and
// reset tables ONLY in local development environment. NOT PRODUCTION.
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
