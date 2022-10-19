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
margin-bottom: 2rem;
`
const Form = styled.form`
max-width: 700px;
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
width: 220;
margin: .5rem;
padding: 1rem;
font-color: #333;
border: none;
border-radius: 4px;
outline: none;
`
const InputGrow = styled.input`
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
const ChoosePlan = props => {
  const user = useSelector(state => state.user)
  const {name, displayName, error} = props
  const dispatch = useDispatch()

  return (
    <Wrapper>
    <Header>Shipping Address</Header>
    <Form>
        <AptNumber name='' placeholder='Apt.' value=''></AptNumber>
        <InputGrow name='' placeholder='Street Address' value=''></InputGrow>
        <Line2 name='' placeholder='Street Address 2 - Optional' value=''></Line2>
        <City name='' placeholder='City' value=''></City>
        <State name='' placeholder='State' value=''></State>
        <InputGrow name='' placeholder='Zip Code' value=''></InputGrow>
    </Form>
    <Button onClick={(e)=>createCustomer(e)}>Continue to Payment</Button>
    </Wrapper>
  )
}
export default ChoosePlan
