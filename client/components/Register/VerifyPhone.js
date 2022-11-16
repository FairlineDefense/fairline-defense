import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import { useState, useEffect } from 'react'
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
padding-top: 4rem;
`
const CenteredWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 340px;
text-align: center;
margin: 1rem;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 340px;
margin: 1rem 0rem 2rem 0rem;

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
`
const SubHeading = styled.span`
font-size: 16px;
font-weight: 200;
`
const Button = styled.button`
background-color: var(--blue);
color: #FFF;
border-radius: 40px;
width: 340px;
padding: 1rem 2rem 1rem 2rem;
font-size: 20px;
font-weight: 100;
margin: 1rem 0rem 2rem 0rem;
outline: none;
border: none;
cursor: pointer;

&::disabled {
background-color: #2A4C78;
}
`
const BottomWrapper = styled.span`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 340px;
margin-top: .5rem;

span {
  color: var(--blue);
  font-weight: 400;
  font-size: 14px;
}
`
const VerifyPhone = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  let [code, setCode] = useState('')

  const clickHandler = async (e) => {
    e.preventDefault()
      const verifyCode = await fetch('klaviyo/phone-code', {
        method: 'POST',
        headers: {
          'accept': 'application/json', 'Content-Type': 'application/json',
        },
        body: JSON.stringify({code:code})
      })
      const res = verifyCode
      if(res.status === 200) {
      history.push('/home')
      }
      if(res.status === 403) {
        console.log('Invalid Code')
      }
  }


  const sendText = async () => {
    if(user.id) {
       await fetch('klaviyo/verify-phone', {
        method: 'POST',
        headers: {
          'accept': 'application/json', 'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: user.email, phone: user.phone})
      }).then((res)=> res.json()).then((data)=>setCode(String(data)))
    }
  }

useEffect(() => {
try {
  sendText()
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
          <Heading>Verify your phone</Heading>
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
            <Button onClick={(e)=>clickHandler(e)}>Continue</Button>
            </CenteredWrapper>
            <BottomWrapper><span>Resend SMS Code</span><span>Edit Phone Number</span></BottomWrapper>
        </Wrapper>
      </div>
  )
}
export default VerifyPhone
