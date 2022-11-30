const router = require('express').Router()
const {User, Order} = require('../db/models')
var client = require('klaviyo-sdk')
require('dotenv').config()
// Klaviyo sdk setup
var defaultClient = client.ApiClient.instance
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth']
ApiKeyAuth.apiKey = process.env.KLAVIYO_PRIVATE_KEY
const fetch = require('node-fetch')

module.exports = router

router.post('/create-account', async (req, res, next) => {
  try {
    const url = `https://a.klaviyo.com/api/v2/list/VXeuyy/subscribe?api_key=${
      process.env.KLAVIYO_PRIVATE_KEY
    }`
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({
        profiles: [
          {email: req.user.email}
          // {phone_number: req.user.phone}
        ]
      })
    }

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err))
  } catch (err) {
    next(err)
  }
})

router.post('/verify-phone', async (req, res, next) => {
  // add a user to list
  const addUserToSMSUrl = `https://a.klaviyo.com/api/v2/list/SKvZ83/subscribe?api_key=${
    process.env.KLAVIYO_PRIVATE_KEY
  }`
  const addUserToSMSOptions = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({
      profiles: [{email: req.body.email}, {phone_number: req.user.phone}]
    })
  }

  fetch(addUserToSMSUrl, addUserToSMSOptions)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err))

  //get the user's id
  const profileIdUrl = `https://a.klaviyo.com/api/v2/people/search?email=${
    req.user.email
  }&api_key=${process.env.KLAVIYO_PRIVATE_KEY}`
  const profileIdOptions = {
    method: 'GET',
    headers: {accept: 'application/json'}
  }

  const profileId = await fetch(profileIdUrl, profileIdOptions)
    .then(res => res.json())
    .then(json => json.id)
    .catch(err => console.error('error:' + err))

  const code = Math.floor(100000 + Math.random() * 900000)

  await User.update({phoneCode: code}, {where: {email: req.user.email}})

  //update a user's profile to have a six digit code
  const url = `https://a.klaviyo.com/api/v1/person/${profileId}?code=${code}&api_key=${
    process.env.KLAVIYO_PRIVATE_KEY
  }`
  const options = {method: 'PUT', headers: {accept: 'application/json'}}

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err))

  return res.json(code)
})

router.post('/phone-code', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.user.email}})

    if (user.phoneCode === req.body.code) {
      await User.update({phoneVerified: true}, {where: {email: req.user.email}})
      return res.status(200).send()
    } else {
      return res.status(403).send()
    }
  } catch (error) {
    console.log(error)
  }
})
