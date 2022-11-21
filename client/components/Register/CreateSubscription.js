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
const Button = styled.button`
  background-color: var(--blue);
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
`
const Header = styled.h1`
  font-size: 32px;
  font-weight: 300;
  margin: 0.5rem 0rem 2rem 0rem;
`
const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
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
