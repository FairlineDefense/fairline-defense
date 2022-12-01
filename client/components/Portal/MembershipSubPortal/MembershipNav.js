import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
background: none;
outline: none;
border: none;
cursor: pointer;
color: #fff;
margin: 0rem 2rem 0.5rem 0rem;
font-size: 14px;
line-height: 20px;
font-weight: 200;

@media (max-width: 800px) {
  margin: 0rem 0.5rem 0.5rem 0rem;
}
`
export default function MembershipNav(props) {
  let {state, setState} = props

  return (
    <div>
      <Button
        onClick={e => {
          setState(e.target.value)
        }}
        value="PersonalInformation"
      >
        Personal Info
      </Button>
      <Button
        onClick={e => {
          setState(e.target.value)
        }}
        value="MembershipAndBilling"
      >
        Membership and Billing
      </Button>
      <Button
        onClick={e => {
          setState(e.target.value)
        }}
        value="Invoices"
      >
        Invoices
      </Button>
      <Button
        onClick={e => {
          setState(e.target.value)
        }}
        value="EmailPreferences"
      >
        Email Preferences
      </Button>
    </div>
  )
}
