import React, {useState} from 'react'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js'
import ShippingAddress from './ShippingAddress'

import Checkbox from '@material-ui/core/Checkbox'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'

import styled from 'styled-components'
import user from '../../../store/user'

const FormWrapper = styled.div`
  width: 800px;
  text-align: center;

  @media (max-width: 800px) {
    width: 90%;
  }
`
const Form = styled.form`
  font-size: 18px;
  font-weight: 200;
  width: 100%;
`
const Span = styled.span`
  width: 100%;
`
const CenteredWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const LeftWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 800px;
text-align: left;
font-size: 14px;
line-height: 20px;

p {
  font-weight: bold;
}

div {
  margin-bottom: 1rem;

  svg {
    fill: white;
  }
}

div:nth-child(2) {
  padding-left: 1rem;
}

@media (max-width: 800px) {
width: 80%;
}
`

const Button = styled.button`
  background-color: var(--hotred);
  color: #fff;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 100;
  margin: 2rem;
  outline: none;
  border: none;
  cursor: pointer;

  @media(max-width: 800px) {
    margin: .5rem;
  }
`
const Header = styled.h1`
  font-size: 32px;
  font-weight: 300;
  margin: 0.5rem 0rem 2rem 0rem;

  @media(max-width: 800px) {
    margin: .5rem;
    margin-bottom: 1rem;
    font-size: 22px;
  }
`
const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState(null)
  const [show, setShow] = useState(false)
  let [accept, setAccept] = useState(false)

  let [address, setAddress] = useState({
    shippingApt: '',
    shippingStreetAddress: '',
    shippingAddress2: '',
    shippingCity: '',
    shippingState: 'State',
    shippingZipCode: ''
  })

  let [errorText, setErrorText] = useState('')

  const changeHandler = e => {
    e.preventDefault()
    setAddress({...address, [e.target.name]: e.target.value})
  }
  const clickHandler = e => {
    e.preventDefault()
    function validateFields() {
      if (!/^\d{5}(-\d{4})?$/.test(address.shippingZipCode)) {
        return setErrorText('Invalid zip code.')
      }
      if (address.state === '' || address.shippingState === 'state') {
        return setErrorText('Invalid state.')
      } else {
        dispatch(update({...user, address}))
      }
    }
    validateFields()
  }

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    clickHandler(event)

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        //Why does an env variable not work here?
        return_url: 'https://www.fairlinedefense.com/paymentstatus'
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

        <CenteredWrapper>
      <Header>
        Shipping Address
      </Header>
      </CenteredWrapper>

      <LeftWrapper>
      <div>
      <ThemeProvider theme={theme}>
        <Checkbox color="primary" onChange={() => setShow(!show)} checked={!show} />
      </ThemeProvider>
      </div>
      <div>My shipping address is the same as my billing address.
        <p>{user.streetAddress ||'123 Fake St'} {user.line2 || 'Bottom Floor'} <br />{user.city || 'New York'}, {user.state || 'NY'} {user.zipCode || '12314'}</p>
      </div>
      </LeftWrapper>

      <ShippingAddress show={show} clickHandler={clickHandler} changeHandler={changeHandler} shippingApt={address.shippingApt} shippingStreetAddress={address.shippingStreetAddress} shippingCity={address.shippingCity} shippingState={address.shippingState} shippingZipCode={address.shippingZipCode}  />

      <LeftWrapper>
      <div>
      <ThemeProvider theme={theme}>
        <Checkbox color="primary" onChange={() => setAccept(!accept)} checked={accept} />
      </ThemeProvider>
      </div>
      <div>By starting my Membership, I confirm that I have read and agree to the Fairline Defense Terms & Conditions. I understand that my Membership will automatically renew monthly at the then-current subscription rate, which will be charged to my payment method on file. I understand that I can update my payment method or pause or cancel my Membership at any time in accordance with the Membership Terms by going to my Account Settings at www.fairlinedefense.com/mymembership, and that these changes will take effect at the end of my current billing cycle.</div>
      </LeftWrapper>

        <CenteredWrapper>
          <Button disabled={!stripe}>Start my Membership</Button>
        </CenteredWrapper>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </Form>
    </FormWrapper>
  )
}

export default CheckoutForm
