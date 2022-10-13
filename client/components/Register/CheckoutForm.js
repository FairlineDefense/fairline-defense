import React, {useState} from 'react'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import styled from 'styled-components'
const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState(null)


 const FormWrapper = styled.div`
 width: 800px;
 text-align: center;
 `
  const Form = styled.form`
  font-size: 18px;
  font-weight: 200;
  width: 100%;
  `
  const Span = styled.span`
width: 100%;
  `
  const Button = styled.button`
  background-color: var(--blue);
  color: #FFF;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 100;
  margin: 2rem;
  outline: none;
  border: none;
  `

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: process.env.PAYMENT_STATUS_URL
      }
    })

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }

  return (
    <FormWrapper>
    <Form onSubmit={handleSubmit}>
      <Span>
      <PaymentElement />
      </Span>
      <Span>
      <Button disabled={!stripe}>Purchase</Button>
      </Span>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </Form>
    </FormWrapper>
  )
}

export default CheckoutForm
