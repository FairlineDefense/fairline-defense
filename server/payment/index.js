const router = require('express').Router()
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
module.exports = router

router.post('/intent', async (req, res) => {
  try {
    const products = {month: 19000, year: 199000}
    const paymentIntent = await stripe.paymentIntents.create({
      amount: products[req.body.item],
      currency: 'usd'
    })
    res.json({client_secret: paymentIntent.client_secret})
  } catch (error) {
    console.log(error)
    return 500
  }
})
