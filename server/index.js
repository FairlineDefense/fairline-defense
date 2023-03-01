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
var MagicLinkStrategy = require('passport-magic-link').Strategy;
var sendgrid = require('@sendgrid/mail');
var cookieParser = require('cookie-parser')
module.exports = app

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}
app.use('/webhooks/stripe', require('./webhooks/stripe'))
app.use('/webhooks/klaviyo', require('./webhooks/klaviyo'))

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

passport.use(new MagicLinkStrategy({
  secret: 'my best friend is Cody',
  userFields: [ 'email' ],
  tokenField: 'token',
  verifyUserAfterToken: true
}, async function send(user, token) {
  var link = process.env.NODE_ENV === 'production' ? 'https://fairlinedefense.com/chooseprotection?token=' + token : 'http://localhost:8080/chooseprotection?token=' + token;
  var msg = {
    to: user.email,
    from: 'support@fairlinedefense.com',
    subject: 'Confirm Your Email for Fairline Defense',
    text: 'Hello! Click the link below to finish signing up for Fairline Defense.\r\n\r\n' + link,
    html: '<h3>Hello!</h3><p>Click the link below to finish signing up for Fairline Defense.</p><p><a href="' + link + '">Sign in</a></p>',
  };
  await User.update({emailVerified: true}, {where: {email: user.email}})
  console.log('user update called for', user.email)
  return sendgrid.send(msg);
}, function verify(user) {
  console.log('promise func called for', user.email)
  return new Promise(function(resolve, reject) {
   const res = User.update({emailVerified: true}, {where: {email: user.email}})
        return resolve(res);
  });
}));

// passport registration
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, email: user.email });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  // compression middleware
  app.use(compression())

  // session middleware with passport
  app.use(cookieParser('my best friend is Cody'))
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.authenticate('session'))

  // auth and api routes
  app.use('/auth', require('./auth'))
  app.use('/api', require('./api'))
  app.use('/payment', require('./payment'))
  app.use('/klaviyo', require('./klaviyo'))
  app.use('/twilio', require('./twilio'))
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
const syncDb = () => process.env.NODE_ENV === 'production' ? db.sync() : db.sync({force:true})

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
