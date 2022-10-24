const router = require('express').Router()
const {User, Order} = require('../db/models')
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY);
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    console.log('get user', req.params.id)
    const user = await User.findOne({where:{id:req.params.id},include:{model: Order}} )
    const data = JSON.stringify(user, 2, null)
    let obj = JSON.parse(data)
    const getStatus = () => {
      const date = Date.now()
      const orders = obj.orders
      for(let i = 0; i < orders.length; i++) {
        const startDate = Math.floor(Number(orders[i].periodStart) * 1000)
        const endDate = Math.floor(Number(orders[i].periodEnd) * 1000)

        if(startDate < date) {
          if(endDate > date) {
            if(orders[i].status === 'paid') {
              obj.planActive = true
              obj.periodStart = new Date(startDate)
              obj.periodEnd = new Date(endDate)
              obj.daysTotal = Math.floor((endDate - startDate) / 86400000)
              obj.daysLeft = Math.floor((endDate - date) / 86400000)
            }
          }
          break;
        }
      }
    }
    getStatus()
    res.json(obj)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const {firstName, lastName, email, phone, streetAddress, line2, city, state, zipCode, password} = req.body
  try {
      await User.update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      streetAddress: streetAddress,
      line2: line2,
      city: city,
      state: state,
      zipCode: zipCode,
      // password: password Should have its own route
    },
    {
      where:{id: req.params.id}
    })
    res.status(200).send()
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.post('/create-customer-portal-session', async (req, res) => {
  // Authenticate your user.
  const session = await stripe.billingPortal.sessions.create({
    customer: req.body.customerId,
    return_url: 'http://localhost:8080/membership',
  });

  res.redirect(session.url);
});