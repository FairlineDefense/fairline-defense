const router = require('express').Router()
const {User, Order} = require('../db/models')
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'emailVerified']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    streetAddress,
    line2,
    city,
    state,
    zipCode,
    password,
    emailReminders,
    emailNews,
    emailInsider,
    emailPromotions
  } = req.body
  try {
    await User.update(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        streetAddress: streetAddress,
        line2: line2,
        city: city,
        state: state,
        zipCode: zipCode,
        emailReminders: emailReminders,
        emailNews: emailNews,
        emailInsider: emailInsider,
        emailPromotions: emailPromotions
        // password: password Should have its own route
      },
      {
        where: {id: req.params.id}
      }
    )
    res.status(200).send()
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.get('/create-customer-portal-session', async (req, res) => {
  // Authenticate your user.
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: req.user.customerId,
      return_url: process.env.RETURN_URL
    })
    return res.json({sessionUrl: session.url})
  } catch (error) {
    console.log(error)
  }
})
