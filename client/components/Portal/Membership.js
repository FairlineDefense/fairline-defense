import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import styled from 'styled-components'

const Membership = () => {
  const user = useSelector(state => state.user)

  const Background = styled.container`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(102.57deg, #21488a 0%, #0b182d 100%);
  `
  const Wrapper = styled.container`
  width: 100%;
  height: 100%;
  padding: 2rem;
  `
  const UserInfo = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 800px;
  padding: 2rem 1rem 2rem 1rem;
  `
  return (
    <Background>
      <Navbar />
      <Wrapper>
      <Heading>Membership</Heading>
      <MembershipSubPortal />
      </Wrapper>
     
    </Background>
  )
}

export default Membership
