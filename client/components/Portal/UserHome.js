import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from './Navbar'
import ReferAFriend from './ReferAFriend'
import Card from './Card'
import {VerifyEmail, Checkout, Footer} from '../'
import PlanStatus from './PlanStatus'
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {me} from '../../store'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import {ThemeProvider} from '@material-ui/core'
import theme from '../theme'

import RegisterHeader from '../Register/RegisterHeader'

const Gradient = styled.div`
width: 100vw;
min-height: 100vh;
background: linear-gradient(102.57deg, #21488A 0%, #0B182D 100%);
color: #fff;
overflow-x: hidden;

a {
  color: var(--blue);
}

a:visited {
  color: var(--blue);
}

a:hover {
  color: var(--blue);
}
`
const BackgroundImage = styled.div`
height: 100%;
width: 100%;
background-image: url('./images/background.png');
background-repeat: no-repeat;
background-position: -120px -100px;

@media (max-width: 800px) {
background-image: none;
}
`
const Wrapper = styled.div`
  width: 100vw;
  padding: 2rem;
  background: linear-gradient(102.57deg, #2a4c78 0%, #0b182d 100%);
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 550px;
`
const Main = styled.div`
  height: 500px;
  width: 100vw;
  color: #fff;
  display: flex;
  padding: 5rem;
  flex-direction: row;

  @media (max-width: 768px) {
    height: 110vh;
    flex-direction: column;
    padding: 1rem 0rem 0rem 0rem;
  }
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 70vh;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`
const H1 = styled.h1`
  font-size: 42px;
  font-weight: 500;
  color: #fff;
`
const MemberID = styled.span`
  font-size: 20px;
  font-weight: 200;
  color: #fff;
  margin-bottom: 1rem;
`
const Button = styled.button`
  color: #fff;
  width: 220px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 0.75rem;
  background: transparent;
  outline: none;
  margin: 0.5rem 0rem 0.5rem 0rem;
  font-size: 18px;
  font-weight: 200;
  cursor: pointer;
`
const BlueButton = styled.button`
  color: #fff;
  width: 220px;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  background: var(--cyan);
  outline: none;
  margin: 0.5rem 0rem 0.5rem 0rem;
  font-size: 18px;
  font-weight: 200;
  cursor: pointer;
`
const UserHome = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  let [loaded, setLoaded] = useState(false)
  console.log('user', user)
  useEffect(() => {
    setTimeout(() => {
      dispatch(me())
      setLoaded(true)
    }, 2000)
  }, [])

  // if user.emailVerified => render verify
  // if user.phoneVerified => render verify phone
  // if user.userPlan => render choose plan
  // Set time out to check if user is verified? In use effect above ?

  if (!loaded) {
    return (
     <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <CenteredWrapper>
          <ThemeProvider theme={theme}>
            <CircularProgress color={theme.palette.primary.main} />
          </ThemeProvider>
        </CenteredWrapper>
        </BackgroundImage>
      </Gradient>
    )
  }
  if (!user.emailVerified) {
    return <VerifyEmail />
  }

  if (!user.planActive) {
    return <Checkout />
  }
  return (
    <>
      <Wrapper>
        <Navbar />
        <Main>
          <Left>
            <H1>Hi, {user.firstName}</H1>
            <MemberID>#{user.membershipNumber}</MemberID>
            <Button>Membership Card</Button>
            <Link to="/membership/addaspouse">
              <Button>Add a spouse</Button>
            </Link>
            <BlueButton>Emergency Help</BlueButton>
          </Left>
          <PlanStatus user={user} />
        </Main>
      </Wrapper>
      <ReferAFriend />
      <Card />
      <Footer />
    </>
  )
}

export default UserHome
