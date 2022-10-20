import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Button = styled.button`
background-color: var(--blue);
color: #FFF;
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
margin: .5rem 0rem 2rem 0rem;
`
const Form = styled.form`
max-width: 700px;
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex-grow: 1;
margin: .5rem;
padding: 1rem;
font-color: #333;
border: none;
border-radius: 4px;
outline: none;
`
const City = styled.input`
min-width: 300px;
margin: .5rem;
padding: 1rem;
font-color: #333;
border: none;
border-radius: 4px;
outline: none;
`
const AptNumber = styled.input`
width: 100px;
margin: .5rem;
padding: 1rem;
font-color: #333;
border: none;
border-radius: 4px;
outline: none;
`
const Line2 = styled.input`
width: 100%;
margin: .5rem;
padding: 1rem;
font-color: #333;
border: none;
border-radius: 4px;
outline: none;
`
const State = styled.select`
width: 100px;
margin: .5rem;
padding: 1rem;
font-color: #333;
border: none;
border-radius: 4px;
outline: none;
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
  const {createCustomer} = props
  let [address, setAddress] = useState({apt: '', streetAddress: '', address2: '', city: '', state: '', zipCode: ''})
  let [errorText, setErrorText] = useState('')
  const changeHandler = (e) => {
    e.preventDefault()
    setAddress({...address, [e.target.name]: e.target.value})
  }
  const clickHandler = (e) => {
    e.preventDefault()
    function validateFields() {
      if(!/^\d{5}(-\d{4})?$/.test(address.zipCode)) {
          return setErrorText('Invalid zip code.')
      }
      if(address.state === '' || address.state === 'state') {
        return setErrorText('Invalid state.')
      }
      else {
        createCustomer(address)
      }
    }
    validateFields()
  }

  return (
    <Wrapper>
    <Header>Billing Address</Header>
    <Form>
        <AptNumber name='apt' placeholder='Apt.' onChange={(e) => changeHandler(e)} value={address.apt}></AptNumber>
        <Input name='streetAddress' placeholder='Street Address' onChange={(e) => changeHandler(e)} value={address.streetAddress} required></Input>
        <Line2 name='line2' placeholder='Street Address 2 - Optional' onChange={(e) => changeHandler(e)} value={address.line2}></Line2>
        <City name='city' placeholder='City' onChange={(e) => changeHandler(e)} value={address.city} required></City>
        <State placeholder="State" name='state' value={address.state} onChange={(e)=>changeHandler(e)} required>
                        <option value="">State</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AL">AL</option>
                        <option value="AR">AR</option>
                        <option value="AZ">AZ</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="IA">IA</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="MA">MA</option>
                        <option value="MD">MD</option>
                        <option value="ME">ME</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MO">MO</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="NE">NE</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NV">NV</option>
                        <option value="NY">NY</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VA">VA</option>
                        <option value="VT">VT</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>
                        <option value="WV">WV</option>
                        <option value="WY">WY</option>
        </State>
        <Input name='zipCode' placeholder='Zip Code' onChange={(e) => changeHandler(e)} value={address.zipCode} required></Input>
    </Form>
    <Button onClick={(e)=>clickHandler(e)}>Continue to Payment</Button>
    {errorText && <ErrorText>{errorText}</ErrorText>}
    </Wrapper>
  )
}
export default BillingAddress
