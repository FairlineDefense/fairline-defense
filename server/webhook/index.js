require('dotenv').config()
// This is your test secret API key.
const stripe = require('stripe')(process.env.SECRET_KEY);
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
const endpointSecret = process.env.ENDPOINT_SECRET;
const express = require('express');
const { User, Order} = require('../db/models');
const router = require('express').Router()
module.exports = router

router.post('/', express.raw({type: 'application/json'}), async (request, response) => {

  let event = request.body;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = request.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }
  console.log(event.type, ':', event.data.object)
  // Handle the event
  switch (event.type) {
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      try {
        await User.update({last4: paymentMethod.card.last4, brand: paymentMethod.card.brand, expMonth: paymentMethod.card.exp_month, expYear: paymentMethod.card.exp_year}, 
            {where: {customerId: paymentMethod.customer}})
      } catch (error) {
        console.log(error)
      }
        break;
    }
    switch (event.type) {
      case 'customer.subscription.created':
        const invoice = event.data.object;
        try {
          const user = await User.findOne({where: {customerId: invoice.customer}})
          // Add logic to translate datestamps and add to user plan start, end, days left, planActive etc
          // This is a catch all for invoice payment succeeded, so in the event a spouse is added, do we want the
          // above logic here?
          const order = await Order.create({orderId: invoice.id, customerId: invoice.customer, plan: invoice.plan.id, product: invoice.plan.product, interval: invoice.plan.interval, paidAt: 'n/a', amountDue: invoice.plan.amount, amountPaid: 'n/a', amountRemaining: invoice.plan.amount, invoicePDF: 'n/a', periodEnd: invoice.current_period_end, periodStart: invoice.current_period_start, status: invoice.status })
          await user.addOrder(order)
        } catch (error) {
          console.log(error)
        }
        break;
      }
     switch (event.type) {
    case 'customer.subscription.updated':
      const invoice = event.data.object;
      try {
      await Order.update({paidAt: 'n/a', amountDue: invoice.amount_due, amountPaid: invoice.amount_paid, amountRemaining: invoice.amount_remaining, invoicePDF: invoice.invoice_pdf }, {where: {orderId: invoice.id}})
      } catch (error) {
        console.log(error)
      }
      break;
    }
        switch (event.type) {
          case 'invoice.paid':
            const invoice = event.data.object;
            try {
              await Order.update({paidAt: invoice.status_transitions.paid_at, amountDue: invoice.amount_due, amountPaid: invoice.amount_paid, amountRemaining: invoice.amount_remaining, invoicePDF: invoice.invoice_pdf, status: invoice.status }, {where: {orderId: invoice.subscription}})
            } catch (error) {
              console.log(error)
            }
              break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
  

});

