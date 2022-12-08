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
    console.log('create-account', req.body)
    const createProfile = {
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
    };
    const klaviyoProfileRes = await fetch('https://a.klaviyo.com/api/profiles/', createProfile)
      .then(response => response.json())
      .then(res => res.data)
      .catch(err => console.error('ERROR', err));
      User.update({klaviyoProfileID: klaviyoProfileRes.id}, {where:{email: req.user.email}})
   
    // Add user to newsletter
      const subscribeToNewsletter = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          revision: '2022-10-17',
          'content-type': 'application/json',
          Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`
        },
        body: JSON.stringify({data: [{type: 'profile', id: klaviyoProfileRes.id}]})
      };
    
  fetch('https://a.klaviyo.com/api/lists/VXeuyy/relationships/profiles/', subscribeToNewsletter)
  // .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  } catch (err) {
    next(err)
  }
})

router.post('/verify-phone', async (req, res, next) => {
  const code = Math.floor(100000 + Math.random() * 900000)

  await User.update({phoneCode: code}, {where: {email: req.user.email}})

  //update a user's profile to have a six digit code
  const updateProfileUrl = `https://a.klaviyo.com/api/profiles/${req.user.klaviyoProfileID}/`;
  const options = {
    method: 'PATCH',
    headers: {
      accept: 'application/json',
      revision: '2022-10-17',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`
    },
    body: JSON.stringify({data: {type: 'profile', attributes: {properties: {code: code}}, id: req.user.klaviyoProfileID}})
  };
  
  fetch(updateProfileUrl, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

    // add a user to list
    const addUserToSMS = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        revision: '2022-10-17',
        'content-type': 'application/json',
        Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`
      },
      body: JSON.stringify({data: [{type: 'profile', id: req.user.klaviyoProfileID}]})
    };
    
    fetch('https://a.klaviyo.com/api/lists/SKvZ83/relationships/profiles/', addUserToSMS)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

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
