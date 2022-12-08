import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import RegisterHeader from './RegisterHeader'
import {useEffect} from 'react'
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 4rem;
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  text-align: center;
`
const Heading = styled.span`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 1.5rem;
`
const SubHeading = styled.span`
  font-size: 16px;
  font-weight: 100;
  line-height: 22px;
`
const EmailIcon = styled.img`
  margin: 1.5rem;
`
const SemiBold = styled.span`
  font-size: inherit;
  font-weight: 500;
  color: inherit;
`
const BottomWrapper = styled.span`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  text-align: center;
`
const Button = styled.button`
  color: #5d789a;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 100;
  margin: 2rem;
  outline: none;
  background: transparent;
  background: rgba(0, 171, 224, 0.2);
  border: 1px solid #5d789a;

  &::disabled {
    background-color: #2a4c78;
  }
`

const VerifyEmail = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const clickHandler = async e => {
    e.preventDefault()
    // For bypassing email functionality for testing:
    process.env.NODE_ENV === 'development' &&
      (await fetch('webhooks/klaviyo/verify-email', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: user.email})
      }).then(() => history.push('/home')))
  }

  const sendEmail = async () => {
    if (user.id && !user.emailVerified) {
      await fetch('klaviyo/create-account', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: user.email, phone: user.phone})
      })
    }
  }

  useEffect(() => {
    try {
      sendEmail()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <Heading>Verify your email</Heading>
        <CenteredWrapper>
          <EmailIcon src="./images/confirmemail.png" />
          <SubHeading>A confirmation link has been sent to</SubHeading>
          <SubHeading>
            <SemiBold>{user.email}</SemiBold>
          </SubHeading>
        </CenteredWrapper>
        <BottomWrapper>
          <SubHeading>
            In order to proceed, please check your email and click the
            confirmation link.
          </SubHeading>
          <Button onClick={e => clickHandler(e)}>Continue</Button>
        </BottomWrapper>
      </Wrapper>
    </div>
  )
}
export default VerifyEmail
