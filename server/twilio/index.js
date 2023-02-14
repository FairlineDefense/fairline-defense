// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const router = require('express').Router()
const {User} = require('../db/models')
require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.VERIFY_SID
const client = require("twilio")(accountSid, authToken);

module.exports = router

router.post('/verify-phone', async (req, res, next) => {
    const response = {}
    response.header = {'Content-Type': 'application/json'};
    try {
    client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+16313038236", channel: "sms" })
    .then((verification) => console.log(verification.status))

    response.statusCode(200);
    response.body({ success: true });
    console.log('response', response)
    res.send(response)
}
    catch(error) {
        const statusCode = error.status || 400;
        response.statusCode = statusCode;
        response.body = {
          success: false,
          error: error.message,
        }
    }
})

router.post('/phone-code', async (req, res, next) => {
    const response = {}
    response.header = {'Content-Type': 'application/json'};
    const user = await User.findOne({where: {email: req.user.email}})
  try {
    client.verify.v2.services(process.env.VERIFY_SID)
      .verificationChecks
      .create({to: '+16313038236', code: req.body.code})
      .then(verification_check => console.log(verification_check.status));

      response.statusCode(200);
      response.body({ success: true });
      await user.update({phoneVerified: true})
      res.send(response)
  }
  catch(error) {
    console.log(error)
    const statusCode = error.status || 400;
    response.statusCode = statusCode;
    response.body = {
      success: false,
      error: error.message,
    }
    }
})
