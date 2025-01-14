import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import styled from 'styled-components'
import MembershipSubPortal from './MembershipSubPortal'
import Footer from '../Site/Home/Footer'
import VerifyPhone from '../Register/VerifyPhone'
const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0rem 5rem 0rem 5rem;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);

  @media (max-width: 800px) {
    padding: 0rem;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 8rem 4rem 8rem;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`
const UserInfo = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 800px;
  padding: 2rem 1rem 2rem 1rem;
`
const Header = styled.header`
  color: #fff;
  font-weight: 400;
  margin: 1rem 0rem 1rem 0rem;
  font-size: 30px;
`
const Membership = () => {
  const user = useSelector(state => state.user)

  if (!user.phoneVerified) {
    return <VerifyPhone />
  }

  return (
    <>
      <Background>
        <Navbar />
        <Wrapper>
          <Header>Membership</Header>
          <MembershipSubPortal />
        </Wrapper>
      </Background>
      <Footer />
    </>
  )
}

export default Membership
