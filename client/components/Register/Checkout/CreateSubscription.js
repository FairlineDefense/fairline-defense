import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {useState} from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {PaymentElement} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h1`
  font-size: 32px;
  font-weight: 300;
  margin: 0.5rem 0rem 2rem 0rem;

  @media(max-width: 800px) {
    margin: .5rem;
    font-size: 22px;
  }
`

const CreateSubscription = props => {
  const {stripe, options} = props

  if (!options.clientSecret || options.clientSecret === 'none') {
    return 'loading'
  }
  return (
    <>
      <Wrapper>
        <Header>Credit Card</Header>
      </Wrapper>
      <Elements stripe={stripe} options={options}>
        <Wrapper>
          <CheckoutForm />
        </Wrapper>
      </Elements>
    </>
  )
}
export default CreateSubscription
