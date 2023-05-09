import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
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
  }
`
const DropdownMenu = styled.select`
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;

  option {
    background-color: #132A4A;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function MembershipSubPortal(props) {
  const user = useSelector(state => state.user)
  let [state, setState] = useState('')
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800)

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 800)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (window.location.pathname.split('/')[2] === 'membershipandbilling') {
      setState('MembershipAndBilling')
    }
    if (window.location.pathname.split('/')[2] === 'addaspouse') {
      setState('AddASpouse')
    }
  }, [])

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

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
      {isDesktop ? (
        <MembershipNav state={state} setState={setState} />
      ) : (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '2rem' }}>
        <DropdownMenu value={state} onChange={handleStateChange}>
          <option value="PersonalInformation">Personal Information</option>
          <option value="EditPersonalInformation">Edit Personal Information</option>
          <option value="MembershipAndBilling">Membership & Billing</option>
          <option value="Invoices">Invoices</option>
          <option value="EmailPreferences">Email Preferences</option>
          <option value="AddASpouse">Add a Spouse</option>
          <option value="EditSpouse">Edit a Spouse</option>
        </DropdownMenu>
      </div>)}
      <WhiteBackground>{switcher()}</WhiteBackground>
    </>
  )
}
