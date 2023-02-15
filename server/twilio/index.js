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

router.post('/start-verify', async (req, res, next) => {
    const response = {}
    console.log('req.user.phone', req.user.phone)
    response.headers = {'Content-Type': 'application/json'};
    try {
    client.verify.v2
    .services(verifySid)
    .verifications.create({ to: req.user.phone, channel: "sms" })
    .then((verification) => console.log(verification.status))

    response.statusCode = 200;
    response.body = { success: true };
    return res.send(response)
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

router.post('/check-verify', async (req, res, next) => {
  const user = await User.findOne({where: {email: req.user.email}})
  try {
      client.verify.v2.services(process.env.VERIFY_SID)
      .verificationChecks
      .create({to: req.user.phone, code: req.body.code})
      .then(verification_check => {
         const status = verification_check.status
         console.log('STATUS FROM TWILIO RES:', status)
         if (verification_check.status = 'approved'){
         user.update({phoneVerified: true})
         }
         return res.send({status: status})
        });
  }
  catch(error) {
    console.log(error)
    const statusCode = error.status || 400;
    return res.status(statusCode).send()
    }
})
