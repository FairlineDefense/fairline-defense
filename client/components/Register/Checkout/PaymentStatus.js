import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from '../register.css'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useStripe, useElements} from '@stripe/react-stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import PaymentStatusMessage from './PaymentStatusMessage'
import {loadStripe} from '@stripe/stripe-js'
import RegisterHeader from '../RegisterHeader'

const PaymentStatus = () => {
  const user = useSelector(state => state.user)
  const stripePromise = loadStripe(process.env.PUBLIC_KEY)

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
