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
    // The three steps to verifying a user's email are as follows:
    // [1] We create their profile on Klaviyo with their name, email and phone number. The response includes their unique
    //     Klaviyo profile ID. We add this to our database for future reference.
    // [2] We add the user to the email list, Newsletter. This triggers a double opt in process where they must
    //     click the confirmation link sent to their email address.
    // [3] Upon clicking the confirmation link a webhook is sent to webhooks/klaviyo on our server which switches their
    //     email verification from FALSE to TRUE, enabling the use of their Fairline account.

    // Step 1:
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
            last_name: req.body.lastName,
          }
        }
      })
    };
    const klaviyoProfileRes = await fetch('https://a.klaviyo.com/api/profiles/', createProfile)
      .then(response => response.json())
      .then(res => res.data)
      .catch(err => console.error('ERROR', err));
      
      await User.update({klaviyoProfileID: klaviyoProfileRes.id}, {where:{email: req.user.email}})
      
    // Step 2:
    const url = 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    revision: '2022-10-17',
    'content-type': 'application/json',
    Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`
  },
  body: JSON.stringify({
    data: {
      type: 'profile-subscription-bulk-create-job',
      attributes: {subscriptions: [{email: req.body.email}], list_id: 'VXeuyy'}
    }
  })
};

fetch(url, options)
  .then(res => console.log(res))
  .catch(err => console.error('error:' + err));
    
  // Step 3 is located in ../webhooks/klaviyo
  } catch (err) {
    next(err)
  }
})

router.post('/verify-phone', async (req, res, next) => {

  // The 4 step process for verifying a user's phone number is as follows:
  // [1] A random 6 digit code is generated and added to the user in our database
  // [2] The user's Klaviyo profile object is updated to have a key called code which has a value of the 6 digit code
  // [3] The user is added to the list SMS Subscribers, triggering
  //     a text message to that number with the 6 digit code associated with their profile
  // [4] The user enters the 6 digit code in the VerifyPhone component and if it is the same code which is
  //     associated with that user in our database, the phoneCode column, then their phoneVerified column
  //     is switched from FALSE to TRUE, enabling them to continue to their membership portal

  // Step 1:
  const code = Math.floor(100000 + Math.random() * 900000)

  await User.update({phoneCode: code}, {where: {email: req.user.email}})

  // Step 2:
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

    // Step 3:
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
    // Step 4:
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
