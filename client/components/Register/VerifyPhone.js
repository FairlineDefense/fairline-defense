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
const Gradient = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);
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
const Form = styled.div`
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
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  let [code, setCode] = useState('')
  let [loader, setLoader] = useState(false)
  let [text, setText] = useState(
    'Please enter the verification code received by SMS.'
  )

  //Send One Time Password
  async function sendOtp() {
    const data = new URLSearchParams()
    data.append('channel', 'sms')
    data.append('phone', user.phone)
    try {
      const response = await fetch('twilio/start-verify', {
        method: 'POST',
        body: data,
      })

      const json = await response.json()
      if (response.status == 429) {
        setText(
          `You have attempted to verify '${user.phone}' too many times. Please wait 10 minutes and try again.`
        )
      } else if (response.status >= 400) {
        setText(json.error)
      } else {
        if (json.success) {
          setText(`Sent verification code to ${user.phone}`)
        } else {
          console.log(json.error)
        }
      }
    } catch (error) {
      console.error(error)
      setText(`Something went wrong while sending code to ${user.phone}.`)
    }
  }

  const clickHandler = async (e) => {
    e.preventDefault()
    if(code === '' || code.length < 5) {
      return;
    }
    setLoader(true)
    //Check user entered One Time Password
    const checkVerify = code !== '' && await fetch('twilio/check-verify', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code: code, channel: 'sms', phone: user.phone}),
    }).then((res) => res.json())

    setTimeout(() => {
      setLoader(false)

      if (checkVerify.status === 'approved') {
        setText('Phone number verified.')
        history.push('/home')
      }
      if (checkVerify.status === 'pending') {
        setText('Invalid code. Please try again.')
      }
    }, 2000)
  }

  useEffect(() => {
    try {
      sendOtp()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const resend = (e) => {
    e.preventDefault()
    sendOtp()
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      setText('Please enter the verification code received by SMS.')
    }, 2000)
  }

  if (loader) {
    return (
      <Gradient>
        <BackgroundImage>
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
              <Button onClick={(e) => clickHandler(e)} disabled={!code.length}>Continue</Button>
            </CenteredWrapper>
            <BottomWrapper>
              <span>Resend SMS Code</span>
              <span>Edit Phone Number</span>
            </BottomWrapper>
          </Wrapper>
        </BackgroundImage>
      </Gradient>
    )
  }
  return (
    <Gradient>
      <BackgroundImage>
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
              autoFocus
              length={6}
              placeholder=""
              onChange={setCode}
              onComplete={console.log(code)}
              value={code}
            />
          </Form>
          <CenteredWrapper>
            <SubHeading>{text}</SubHeading>
            <Button onClick={(e) => clickHandler(e)} disabled={!code.length}>Continue</Button>
          </CenteredWrapper>
          <BottomWrapper>
            <span
              onClick={(e) => {
                resend(e)
              }}
            >
              Resend SMS Code
            </span>
            <span>Edit Phone Number</span>
          </BottomWrapper>
        </Wrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default VerifyPhone
