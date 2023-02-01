import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {PaymentElement} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import RegisterHeader from '../RegisterHeader'
import css from '../register.css'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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

const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const SpaceBetweenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  padding: .2rem 0rem .2rem 0rem;

  @media (max-width: 800px) {
    width: 90%;
  }
`
const HR = styled.div`
  height: 1px;
  color: #fff;
  display: block;
  width: 800px;

  @media (max-width: 800px) {
    width: 90%;
  }
`
const H1 = styled.h1`
  font-size: 32px;
  font-weight: 300;
  margin: 1rem 0rem 1rem 0rem;

  @media(max-width: 800px) {
    font-size: 22px;
    margin: 2rem 0rem 0rem 0rem;
  }
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
const Billing = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
const Blue = styled.button`
font-size: 20px;
cursor: pointer;
text-decoration: underline;
font-weight: inherit;
color: #00ABE0;
background: transparent;
outline: none;
border: none;
`

const CreateSubscription = ({order:{priceId, customerId, clientSecret, apt, streetAddress, line2, city, state, zipCode}, order, options, stripePromise, setOrder, changeHandler, setStep}) => {
  // Fetch client secret from Stripe with customer and product information
  const fetchCs = async () => {
    const response = await fetch('payment/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        priceId: priceId,
        customerId: customerId
      })
    })
    const {clientSecretRes} = await response.json()
    console.log(clientSecretRes)
    setOrder({...order, clientSecret: clientSecretRes})
  }

    useEffect(
    () => {
      try {
        if (customerId !== '') {
          fetchCs()
        }
      } catch (error) {
        console.log(error)
      }
    },
    [customerId]
  )

  if (!clientSecret || clientSecret === '') {
    return 'loading'
  }
  return (
    <>
      <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
      <CenteredWrapper>
          <H1>Plan Summary</H1>
        </CenteredWrapper>

      <CenteredWrapper>
        <SpaceBetweenWrapper>
        {/* <div>{protectionTypeString}</div>
        <div>{price}</div> */}
        </SpaceBetweenWrapper>

        <SpaceBetweenWrapper>
         {/* <div>Billed {interval}</div> */}
         <div>
         {/* <Blue onClick={()=>setStep('')} value="none">Change</Blue> */}
         </div>
         </SpaceBetweenWrapper>
        </CenteredWrapper>
        <HR />
        
        <Header>Credit Card</Header>
      <Elements stripe={stripePromise} options={options}>
        <Wrapper>
          <CheckoutForm order={order} apt={apt} streetAddress={streetAddress} line2={line2} city={city} state={state} zipCode={zipCode} changeHandler={changeHandler} setOrder={setOrder} />
        </Wrapper>
      </Elements>
      </Wrapper>
    </div>
    </>
  )
}
export default CreateSubscription
