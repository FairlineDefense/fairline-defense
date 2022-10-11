import React from 'react'
import {useDispatch} from 'react-redux'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {PaymentElement} from '@stripe/react-stripe-js'
import {useState, useEffect} from 'react'
import CheckoutForm from './CheckoutForm'
import css from './register.css'
import styled from 'styled-components'

const Payment = props => {
  const {item, quantity, clickHandler} = props
  const dispatch = useDispatch()
  const order = {item: item, quantity: quantity}
  const stripePromise = loadStripe(process.env.PUBLIC_KEY)
  const handleSubmit = evt => {
    evt.preventDefault()
  }

  const fetchCs = async () => {
    const response = await fetch('/payment/intent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(order)
    })
    const {client_secret: clientSecret} = await response.json()
    setClientSecret(clientSecret)
  }

  let [clientSecret, setClientSecret] = useState('none')

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    }
  }

  useEffect(() => {
    try {
      fetchCs()
    } catch (error) {}
  }, [])
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
  const H1 = styled.h1`
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 1rem;
  `
  const H2 = styled.h2`
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 2rem;
  `
  const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    align-items: center;
    justify-content: space-around;
  `
  const Button = styled.button`
    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;
    background: transparent;
    color: #fff;
    height: 6rem;
    width: 14rem;
    margin: 2rem 1rem 2rem 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: rgba(0, 171, 224, 0.2);
      border-color: var(--blue);
    }
  `
  const Price = styled.p`
    font-size: 32px;
    color: var(--blue);
    margin-bottom: 1rem;
    text-align: center;
  `
  const Term = styled.p`
    font-size: 22px;
    font-weight: 200;
    margin-bottom: 1rem;
    text-align: center;
  `
  const Billing = styled.p`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  `
  const Blue = styled.span`
    font-size: inherit;
    font-weight: inherit;
    color: var(--blue);
  `

  if (clientSecret === 'none') {
    return (
      <div className="auth">
        <svg />
        <svg />
        <svg />
        <header className="authHeader">
          <img src="./images/fdlogo.png" />
        </header>
        <Wrapper>Loading</Wrapper>
      </div>
    )
  }

  return (
    <div className="auth">
      <svg />
      <svg />
      <svg />
      <header className="authHeader">
        <img src="./images/fdlogo.png" />
      </header>
      <Wrapper>
        <H1>Selected Plan</H1>
        <ButtonWrapper>
          <Button onClick={e => clickHandler(e)} value="month">
            <Price>$19</Price>
            <Billing>Billed Monthly</Billing>
          </Button>
          <Button onClick={e => clickHandler(e)} value="year">
            <Price>$199</Price>
            <Billing>Billed Annually</Billing>
          </Button>
        </ButtonWrapper>
        <H1>Credit Card</H1>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </Wrapper>
    </div>
  )
}
export default Payment
