const router = require('express').Router()
const {User, Order} = require('../db/models')
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)
const fetch = require('node-fetch');
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
    const user = await User.findOne({where: {id: req.params.id}})

    // API call to Klaviyo using their klaviyoProfileID to update fields, email, phone, name
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
        line1: streetAddress,
        line2: line2,
        city: city,
        state: state,
        postal_code: zipCode,
      },
      name: `${firstName} ${lastName}`,
      phone: phone
    }
      }
    );
    next()
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
