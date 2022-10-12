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
  const {priceId, customerId, clickHandler} = props
  const stripePromise = loadStripe(process.env.PUBLIC_KEY)
  let [clientSecret, setClientSecret] = useState('none')

  // Fetch client secret to render payment form from Stripe
  const fetchCs = async () => {
    const response = await fetch('payment/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: priceId,
        customerId: customerId,
      }),
    })
    const {clientSecret: clientSecret} = await response.json()
    setClientSecret(clientSecret)
  }

  useEffect(() => {
    try {
      fetchCs()
    } catch (error) {
      console.log(error)
    }
  }, [priceId])

  const options = {
    clientSecret: clientSecret,
    // Appearance of Stripe form:
    appearance: {
      theme: 'stripe',

      variables: {
        colorText: '#FFF',
        colorPrimary: '#FFF',
        colorBackground: '#ffffff',
        colorDanger: '#df1b41',
        fontFamily: 'Poppins, sans-serif',
        spacingUnit: '4px',
        borderRadius: '4px',
    },
  }
  }

  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `
  const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  `
  const H1 = styled.h1`
    font-size: 32px;
    font-weight: 300;
    margin: 1rem 0rem 2rem 0rem;
  `
  const H2 = styled.h2`
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 2rem;
  `
  const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
  `
  const Button = styled.button`
    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;
    background: transparent;
    color: #fff;
    height: 6rem;
    width: 14rem;
    margin: 1rem;
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
  const SelectedButton = styled.button`
    border: 1px solid var(--blue);
    border-radius: 5px;
    outline: none;
    background: rgba(0, 171, 224, 0.2);
    color: #fff;
    height: 6rem;
    width: 14rem;
    margin: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;
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

  if (clientSecret === 'none' || !clientSecret) {
    return (
      <div className="auth">
        <svg />
        <svg />
        <svg />
        <header className="authHeader">
          <img src="./images/fdlogo.png" />
        </header>
        <CenteredWrapper>
          Loading
          </CenteredWrapper>
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
        <CenteredWrapper>
        <H1>Selected Plan</H1>
        </CenteredWrapper>
        <ButtonWrapper>
          {priceId === 'price_1LrnW0IvvF6ba6jUlHTzjnlt' ? (
            <>
              <SelectedButton value="price_1LrnW0IvvF6ba6jUlHTzjnlt">
                <Price>$19</Price>
                <Billing>Billed Monthly</Billing>
              </SelectedButton>
              <Button onClick={e => clickHandler(e)} value="price_1LrnXQIvvF6ba6jUHo9iIRDM">
                <Price>$199</Price>
                <Billing>Billed Annually</Billing>
              </Button>
            </>
          ) : (
            <>
              <Button onClick={e => clickHandler(e)} value="price_1LrnW0IvvF6ba6jUlHTzjnlt">
                <Price>$19</Price>
                <Billing>Billed Monthly</Billing>
              </Button>
              <SelectedButton value="price_1LrnXQIvvF6ba6jUHo9iIRDM">
                <Price>$199</Price>
                <Billing>Billed Annually</Billing>
              </SelectedButton>
            </>
          )}
        </ButtonWrapper>
        <CenteredWrapper><H1>Credit Card</H1></CenteredWrapper>
        
        <Elements stripe={stripePromise} options={options}>
        <CenteredWrapper>
          <CheckoutForm />
        </CenteredWrapper>
        </Elements>
      </Wrapper>
    </div>
  )
}
export default Payment
