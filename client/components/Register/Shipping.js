import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from './register.css'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useStripe, useElements} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom'

const Shipping = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const stripe = useStripe();
  const elements = useElements()
  const [message, setMessage] = useState(null);


  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const H1 = styled.h1`
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 2rem;
  `
  const H2 = styled.h2`
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 2rem;
  `
  const H3 = styled.h3`
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 2rem;
  `
  const Blue = styled.span`
    font-size: inherit;
    font-weight: inherit;
    color: var(--blue);
  `
  const Button = styled.button`
  background-color: var(--blue);
  color: #FFF;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 100;
  margin: 1rem;
  outline: none;
  border: none;
  cursor: pointer;

  &::disabled {
  background-color: #2A4C78;
}
  `
  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Success! Payment received.');
            break;

          case 'processing':
            setMessage("Payment processing. We'll update you when payment is received.");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setMessage('Something went wrong.');
            break;
        }
      });
  }, [stripe]);

  const clickHandler = e => {
    e.preventDefault()
  }

  return (
      <Wrapper>
       <H1>{message}</H1>
       <Link to="/home"><Button>Continue to Account</Button></Link>
      </Wrapper>
  )
}
export default Shipping

