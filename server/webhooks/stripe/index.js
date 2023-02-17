require('dotenv').config()
// This is your test secret API key.
const stripe = require('stripe')(process.env.SECRET_KEY)
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
const endpointSecret = process.env.ENDPOINT_SECRET
const express = require('express')
const {User, Order} = require('../../db/models')
const router = require('express').Router()
const dateString = require('../../../utils/dateString')

module.exports = router

router.post(
  '/',
  express.raw({type: 'application/json'}),
  async (request, response) => {
    let event = request.body

    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature']
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        )
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message)
        return response.sendStatus(400)
      }
    }
    console.log(event.type, ':', event.data.object)
    // Handle the event
    // switch (event.type) {
    //   case 'charge.succeeded':
    //     const charge = event.data.object;
    //     try {
    //       await User.update({last4: charge.payment_method_details.card.last4,
    //         brand: charge.payment_method_details.card.brand,
    //         expMonth: charge.payment_method_details.card.exp_month,
    //         expYear: charge.payment_method_details.card.exp_year},
    //         {where: {customerId: charge.payment_method_details.customer}})
    //     } catch (error) {
    //       console.log(error)
    //     }
    //       break;
    //   }
    switch (event.type) {
      case 'customer.updated':
        const customer = event.data.object
        try {
          let card = {
            last4: undefined,
            exp_year: undefined,
            exp_month: undefined,
            brand: undefined
          }

          if (customer.invoice_settings.default_payment_method) {
            await stripe.paymentMethods
              .retrieve(customer.invoice_settings.default_payment_method)
              .then(res => (card = res.card))
          }

          await User.update(
            {
              email: customer.email,
              firstName: customer.name.split(' ')[0],
              lastName: customer.name.split(' ')[1],
              phone: customer.phone,
              city: customer.address.city,
              state: customer.address.state,
              streetAddress: customer.address.line1,
              line2: customer.address.line2,
              postalCode: customer.address.postal_code,
              country: customer.address.country,
              last4: card.last4 && card.last4,
              expYear: card.exp_year && card.exp_year,
              expMonth: card.exp_month && card.exp_month,
              brand: card.brand && card.brand
            },
            {where: {customerId: customer.id}}
          )
        } catch (error) {
          console.log(error)
        }
        break
    }
    switch (event.type) {
      case 'customer.subscription.created':
        const subscription = event.data.object
        try {
           await User.update({
            subscriptionId: subscription.id,
            }, {
            where: {customerId: subscription.customer}
            })
        } catch (error) {
          console.log(error)
        }
        break
    }
    switch (event.type) {
      case 'customer.subscription.updated':
        const invoice = event.data.object
        try {
          if (invoice.canceled_at) {
            return await Order.update(
              {status: 'cancelled'},
              {where: {orderId: invoice.id}}
            )
          }
          if (invoice.default_payment_method) {
            const paymentMethod = await stripe.paymentMethods.retrieve(
              invoice.default_payment_method
            )
            await User.update(
              {
                paymentMethod: invoice.default_payment_method,
                last4: paymentMethod.card.last4,
                expYear: paymentMethod.card.exp_year,
                expMonth: paymentMethod.card.exp_month,
                brand: paymentMethod.card.brand
              },
              {where: {customerId: invoice.customer}}
            )
          }
        } catch (error) {
          console.log(error)
        }
        break
    }
    switch (event.type) {
      case 'customer.subscription.deleted':
        const subscription = event.data.object
        try {
          await User.update({
            planActive: false,
            spouseName: 'n/a',
            spouseEmail: 'n/a',
            spousePhone: 'n/a'
          })
          const order = Order.findOne({where: {orderId: subscription.id}})
          await order.destroy()
        } catch (error) {
          console.log(error)
        }
        break
    }
    switch (event.type) {
      case 'invoice.updated':
        const invoice = event.data.object
        try {
          if (invoice.amount_remaining >= 1) {
            await Order.update(
              {status: 'action_required'},
              {where: {orderId: invoice.subscription}}
            )
          }
        } catch (error) {
          console.log(error)
        }
        break
    }
    switch (event.type) {
      case 'invoice.paid':
        const invoice = event.data.object
        try {
          await Order.update(
            {
              paidAt: invoice.status_transitions.paid_at,
              amountDue: invoice.amount_due,
              amountPaid: invoice.amount_paid,
              amountRemaining: invoice.amount_remaining,
              invoicePDF: invoice.invoice_pdf,
              status: invoice.status
            },
            {where: {orderId: invoice.subscription}}
          )
        } catch (error) {
          console.log(error)
        }
        break
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`)
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send()
  }
)
