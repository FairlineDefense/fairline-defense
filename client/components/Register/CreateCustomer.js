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
const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
width: 500px;
align-items: center;
justify-content: space-around;
`
const Button = styled.button`
border: 1px solid #fff;
border-radius: 5px;
outline: none;
background: transparent;
color: #fff;
height: 12rem;
width: 18rem;
margin: 2rem 1rem 2rem 1rem;
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
const Price = styled.p`
font-size: 40px;
color: var(--blue);
margin-bottom: 1rem;
text-align: center;
`
const Term = styled.p`
font-size: 22px;
font-weight: 200;
margin-bottom: 3rem;
text-align: center;
`
const Billing = styled.p`
font-size: 18px;
font-weight: 500;
text-align: center;
`
const H1 = styled.h1`
font-size: 32px;
font-weight: 300;
margin-bottom: 2rem;
`
const H2 = styled.h2`
font-size: 24px;
font-weight: 200;
margin-bottom: 2rem;
`
const H3 = styled.h3`
font-size: 18px;
font-weight: 200;
margin-bottom: 2rem;
`
const Blue = styled.span`
font-size: inherit;
font-weight: inherit;
color: var(--blue);
`
const ChoosePlan = props => {
  const user = useSelector(state => state.user)
  const {name, displayName, error} = props
  const dispatch = useDispatch()

  return (
    <Form>
        {/* Heading */}
        {/* Shipping Info */}
        {/* Continue Button => createCustomer */}
    </Form>
  )
}
export default ChoosePlan
