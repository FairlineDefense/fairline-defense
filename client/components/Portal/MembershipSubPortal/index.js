import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import MembershipNav from './MembershipNav'
import PersonalInformation from './PersonalInformation'
import EditPersonalInformation from './EditPersonalInformation'
import MembershipAndBilling from './MembershipAndBilling'
import EmailPreferences from './EmailPreferences'
import Invoices from './Invoices'
import AddASpouse from './AddASpouse'
import EditSpouse from './EditSpouse'

const WhiteBackground = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 4rem 4rem 6rem 4rem;
  position: relative;
  background-color: #fff;
  border-radius: 4px;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`
export default function MembershipSubPortal(props) {
  const user = useSelector(state => state.user)
  let [state, setState] = useState('')

  useEffect(() => {
    if (window.location.pathname.split('/')[2] === 'membershipandbilling') {
      setState('MembershipAndBilling')
    }
    if (window.location.pathname.split('/')[2] === 'addaspouse') {
      setState('AddASpouse')
    }
  }, [])
  const switcher = () => {
    switch (state) {
      case 'PersonalInformation':
        return <PersonalInformation user={user} setState={setState} />
      case 'EditPersonalInformation':
        return <EditPersonalInformation user={user} setState={setState} />
      case 'MembershipAndBilling':
        return <MembershipAndBilling user={user} setState={setState} />
      case 'Invoices':
        return <Invoices user={user} />
      case 'EmailPreferences':
        return <EmailPreferences user={user} setState={setState} />
      case 'AddASpouse':
        return <AddASpouse user={user} setState={setState} />
      case 'EditSpouse':
        return <EditSpouse user={user} setState={setState} />
      default:
        return <PersonalInformation user={user} setState={setState} />
    }
  }
  return (
    <>
      <MembershipNav state={state} setState={setState} />
      <WhiteBackground>{switcher()}</WhiteBackground>
    </>
  )
}
