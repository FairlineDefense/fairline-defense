import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
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
const State = styled.input`
width: 100px;
margin: .5rem;
padding: 1rem;
font-color: #333;
border: none;
border-radius: 4px;
outline: none;
`
const BillingAddress = props => {
  const {createCustomer} = props
  let [address, setAddress] = useState({apt: '', streetAddress: '', address2: '', city: '', state: '', zipCode: ''})

  const changeHandler = (e) => {
    e.preventDefault()
    setAddress({...address, [e.target.name]: e.target.value})
  }
  const clickHandler = (e) => {
    e.preventDefault()
    createCustomer(address)
  }
  return (
    <Wrapper>
    <Header>Shipping Address</Header>
    <Form>
        <AptNumber name='apt' placeholder='Apt.' onChange={(e) => changeHandler(e)} value={address.apt}></AptNumber>
        <Input name='streetAddress' placeholder='Street Address' onChange={(e) => changeHandler(e)} value={address.streetAddress} required></Input>
        <Line2 name='line2' placeholder='Street Address 2 - Optional' onChange={(e) => changeHandler(e)} value={address.line2}></Line2>
        <City name='city' placeholder='City' onChange={(e) => changeHandler(e)} value={address.city} required></City>
        <State name='state' placeholder='State' onChange={(e) => changeHandler(e)} value={address.state} required></State>
        <Input name='zipCode' placeholder='Zip Code' onChange={(e) => changeHandler(e)} value={address.zipCode} required></Input>
    </Form>
    <Button onClick={(e)=>clickHandler(e)}>Continue to Payment</Button>
    </Wrapper>
  )
}
export default BillingAddress
