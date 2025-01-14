import React from 'react'
import styled from 'styled-components'
import FDTextField from '../../FDTextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import states from './states'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Line2Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Header = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin: 0.5rem 0rem 2rem 0rem;

  @media (max-width: 800px) {
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
    margin-right: 0.5rem;
  }
`
const ShippingAddress = ({
  order: {
    differentAddress,
    shippingApt,
    shippingStreetAddress,
    shippingLine2,
    shippingCity,
    shippingState,
    shippingZipCode,
  },
  order,
  setOrder,
  changeHandler,
}) => {
  if (!differentAddress) {
    return null
  }
  return (
    <Wrapper>
      <Header>Shipping Address</Header>
      <ThemeProvider theme={theme}>
        <Form>
          <FDTextField
            fullWidth
            name="shippingStreetAddress"
            autoComplete="street-address"
            label="Street Address"
            placeholder="Street Address"
            type="text"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={(e) => changeHandler(e)}
            value={shippingStreetAddress}
            required
          />
          <Line2Wrapper>
            <FDTextField
              name="shippingLine2"
              autoComplete="street-address line2"
              label="Street Address Line 2"
              placeholder="Street Address Line 2"
              type="text"
              variant="filled"
              style={{margin: 8, flexGrow: 1}}
              onChange={(e) => changeHandler(e)}
              value={shippingLine2}
            />
            <FDTextField
              label="Apt."
              variant="filled"
              type="text"
              style={{margin: 8, maxWidth: 90}}
              name="shippingApt"
              placeholder="Apt"
              autoComplete="apt"
              onChange={(e) => changeHandler(e)}
              value={shippingApt}
            />
          </Line2Wrapper>
          <FDTextField
            name="shippingCity"
            autoComplete="city"
            placeholder="City"
            label="City"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={(e) => changeHandler(e)}
            value={shippingCity}
            required
          />
          <Select
            placeholder="State"
            autoComplete="state"
            style={{
              backgroundColor: '#FFF',
              borderRadius: 4,
              margin: 8,
              width: 100,
              paddingLeft: 20,
            }}
            name="shippingState"
            value={shippingState}
            onChange={(e) =>
              setOrder({...order, shippingState: e.target.value})
            }
            required
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
          <FDTextField
            name="shippingZipCode"
            placeholder="Zip Code"
            autoComplete="zip-code"
            label="Zip Code"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={(e) => changeHandler(e)}
            value={shippingZipCode}
            required
          />
        </Form>
      </ThemeProvider>
    </Wrapper>
  )
}
export default ShippingAddress
