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
    client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+16313038236", channel: "sms" })
    .then((verification) => console.log(verification.status))

    res.status(200).send()
})

// router.post('/phone-code', async (req, res, next) => {
//   try {
//     const user = await User.findOne({where: {email: req.user.email}})

//     const client = context.getTwilioClient();
//     const service = context.VERIFY_SERVICE_SID;
//     const { to } = event;
//     const channel =
//       typeof event.channel === 'undefined' ? 'sms' : event.channel;
//     const locale = typeof event.locale === 'undefined' ? 'en' : event.locale;

//     const verification = await client.verify
//       .services(service)
//       .verifications.create({
//         to,
//         channel,
//         locale,
//       });

//     console.log(`Sent verification: '${verification.sid}'`);
//     response.setStatusCode(200);
//     response.setBody({ success: true });
//     return callback(null, response);
//   } catch (error) {
//     const statusCode = error.status || 400;
//     response.setStatusCode(statusCode);
//     response.setBody({
//       success: false,
//       error: error.message,
//     });
//     return callback(null, response);
//   }
// };

//       return res.status(403).send()
//   } catch (error) {
//     console.log(error)
//   }
// })
