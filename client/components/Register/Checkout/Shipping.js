import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from '../register.css'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useStripe, useElements} from '@stripe/react-stripe-js'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 4rem;
position: relative;
`
const H1 = styled.h1`
font-size: 30px;
font-weight: 300;
margin-bottom: 2rem;
margin-top: 1rem;
`
const Button = styled.button`
background-color: var(--blue);
color: #fff;
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
  background-color: #2a4c78;
}
`

const Header = styled.div`
font-size: 60px;
line-height: 70px;
font-weight: bold;
text-align: center;
color: #fff;
width: 500px;
margin-bottom: 3rem;
`

const Shipping = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null)

  useEffect(
    () => {
      if (!stripe) {
        return
      }

      // Retrieve the "payment_intent_client_secret" query parameter appended to
      // your return_url by Stripe.js
      const clientSecret = new URLSearchParams(window.location.search).get(
        'payment_intent_client_secret'
      )

      // Retrieve the PaymentIntent
      stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Payment is Successful!')
            break

          case 'processing':
            setMessage(
              "Payment processing. We'll update you when payment is received."
            )
            break

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Payment failed. Please try another payment method.')
            break

          default:
            setMessage('Something went wrong.')
            break
        }
      })
    },
    [stripe]
  )

  const clickHandler = e => {
    e.preventDefault()
  }

  return (
    <Wrapper>
        {message === 'Payment is Successful!' ? (<img src="./images/bluecheck.png" />) : null }

      <H1>{message}</H1>
      <Link to="/home">
        {message === 'Payment is Successful!' ? (<Header>Welcome to the Fairline Family</Header>) : null }
        <Button>View my Membership</Button>
      </Link>
    </Wrapper>
  )
}
export default Shipping
