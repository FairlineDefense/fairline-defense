const router = require('express').Router()
const {User} = require('../db/models')
const {ResetKey} = require('../db/models')
require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.VERIFY_SID
const client = require("twilio")(accountSid, authToken);
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const crypto = require('crypto');

module.exports = router

router.post('/start-verify', async (req, res, next) => {
    const response = {}
    response.headers = {'Content-Type': 'application/json'};
    const channel = req.body.channel
    const to = channel === 'sms' ? req.body.phone : req.body.email
    const callbackUrl = process.env.TWILIO_CALLBACK_URL
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
         if (status === 'approved'){
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

router.post('/forgot-password', async (req, res) => {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email } = req.body;
  const user = await User.findOne({where: {email: req.body.email}})

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  const resetKey = await ResetKey.create({
    email: email,
    key: token,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000) // set expiration to 1 hour from now
  });
  const resetLink = `http://localhost:8080/resetpassword/${token}`;

  console.log(token);

  const message = {
    to: email,
    from: 'support@fairlinedefense.com',
    subject: 'Password Reset',
    html: `Click <a href="${resetLink}">here</a> to reset your password.`
  }

  try {
    await sgMail.send(message);
    return res.status(200).json({ message: 'Email Sent' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Failed' });
  }
});