import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import {useState, useEffect} from 'react'
import RegisterHeader from './RegisterHeader'
import ReactInputVerificationCode from 'react-input-verification-code'
import CircularProgress from '@material-ui/core/CircularProgress'
import {ThemeProvider} from 'styled-components'
import theme from '../theme'

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
    background-color: #fff;
    height: 4.5rem;
    width: 3rem;
    font-size: 30px;
    margin: 0.25rem;
    color: #0c192e;
    font-weight: 200;
  }
  .ReactInputVerificationCode__item:after {
    background-color: #fff;
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
  font-weight: 100;
  width: 300px;
`
const SemiBold = styled.span`
  font-size: inherit;
  font-weight: 700;
  color: inherit;
`
const Button = styled.button`
  background-color: var(--blue);
  color: #fff;
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
    background-color: #2a4c78;
  }
`
const BottomWrapper = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin-top: 0.5rem;

  span {
    color: var(--blue);
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
  }
`
const ProgressWrapper = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
`
const VerifyPhone = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  let [code, setCode] = useState('')
  let [loader, setLoader] = useState(false)
  let [incorrect, setIncorrect] = useState(false)

  const clickHandler = async e => {
    e.preventDefault()

    setLoader(true)

    const verifyCode = await fetch('klaviyo/phone-code', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({code: code})
    })
    const res = verifyCode

    setTimeout(() => {
      setLoader(false)

      if (res.status === 200) {
        history.push('/home')
      }
      if (res.status === 403) {
        setIncorrect(true)
      }
    }, 2000)
  }

  const sendText = async () => {
    if (user.id) {
      await fetch('klaviyo/verify-phone', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: user.email, phone: user.phone})
      })
        .then(res => res.json())
        .then(data => setCode(String(data)))
    }
  }

  useEffect(() => {
    try {
      sendText()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const resend = e => {
    e.preventDefault()
    sendText()
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      setIncorrect(false)
    }, 2000)
  }

  if (loader) {
    return (
      <div className="auth">
        <svg className="logo" />
        <svg className="logo" />
        <svg className="logo" />
        <RegisterHeader />
        <Wrapper>
          <Heading>Verify your phone</Heading>
          <CenteredWrapper>
            <PhoneIcon src="./images/confirmphone.png" />
            <SubHeading>A verification code has been sent to</SubHeading>
            <SemiBold>{user.phone}</SemiBold>
          </CenteredWrapper>
          <CenteredWrapper>
            <ThemeProvider theme={theme}>
              <ProgressWrapper>
                <CircularProgress color={theme.palette.primary.main} />
              </ProgressWrapper>
            </ThemeProvider>
          </CenteredWrapper>
          <CenteredWrapper>
            <SubHeading>
              Please enter the verification code received by SMS.
            </SubHeading>
            <Button onClick={e => clickHandler(e)}>Continue</Button>
          </CenteredWrapper>
          <BottomWrapper>
            <span>Resend SMS Code</span>
            <span>Edit Phone Number</span>
          </BottomWrapper>
        </Wrapper>
      </div>
    )
  }
  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <Heading>Verify your phone</Heading>
        <CenteredWrapper>
          <PhoneIcon src="./images/confirmphone.png" />
          <SubHeading>A verification code has been sent to</SubHeading>
          <SemiBold>{user.phone}</SemiBold>
        </CenteredWrapper>
        <Form>
          <ReactInputVerificationCode
            length={6}
            placeholder=""
            onChange={setCode}
            value={code}
          />
        </Form>
        <CenteredWrapper>
          <SubHeading>
            {incorrect
              ? 'That code was incorrect. Please try again or send a new code.'
              : 'Please enter the verification code received by SMS.'}
          </SubHeading>
          <Button onClick={e => clickHandler(e)}>Continue</Button>
        </CenteredWrapper>
        <BottomWrapper>
          <span
            onClick={e => {
              resend(e)
            }}
          >
            Resend SMS Code
          </span>
          <span>Edit Phone Number</span>
        </BottomWrapper>
      </Wrapper>
    </div>
  )
}
export default VerifyPhone
