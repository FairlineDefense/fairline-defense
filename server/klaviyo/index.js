const router = require('express').Router()
const {User, Order} = require('../db/models')
var client = require('klaviyo-sdk');
require('dotenv').config()
// Klaviyo sdk setup
var defaultClient = client.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = process.env.KLAVIYO_PRIVATE_KEY;
const fetch = require('node-fetch');

module.exports = router

router.post('/create-account', async (req, res, next) => {
  console.log(req.body, process.env.KLAVIYO_PRIVATE_KEY)
  try {
    const url = `https://a.klaviyo.com/api/v2/list/VXeuyy/subscribe?api_key=${process.env.KLAVIYO_PRIVATE_KEY}`;
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({
        profiles: [
          {email: req.body.email}
        ]
      })
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  } catch (err) {
    next(err)
  }
})