const router = require('express').Router()
const {User, Order} = require('../db/models')
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
const fetch = require('node-fetch');
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
    const updateKlaviyoProfileUrl = `https://a.klaviyo.com/api/profiles/${user.klaviyoProfileID}/`;
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
            email: email,
            phone_number: phone,
            first_name: firstName,
            last_name: lastName
          },
          id: user.klaviyoProfileID
        }
      })
    };
    
    fetch(updateKlaviyoProfileUrl, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

    // API call to Stripe using their customerId to update all relevant fields
    await stripe.customers.update(
      user.customerId,
      {email: email,
      name: `${firstName} ${lastName}`,
      phone: `${phone}`,
      address: {
        line1: streetAddress,
        line2: line2,
        city: city,
        state: state,
        postal_code: zipCode,
      },
      shipping: {address: {
        line1: shippingStreetAddress,
        line2: shippingLine2,
        city: shippingCity,
        state: shippingState,
        postal_code: shippingZipCode,
      },
      name: `${firstName} ${lastName}`,
      phone: phone
    }
      }
    );
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  try {
    if (password) {
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
          emailPromotions: emailPromotions,
          password: password
        },
        {
          where: {id: req.params.id},
          individualHooks: true
        }
      )
      res.status(200).send()
    } else {
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
          shippingStreetAddres: shippingStreetAddress,
          shippingLine2: shippingLine2,
          shippingCity: shippingCity,
          shippingState: shippingState,
          shippingZipCode: shippingZipCode,
          emailReminders: emailReminders,
          emailNews: emailNews,
          emailInsider: emailInsider,
          emailPromotions: emailPromotions
        },
        {
          where: {id: req.params.id},
          individualHooks: true
        }
      )
      res.status(200).send()
    }
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
