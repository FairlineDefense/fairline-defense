const router = require('express').Router()
const {User, Order} = require('../db/models')
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
const fetch = require('node-fetch')
module.exports = router

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
    shippingStreetAddress,
    shippingLine2,
    shippingCity,
    shippingState,
    shippingZipCode,
    password,
    emailReminders,
    emailNews,
    emailInsider,
    emailPromotions
  } = req.body
  const user = await User.findOne({where: {id: req.params.id}})
  try {
    //   // API call to Klaviyo using their klaviyoProfileID to update fields, email, phone, name
    const updateKlaviyoProfileUrl = `https://a.klaviyo.com/api/profiles/${
      user.klaviyoProfileID
    }/`
    const options = {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        revision: '2022-10-17',
        'content-type': 'application/json',
        Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email: email && email,
            phone_number: phone && `${phone}`,
            first_name: firstName && firstName,
            last_name: lastName && lastName
          },
          id: user.klaviyoProfileID
        }
      })
    }

    fetch(updateKlaviyoProfileUrl, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err))
    const name = firstName && lastName && `${firstName} ${lastName}`
    // API call to Stripe using their customerId to update all relevant fields
    await stripe.customers.update(user.customerId, {
      email: email && email,
      name: firstName && lastName && `${firstName} ${lastName}`,
      phone: phone && `${phone}`,
      address: {
        line1: streetAddress && streetAddress,
        line2: line2 && line2,
        city: city && city,
        state: state && state,
        postal_code: zipCode && zipCode
      },
      shipping: {
        name: `${req.user.firstName} ${req.user.lastName}`,
        address: {
          line1: shippingStreetAddress && shippingStreetAddress,
          line2: shippingLine2 && shippingLine2,
          city: shippingCity && shippingCity,
          state: shippingState && shippingState,
          postal_code: shippingZipCode && shippingZipCode
        },
        phone: req.user.phone
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  try {
    await User.update(
      {
        firstName: firstName && firstName,
        lastName: lastName && lastName,
        email: email && email,
        phone: phone && phone,
        streetAddress: streetAddress && streetAddress,
        line2: line2 && line2,
        city: city && city,
        state: state && state,
        zipCode: zipCode && zipCode,
        shippingStreetAddress: shippingStreetAddress && shippingStreetAddress,
        shippingLine2: shippingLine2 && shippingLine2,
        shippingCity: shippingCity && shippingCity,
        shippingState: shippingState && shippingState,
        shippingZipCode: shippingZipCode && shippingZipCode,
        emailReminders: emailReminders && emailReminders,
        emailNews: emailNews && emailNews,
        emailInsider: emailInsider && emailInsider,
        emailPromotions: emailPromotions && emailPromotions,
        password: password && password
      },
      {
        where: {id: req.params.id},
        individualHooks: true
      }
    )
    res.status(200).send()
  } catch (err) {
    console.log(err)
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
