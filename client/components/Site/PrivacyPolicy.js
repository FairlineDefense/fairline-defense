import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Footer from './Home/Footer'
import PrivacyPolicyContent from '../shared/PrivacyPolicyContent'

const PrivacyPolicyWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 6rem 6rem;
  @media (max-width: 768px) {
    padding: 4rem 2rem 0rem 1.5rem;
  }
`

const Header = styled.h1`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const PrivacyPolicy = () => {
  const headerText =
    window.location.pathname === '/privacypolicy'
      ? 'Privacy Policy'
      : 'Terms of Service'

  return (
    <div>
      <Navbar shouldShowBackground />
      <PrivacyPolicyWrapper>
        <Header>{headerText}</Header>
        <PrivacyPolicyContent />
      </PrivacyPolicyWrapper>
      <Footer />
    </div>
  )
}
export default PrivacyPolicy
