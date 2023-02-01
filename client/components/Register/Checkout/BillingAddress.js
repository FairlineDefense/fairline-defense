import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import FDTextField from '../../FDTextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'

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

  @media(max-width: 800px) {
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
    margin-right: .5rem;
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
const BillingAddress = props => {
  const {createCustomer, apt, streetAddress, line2, city, zipCode, changeHandler} = props
// Getting address from parent Payment, passing props to CreateSubscription//Needs checking
  let [errorText, setErrorText] = useState('')

  const clickHandler = e => {
    e.preventDefault()
    function validateFields() {
      if (!/^\d{5}(-\d{4})?$/.test(address.zipCode)) {
        return setErrorText('Invalid zip code.')
      }
      if (address.state === '' || address.state === 'state') {
        return setErrorText('Invalid state.')
      } else {
        createCustomer(address)
      }
    }
    validateFields()
  }

  const states = [
    'State',
    'AL',
    'AK',
    'AL',
    'AR',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'MD',
    'ME',
    'MI',
    'MN',
    'MO',
    'MS',
    'MT',
    'NC',
    'ND',
    'NE',
    'NH',
    'NJ',
    'NM',
    'NV',
    'NY',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VA',
    'VT',
    'WA',
    'WI',
    'WV',
    'WY'
  ]

  return (
    <Wrapper>
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
            value={address.apt}
          />
          <FDTextField
            name="streetAddress"
            label="Street Address"
            placeholder="Street Address"
            type="text"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={e => changeHandler(e)}
            value={address.streetAddress}
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
            value={address.line2}
          />
          <FDTextField
            name="city"
            placeholder="City"
            label="City"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={e => changeHandler(e)}
            value={address.city}
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
            value={address.state}
            onChange={e => changeHandler(e)}
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
            value={address.zipCode}
            required
          />
        </Form>
      </ThemeProvider>
      <Button onClick={e => clickHandler(e)}>Continue to Payment</Button>
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Wrapper>
  )
}
export default BillingAddress
