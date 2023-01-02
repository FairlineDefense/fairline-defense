const router = require('express').Router()
const User = require('../db/models/user')
var client = require('klaviyo-sdk')
require('dotenv').config()
// Klaviyo sdk setup
var defaultClient = client.ApiClient.instance
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth']
ApiKeyAuth.apiKey = process.env.KLAVIYO_PRIVATE_KEY
const fetch = require('node-fetch')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  // A user profile for Klaviyo is created. If both are valid for Klaviyo then we'll create the user in our db as well.
  // That way we can outsource data validation to Klaviyo.
  let createKlaviyoProfileRes = {}
  try {
    const createKlaviyoProfileBody = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        revision: '2022-10-17',
        'content-type': 'application/json',
        Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email: req.body.email,
            phone_number: req.body.phone,
            first_name: req.body.firstName,
            last_name: req.body.lastName
          }
        }
      })
    }
    createKlaviyoProfileRes = await fetch(
      'https://a.klaviyo.com/api/profiles/',
      createKlaviyoProfileBody
    )
      .then(res => res.json())
      .catch(err => console.log('error:' + err))

    console.log(createKlaviyoProfileRes)

    const user = await User.create({
      ...req.body,
      klaviyoProfileID: createKlaviyoProfileRes?.data?.id
    })
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      //This means Klaviyo rejected either the phone number or email as invalid
      //so we won't create a user with bad info in our db
      const errors = createKlaviyoProfileRes.errors.map(error => error.detail)
      res.status(400).send(errors)
    }
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', async (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
