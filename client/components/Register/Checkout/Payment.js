import React from 'react'
import {useSelector} from 'react-redux'
import {loadStripe} from '@stripe/stripe-js'
import {useState, useEffect} from 'react'
import CreateSubscription from './CreateSubscription'
import css from '../register.css'
import styled from 'styled-components'
import RegisterHeader from '../RegisterHeader'
import BillingAddress from './BillingAddress'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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

const Payment = props => {
  let user = useSelector(state => state.user)
  const {priceId, planClickHandler, protectionType, protectionTypeString, price, interval} = props
  const stripePromise = loadStripe(process.env.PUBLIC_KEY)
  let [clientSecret, setClientSecret] = useState('none')

  let [customerId, setCustomerId] = useState('none')

  let [address, setAddress] = useState({
    apt: '',
    streetAddress: '',
    address2: '',
    city: '',
    state: 'State',
    zipCode: ''
  })

  const changeHandler = e => {
    e.preventDefault()
    setAddress({...address, [e.target.name]: e.target.value})
  }

  
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
    const {clientSecret} = await response.json()
    setClientSecret(clientSecret)
  }

  // Create Customer creates the customer object with their personal information for Stripe.
  // Stripe can then generate a Client Secret to render the PaymentElement in our CheckoutForm
  const createCustomer = async address => {
    try {
      let reqBody = {...user, ...address}
      const response = await fetch('/payment/create-customer', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reqBody)
      })
      const {customerId: customerId} = await response.json()
      setCustomerId(customerId)
    } catch (error) {
      console.log('create customer error', error)
    }
  }

  useEffect(
    () => {
      try {
        if (customerId !== 'none') {
          fetchCs()
        }
      } catch (error) {
        console.log(error)
      }
    },
    [customerId]
  )

  const options = {
    clientSecret: clientSecret,
    // Appearance of Stripe form:
    appearance: {
      theme: 'stripe',

      variables: {
        colorText: '#0C192E',
        colorPrimaryText: '#FFF',
        colorTextSecondary: '#FFF',
        colorTextPlaceholder: '#AAB1B9',
        colorPrimary: '#00abe1',
        colorBackground: '#FFF',
        colorDanger: '#FF1E3E',
        fontFamily: 'Poppins, sans-serif',
        spacingUnit: '5px',
        borderRadius: '5px'
      },
      labels: 'floating'
    }
  }
  return (
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
        <div>{protectionTypeString}</div>
        <div>{price}</div>
        </SpaceBetweenWrapper>

        </CenteredWrapper>
        <CenteredWrapper>

        <SpaceBetweenWrapper>
         <div>Billed {interval}</div>
         <div>
         <Blue onClick={(e)=>planClickHandler(e)} value="none">Change</Blue>
         </div>
         </SpaceBetweenWrapper>
        </CenteredWrapper>
        <HR />
        
        {clientSecret === 'none' ? (
          <BillingAddress createCustomer={createCustomer} />
        ) : (
          <CreateSubscription stripe={stripePromise} options={options} changeHandler={changeHandler} apt={address.apt} streetAddress={address.streetAddress} line2={address.line2} city={address.city} state={address.state} zipCode={address.zipCode} />
        )}
      </Wrapper>
    </div>
  )
}
export default Payment
