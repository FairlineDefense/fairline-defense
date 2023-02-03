import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import FDTextField from '../../FDTextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import RegisterHeader from '../RegisterHeader'
import css from '../register.css'
import PlanSummary from './PlanSummary'
import states from './states'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

  @media (max-width: 800px) {
    font-size: 22px;
    margin: 1rem;
  }
`
const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    width: 90%;
    margin-right: 0.5rem;
  }
`
const ErrorText = styled.div`
  height: 50px;
  width: 360px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 1rem;
  background-color: #fff;
  color: #000;
`
const ContinueButton = styled.button`
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

  &:disabled {
    cursor: default;
    background-color: #2a4c78;
    color: #5d789a;
  }
`
const BillingAddress = ({
  order: {
    price,
    priceId,
    protectionType,
    protectionTypeString,
    billingInterval,
    apt,
    streetAddress,
    line2,
    city,
    state,
    zipCode
  },
  order,
  setStep,
  changeHandler,
  setOrder
}) => {
  let [errorText, setErrorText] = useState('')

  const clickHandler = e => {
    e.preventDefault()
    function validateFields() {
      if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
        return setErrorText('Invalid zip code.')
      }
      if (state === '' || state === 'state') {
        return setErrorText('Invalid state.')
      } else {
        //Set order to create customer to trigger stripe customer creation
        setOrder({...order, customerId: 'createCustomer'})
      }
    }
    validateFields()
  }

  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <PlanSummary
          price={price}
          priceId={priceId}
          changeHandler={changeHandler}
          protectionTypeString={protectionTypeString}
          protectionType={protectionType}
          billingInterval={billingInterval}
          setStep={setStep}
        />
        <Header>Billing Address</Header>
        <ThemeProvider theme={theme}>
          <Form>
            <FDTextField
              label="Apt."
              variant="filled"
              type="text"
              style={{margin: 8, maxWidth: 90}}
              name="apt"
              placeholder="Apt"
              onChange={e => changeHandler(e)}
              value={apt}
            />
            <FDTextField
              name="streetAddress"
              label="Street Address"
              placeholder="Street Address"
              type="text"
              variant="filled"
              style={{margin: 8, flexGrow: 1}}
              onChange={e => changeHandler(e)}
              value={streetAddress}
              required
            />
            <FDTextField
              fullWidth
              name="line2"
              label="Street Address Line 2"
              placeholder="Street Address Line 2"
              type="text"
              variant="filled"
              style={{margin: 8}}
              onChange={e => changeHandler(e)}
              value={line2}
            />
            <FDTextField
              name="city"
              placeholder="City"
              label="City"
              variant="filled"
              style={{margin: 8, flexGrow: 1}}
              onChange={e => changeHandler(e)}
              value={city}
              required
            />
            <Select
              placeholder="State"
              style={{
                backgroundColor: '#FFF',
                borderRadius: 4,
                margin: 8,
                width: 100,
                paddingLeft: 20
              }}
              name="state"
              value={state}
              onChange={e => setOrder({...order, state: e.target.value})}
              required
            >
              {states.map(state => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            <FDTextField
              name="zipCode"
              placeholder="Zip Code"
              label="Zip Code"
              variant="filled"
              style={{margin: 8, flexGrow: 1}}
              onChange={e => changeHandler(e)}
              value={zipCode}
              required
            />
          </Form>
        </ThemeProvider>
        <ContinueButton onClick={e => clickHandler(e)}>Continue</ContinueButton>
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </Wrapper>
    </div>
  )
}
export default BillingAddress
