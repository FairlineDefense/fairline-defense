import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import {VerifyEmail, VerifyPhone, ChoosePlan} from '../'
import styled from 'styled-components'
const UserHome = () => {
  const user = useSelector(state => state.user)
  // if user.emailVerified => render verify
  // if user.phoneVerified => render verify phone
  // if user.userPlan => render choose plan

  // if(!user.emailVerified) {
  //   return <VerifyEmail />
  // }

  // if (!user.phoneVerified) {
  //   return <VerifyPhone />
  // }

  // if (!user.plan) {
  //   return <ChoosePlan />
  // }
const Main = styled.div`
height: 500px;
width: 100vw;
color: #fff;
display: flex;
padding: 5rem;
`
const Wrapper = styled.div`
width: 100vw;
padding: 2rem;
background: linear-gradient(102.57deg, #21488a 0%, #0b182d 100%);
`
const Left = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: flex-start;
`
const H1 = styled.h1`
font-size: 42px;
font-weight: 500;
color: #FFF;
`
const MemberID = styled.span`
font-size: 20px;
font-weight: 200;
color: #FFF;
margin-bottom: 1rem;
`
const Button = styled.button`
color: #fff;
width: 220px;
border: 1px solid #FFF;
border-radius: 5px;
padding: .75rem;
background: transparent;
outline: none;
margin: .5rem 0rem .5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
`
const BlueButton = styled.button`
color: #fff;
width: 220px;
border: none;
border-radius: 5px;
padding: .75rem;
background: var(--cyan);
outline: none;
margin: .5rem 0rem .5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
`
const Right = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: flex-start;
`
const TextBlock = styled.div`
display: flex;
width: 220px;
flex-direction: column;
`
const Bold = styled.span`
font-weight: 500;
`
const Small = styled.span`
font-weight: 200;
`
  return (
    <Wrapper>
      <Navbar />
      <Main>
      <Left>
        <H1>Hi, {user.firstName}</H1>
        <MemberID>#000000001</MemberID>
        <Button>Membership Card</Button>
        <Button>Add a spouse</Button>
        <BlueButton>Emergency Help</BlueButton>
      </Left>
      <Right>
    <TextBlock><Bold>Auto Renew</Bold><Small>October 12, 2022</Small></TextBlock>
    <TextBlock><Bold>Questions</Bold><Small>Call 1 877 xxx xxxx</Small></TextBlock>
      </Right>
      </Main>
    </Wrapper>
  )
}

export default UserHome
