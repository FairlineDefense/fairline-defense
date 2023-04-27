import React, {useState} from 'react'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js'
import ShippingAddress from './ShippingAddress'
import {useDispatch, useSelector} from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import {update} from '../../../store'
import styled from 'styled-components'

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
  font-size: 12px;
  line-height: 20px;

  p {
    font-weight: bold;
  }

  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

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

  @media (max-width: 800px) {
    margin: 2rem;
  }
`
const CreditCardInfo = ({
  order: {
    apt,
    streetAddress,
    line2,
    city,
    state,
    zipCode,
    differentAddress,
    termsAndConditions
  },
  order,
  options,
  stripePromise,
  setOrder,
  changeHandler,
  setStep
}) => {
  const user = useSelector(state => state.user)
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    // Update user's shipping address in our db
    dispatch(update({id: user.id, ...order}))

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
          {/* PaymentElement is the Stripe component that renders a credit card info form */}
          <PaymentElement />
        </Span>

        <LeftWrapper>
          <div>
            <ThemeProvider theme={theme}>
              <Checkbox
                color="primary"
                onChange={() =>
                  setOrder({...order, differentAddress: !differentAddress})
                }
                name="differentAddress"
                checked={!differentAddress}
              />
            </ThemeProvider>
          </div>
          <div>
            My shipping address is the same as my billing address.
            <p>
              {apt} {streetAddress} {line2} <br />
              {city}, {state} {zipCode}
            </p>
          </div>
        </LeftWrapper>

        <ShippingAddress
          order={order}
          changeHandler={changeHandler}
          setOrder={setOrder}
        />

        <LeftWrapper>
          <div>
            <ThemeProvider theme={theme}>
              <Checkbox
                color="primary"
                onChange={() =>
                  setOrder({...order, termsAndConditions: !termsAndConditions})
                }
                name="termsAndConditions"
                checked={termsAndConditions}
                required
              />
            </ThemeProvider>
          </div>
          <div>
            By starting my Membership, I confirm that I have read and agree to
            the Fairline Defense Terms & Conditions. I understand that my
            Membership will automatically renew monthly at the then-current
            subscription rate, which will be charged to my payment method on
            file. I understand that I can update my payment method or pause or
            cancel my Membership at any time in accordance with the Membership
            Terms by going to my Account Settings at
            www.fairlinedefense.com/mymembership, and that these changes will
            take effect at the end of my current billing cycle.
          </div>
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

export default CreditCardInfo
