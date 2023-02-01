import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import FDTextField from '../../FDTextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import update from '../../../store/user'
import {useDispatch, useSelector} from 'react-redux'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
const Form = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    margin-right: .5rem;
  }
`
const ShippingAddress = props => {
    
    let {show, changeHandler, shippingApt, shippingStreetAddress, shippingLine2, shippingCity, shippingState, shippingZipCode} = props

  if(!show) {
    return null
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
      <Header>Shipping Address</Header>
      <ThemeProvider theme={theme}>
        <Form>
          <FDTextField
            label="Apt."
            variant="filled"
            type="text"
            style={{margin: 8, maxWidth: 50}}
            name="shippinApt"
            placeholder="Apt"
            onChange={e => changeHandler(e)}
            value={shippingApt}
          />
          <FDTextField
            name="shippingStreetAddress"
            label="Street Address"
            placeholder="Street Address"
            type="text"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={e => changeHandler(e)}
            value={shippingStreetAddress}
            required
          />
          <FDTextField
            fullWidth
            name="shippingLine2"
            label="Street Address Line 2"
            placeholder="Street Address Line 2"
            type="text"
            variant="filled"
            style={{margin: 8}}
            onChange={e => changeHandler(e)}
            value={shippingLine2}
          />
          <FDTextField
            name="shippingCity"
            placeholder="City"
            label="City"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={e => changeHandler(e)}
            value={shippingCity}
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
            name="shippingState"
            value={shippingState}
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
            name="shippingZipCode"
            placeholder="Zip Code"
            label="Zip Code"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={e => changeHandler(e)}
            value={shippingZipCode}
            required
          />
        </Form>
      </ThemeProvider>
    </Wrapper>
  )
}
export default ShippingAddress
