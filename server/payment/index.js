const router = require('express').Router()
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
module.exports = router

router.post('/create-customer', async(req,res) => {
try {
  const customer = await stripe.customers.create({
    email: req.body.email,
    name: `${req.body.firstName} ${req.body.lastName}`,
    // phone: req.body.phone
    // shipping: {
    //   address: {
    //     city: req.body.city,
    //     country: req.body.country,
    //     line1: req.body.line1,
    //     postal_code: req.body.postalCode,
    //     state: req.body.state,
    //   },
    //   name: `${req.body.firstName} ${req.body.lastName}`,
    // },
    // address: {
    //   city: req.body.city || 'new york',
    //   country: req.body.country || 'us',
    //   line1: req.body.line1 || '123 3rd ave',
    //   postal_code: req.body.postalCode || '10012',
    //   state: req.body.state || 'ny',
    // }
  });
  return res.json({customerId: customer.id})
} catch (error) {
  console.log(error)
  res.status(500).send()
}
}),

  router.post('/create-subscription', async (req, res) => {
    const customerId = req.body.customerId
    const priceId = req.body.priceId;

    try {
      // Create the subscription. Note we're expanding the Subscription's
      // latest invoice and that invoice's payment_intent
      // so we can pass it to the front end to confirm the payment
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{
          price: priceId,
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });

      return res.json({
        subscriptionId: subscription.id,
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      });
    } catch (error) {
      return res.status(400).send({ error: { message: error.message } });
    }
  });