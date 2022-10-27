const {User} = require('../db/models')
const router = require('express').Router()
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
module.exports = router

router.post('/create-customer', async(req,res) => {
try {
  const customer = await stripe.customers.create({
    email: req.body.email,
    name: `${req.body.firstName} ${req.body.lastName}`,
    phone: req.body.phone,
    address: {
      line1: req.body.apt + req.body.streetAddress,
      line2: req.body.line2,
      city: req.body.address,
      state: req.body.state,
      postal_code: req.body.zipCode,
    }
  });

  await User.update({
    customerId: customer.id,
    streetAddress: req.body.apt + req.body.streetAddress,
    line2: req.body.line2,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    customerId: customer.id,
  }, {where:{ email: req.body.email}})

  return res.json({customerId: customer.id})
} catch (error) {
  console.log(error)
  res.status(500).send()
}
}),

  router.post('/create-subscription', async (req, res) => {
    const customerId = req.body.customerId
    const priceIds = {month: process.env.MONTH_PRICE_ID,
                      year: process.env.ANNUAL_PRICE_ID,
                      spouse: process.env.MONTH_SPOUSE_PRICE_ID
                      }
    let priceId = priceIds[req.body.priceId];
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

  router.post('/add-a-spouse', async (req, res) => {
    const priceIds = {month: process.env.MONTH_SPOUSE_PRICE_ID, year: process.env.ANNUAL_SPOUSE_PRICE_ID,}
    try {
      const response = await stripe.quotes.create({
        customer: req.body.customerId,
        line_items: [
          {
            price: priceIds[req.body.interval],
            quantity: 1,
          },
        ],
      });
      const totalString = `${response.amount_total / 100}`
      return res.json({total: totalString, interval: response.computed.recurring.interval})
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: { message: error.message } });
    }
  });

  router.put('/add-a-spouse', async (req, res) => {
    const sub = req.body.subscription
    console.log(sub)
    const priceIds = {month:process.env.MONTH_SPOUSE_PRICE_ID, year: process.env.ANNUAL_SPOUSE_PRICE_ID}
    try {
      const subscription = await stripe.subscriptions.update(
        sub,
     {   items: [{
          price: priceIds[req.body.interval],
        }],
        proration_behavior: 'always_invoice'
      }
      );
      await User.update({addSpouse: true, spouseName: req.body.spouseName, spouseEmail: req.body.spouseEmail, spousePhone: req.body.spousePhone}, {where:{ id: req.body.id}})
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: { message: error.message } });
    }
  });

  router.get('/invoices', async (req, res) => {
    try {
      const invoices = await stripe.invoices.list({
        customer: req.customerId
      });
      return res.json(invoices)
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: { message: error.message } });
    }
  });