import React, { useState, useRef } from 'react'
import { useStripe, useElements, PaymentElement, CardElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js'
import ShippingAddress from './ShippingAddress'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../theme'
import { update } from '../../../store'
import styled, { keyframes } from 'styled-components';
import history from '../../../history';

import { WindowSharp } from '@mui/icons-material'

const FormWrapper = styled.div`
  width: 700px;
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
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
  width: 700px;
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

  @media (max-width: 700px) {
    width: 80%;
  }
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  animation: ${spin} 2s linear infinite;
`;

const StyledCardElement = styled(CardElement)`
  height: 60px;
  padding: 21px 12px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

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
  setStep,
  setValidCoupon,
  setValidDiscount,
}) => {
  const user = useSelector(state => state.user)

  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(0);

  return (
    <FormWrapper>
        <Span >
          {/* PaymentElement is the Stripe component that renders a credit card info form */}
          <StyledCardElement style={{ paddingTop: '10px' }} />
        </Span>
    </FormWrapper>
  )
}

export default CreditCardInfo
