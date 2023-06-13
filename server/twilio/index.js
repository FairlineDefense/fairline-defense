const router = require('express').Router()
const { User } = require('../db/models')
const { ResetKey } = require('../db/models')
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
  response.headers = { 'Content-Type': 'application/json' };
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
  catch (error) {
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

  const user = channel === 'sms' ? await User.findOne({ where: { phone: req.body.phone } }) :
    await User.findOne({ where: { email: req.body.email } })

  try {
    client.verify.v2.services(verifySid)
      .verificationChecks
      .create({ to, code })
      .then(check => {
        const status = check.status
        if (status === 'approved') {
          channel === 'sms' ? User.update({ phoneVerified: true }, { where: { phone: req.body.phone } }) :
            User.update({ emailVerified: true }, { where: { email: req.body.email } })
          req.login(user, err => (err ? next(err) : console.log('logged in')))
        }
        return res.send({ status: status })
      });
  }
  catch (error) {
    console.log(error)
    const statusCode = error.status || 400;
    return res.status(statusCode).send()
  }
})

router.post('/forgot-password', async (req, res) => {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email } = req.body;
  const user = await User.findOne({ where: { email: req.body.email } })

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  const resetKey = await ResetKey.create({
    email: email,
    key: token,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000) // set expiration to 1 hour from now
  });
  const resetLink = process.env.NODE_ENV === 'production' ? `https://fairlinedefense.com/resetpassword/${token}` : `http://localhost:8080/resetpassword/${token}`;

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

router.post('/send-card', async (req, res) => {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { createCanvas, loadImage, registerFont } = require('canvas');
  const fs = require("fs");

  const { user } = req.body;

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  registerFont(`${__dirname}/eina/Eina03-SemiBold.otf`, { family: 'Eina03-SemiBold' });

  // Load the background image
  const backgroundImage = await loadImage(`${__dirname}/front.png`);

  // Create a canvas with desired dimensions
  const canvasWidth = backgroundImage.width;
  const canvasHeight = backgroundImage.height;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const context = canvas.getContext('2d');

  // Set font properties
  const fontSize = 66;
  const fontFamily = 'Eina03-SemiBold';

  context.font = `${fontSize}px ${fontFamily}`;

  // Draw the background image
  context.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);

  // Set fill color and draw the text
  context.fillStyle = 'white';
  context.fillText(user.firstName + ' ' + user.lastName, 82, 460);
  context.fillText(user.membershipNumber, 82, 635);

  const canvasBuffer = canvas.toBuffer('image/png');

  //Load card back image
  pathToAttachment = `${__dirname}/back.png`;
  attachment = fs.readFileSync(pathToAttachment).toString("base64");

  const message = {
    to: user.email,
    from: 'support@fairlinedefense.com',
    subject: 'Membership Card',
    templateId: `d-80c672cf58564fe18586274e01d0b15a`,
    dynamicTemplateData: {
      firstName: user.firstName
    },
    attachments: [
      {
        content: canvasBuffer.toString('base64'),
        filename: "front.png",
        type: "application/png",
        disposition: "attachment"
      },
     {
        content: attachment,
        filename: "back.png",
        type: "application/png",
        disposition: "attachment"
      }
    ]
  };

  try {
    await sgMail.send(message);
    return res.status(200).json({ message: 'Email Sent' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Failed' });
  }
});

router.post('/create-card', async (req, res) => {

  const { createCanvas, loadImage, registerFont } = require('canvas');
  const fs = require("fs");

  const { user } = req.body;

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  registerFont(`${__dirname}/eina/Eina03-SemiBold.otf`, { family: 'Eina03-SemiBold' });

  // Load the background image
  const backgroundImage = await loadImage(`${__dirname}/front.png`);

  // Create a canvas with desired dimensions
  const canvasWidth = backgroundImage.width;
  const canvasHeight = backgroundImage.height;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const context = canvas.getContext('2d');

  // Set font properties
  const fontSize = 66;
  const fontFamily = 'Eina03-SemiBold';

  context.font = `${fontSize}px ${fontFamily}`;

  // Draw the background image
  context.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);

  // Set fill color and draw the text
  context.fillStyle = 'white';
  context.fillText(user.firstName + ' ' + user.lastName, 82, 460);
  context.fillText(user.membershipNumber, 82, 635);

  const canvasBuffer = canvas.toBuffer('image/png');
  //Load card back image
  pathToAttachment = `${__dirname}/back.png`;
  attachment = fs.readFileSync(pathToAttachment).toString("base64");

  try {
    return res.status(200).json({ card_image: canvasBuffer });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Failed' });
  }
});