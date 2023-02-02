import React from 'react'
import styled from 'styled-components'
import {useEffect} from 'react'
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import RegisterHeader from '../RegisterHeader'
import css from '../register.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import PlanSummary from './PlanSummary'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const CreateSubscription = ({order:{priceId, customerId, clientSecret, price, protectionType, billingInterval, protectionTypeString, apt, streetAddress, line2, city, state, zipCode}, order, options, stripePromise, setOrder, changeHandler, setStep}) => {
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

  if (!clientSecret || clientSecret === '' || !stripePromise) {
      return (
        <div className="auth">
          <svg className="logo" />
          <svg className="logo" />
          <svg className="logo" />
          <RegisterHeader />
          <CenteredWrapper>
            <ThemeProvider theme={theme}>
              <CircularProgress color={theme.palette.primary.main} />
            </ThemeProvider>
          </CenteredWrapper>
        </div>
      )
    }

  return (
    <>
      <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
      <PlanSummary price={price} priceId={priceId} protectionTypeString={protectionTypeString} protectionType={protectionType} billingInterval={billingInterval} setStep={setStep} changeHandler={changeHandler} />
        <Header>Credit Card</Header>
        <CenteredWrapper>
      <Elements stripe={stripePromise} options={options}>
        <Wrapper>
          <CheckoutForm order={order} apt={apt} streetAddress={streetAddress} line2={line2} city={city} state={state} zipCode={zipCode} changeHandler={changeHandler} setOrder={setOrder} />
        </Wrapper>
      </Elements>
      </CenteredWrapper>
      </Wrapper>
    </div>
    </>
  )
}
export default CreateSubscription
