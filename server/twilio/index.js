const router = require('express').Router()
const {User} = require('../db/models')
require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.VERIFY_SID
const client = require("twilio")(accountSid, authToken);
const passport = require('passport')

module.exports = router

router.post('/start-verify', async (req, res, next) => {
    const response = {}
    response.headers = {'Content-Type': 'application/json'};
    const channel = req.body.channel
    const to = channel === 'sms' ? req.body.phone : req.body.email
    const callbackUrl = process.env.NODE_ENV === 'production' ? 
    'https://fairlinedefense.com/chooseprotection' : 
    'http://localhost:8080/chooseprotection'
    const channelConfig = channel === 'sms' ? {} : {
      substitutions: {
        email: to,
        callback_url: callbackUrl,
      },
    }

    try {
    client.verify.v2
    .services(verifySid)
    .verifications.create({ to: to, channel: channel, channelConfiguration: channelConfig })
    .then((verification) => console.log('verification started:', channel, 'verification status:', verification.status))

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
  const channel = req.body.channel
  const to = channel === 'sms' ? req.body.phone : req.body.email
  const code = req.body.code
  
  const user = channel === 'sms' ? await User.findOne({where: {phone: req.body.phone}}) :
  await User.findOne({where: {email: req.body.email}})

  try {
      client.verify.v2.services(verifySid)
      .verificationChecks
      .create({to, code})
      .then(check => {
         const status = check.status
         if (check.status = 'approved'){
          channel === 'sms' ? User.update({phoneVerified: true}, {where: {phone: req.body.phone}}) :
          User.update({emailVerified: true}, {where: {email: req.body.email}})
          req.login(user, err => (err ? next(err) : console.log('logged in')))
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

router.post('/verify-email', passport.authenticate('magiclink', {
  action: 'requestToken',
  failureRedirect: '/login',
  failureMessage: true
}), function(req, res, next) {
  res.status(200).send()
});

router.get('/check-verify-email', passport.authenticate('magiclink', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login'
}));