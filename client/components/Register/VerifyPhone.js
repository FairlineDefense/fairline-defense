import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import { useState } from 'react'
import RegisterHeader from './RegisterHeader'
import ReactInputVerificationCode from 'react-input-verification-code';
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
margin: 3rem;
width: 340px;
text-align: center;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 340px;

.ReactInputVerificationCode__item {
  position: relative;
  border-radius: 5px;
 // background-color: #AAB1B9;
  background-color: #FFF;
  height: 4.5rem;
  width: 3rem;
  font-size: 30px;
  margin: .25rem;
  color: #0C192E;
  font-weight: 200;
}
.ReactInputVerificationCode__item:after {
  background-color: #FFF;
}
`
const PhoneIcon = styled.img`
margin: 1rem;
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
const SemiBold = styled.span`
font-size: inherit;
font-weight: 500;
color: inherit;
`
const Button = styled.button`
background-color: var(--blue);
color: #FFF;
border-radius: 40px;
width: 340px;
padding: 1rem 2rem 1rem 2rem;
font-size: 20px;
font-weight: 100;
margin: 2rem;
outline: none;
border: none;
cursor: pointer;

&::disabled {
background-color: #2A4C78;
}
`

const VerifyPhone = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  let [code,setCode] = useState('')

  const clickHandler = (e) => {
    e.preventDefault(e)
    console.log(code)
    history.push('/home')
  }

    return (
      <div className="auth">
        <svg />
        <svg />
        <svg />
        <RegisterHeader />
        <Wrapper>
          <Heading>Verify Your Phone Number</Heading>
            <CenteredWrapper>
              <PhoneIcon src="./images/confirmphone.png"></PhoneIcon>
            <SubHeading>
            A verification code has been sent to
            </SubHeading>
            <SubHeading>
                {user.phone}
              </SubHeading>
            </CenteredWrapper>
            <Form>
            <ReactInputVerificationCode length={6} placeholder="" onChange={setCode} value={code} />
            </Form>
          <CenteredWrapper>
            <SubHeading>
            Please enter the verification code received by SMS.
          </SubHeading>
            <Button onClick={(e)=>clickHandler(e)} disabled={user.phoneVerified}>Continue</Button>
            </CenteredWrapper>
        </Wrapper>
      </div>
  )
}
export default VerifyPhone
