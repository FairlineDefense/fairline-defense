import React from 'react'
import css from '../register.css'
import styled from 'styled-components'
import {Elements} from '@stripe/react-stripe-js'
import PaymentStatusMessage from './PaymentStatusMessage'
import {loadStripe} from '@stripe/stripe-js'
import RegisterHeader from '../RegisterHeader'
const Gradient = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);
  color: #fff;
  overflow-x: hidden;

  a {
    color: var(--blue);
  }

  a:visited {
    color: var(--blue);
  }

  a:hover {
    color: var(--blue);
  }
`
const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('./images/background.png');
  background-repeat: no-repeat;
  background-position: -120px -100px;

  @media (max-width: 800px) {
    background-image: url('./images/backgroundimagered.png');
    background-position: -120px bottom;
    position: fixed;
  }
`
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
    <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <Wrapper>
          <Elements stripe={stripePromise}>
            <PaymentStatusMessage />
          </Elements>
        </Wrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default PaymentStatus
