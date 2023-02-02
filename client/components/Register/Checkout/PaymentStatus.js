import React from 'react'
import css from '../register.css'
import styled from 'styled-components'
import {Elements} from '@stripe/react-stripe-js'
import PaymentStatusMessage from './PaymentStatusMessage'
import {loadStripe} from '@stripe/stripe-js'
import RegisterHeader from '../RegisterHeader'
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const PaymentStatus = () => {
  const stripePromise = loadStripe(process.env.PUBLIC_KEY)
  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <Elements stripe={stripePromise}>
          <PaymentStatusMessage />
        </Elements>
      </Wrapper>
    </div>
  )
}
export default PaymentStatus
