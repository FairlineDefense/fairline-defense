import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import RegisterHeader from './RegisterHeader'
import { useEffect } from 'react'
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
font-weight: 300;
margin-bottom: 2rem;
`
const SubHeading = styled.span`
font-size: 16px;
font-weight: 200;
`
const EmailIcon = styled.img`
margin: 1rem;
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
background-color: var(--blue);
color: #FFF;
border-radius: 40px;
width: 340px;
padding: 1rem 2rem 1rem 2rem;
font-size: 20px;
font-weight: 100;
margin: 1rem;
outline: none;
border: none;
cursor: pointer;

&::disabled {
background-color: #2A4C78;
}
`

const VerifyEmail = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const clickHandler = async (e) => {
    
    await fetch('webhook/klaviyo/verify-email', {
      method: 'POST',
      headers: {
        'accept': 'application/json', 'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: user.email})
    }).then(()=> history.push('/home'))
  }

  const sendEmail = async () => {
    if(user.id) {
      await fetch('klaviyo/create-account', {
        method: 'POST',
        headers: {
          'accept': 'application/json', 'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: user.email, phone: user.phone})
      })
      console.log('Fire')
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
        <svg />
        <svg />
        <svg />
        <RegisterHeader />
        <Wrapper>
          <Heading>Verify Your Email</Heading>
            <CenteredWrapper>
            <EmailIcon src="./images/confirmemail.png"></EmailIcon>
            <SubHeading>
              A confirmation link has been sent to
            </SubHeading>
            <SubHeading>
              <SemiBold>
                {user.email}
              </SemiBold>
              </SubHeading>
            </CenteredWrapper>
          <BottomWrapper>
            <SubHeading>
            In order to proceed, please check your email and click the confirmation link.
          </SubHeading>
           <Button onClick={(e)=>clickHandler(e)} disabled={user.emailVerified}>Continue</Button>
            </BottomWrapper>
        </Wrapper>
      </div>
  )
}
export default VerifyEmail
