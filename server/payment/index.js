const router = require('express').Router()
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
module.exports = router

router.post('/intent', async (req, res) => {
  const amount = req.body.item === 'month' ? 19000 : 199000

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd'
  })
  console.log(req.body, paymentIntent)
  res.json({client_secret: paymentIntent.client_secret})
})
