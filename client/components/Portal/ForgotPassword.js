import React from 'react'
import { auth } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import css from './style.css'
import FDTextField from '../FDTextField'

const Gradient = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(102.57deg, #21488a 0%, #0b182d 100%);
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
const Logo = styled.img`
  height: 64px;
  width: auto;
  margin-bottom: 2rem;
`
const H3 = styled.h3`
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 2rem;
`
const H6 = styled.h6`
  font-weight: 300;
  font-size: 15px;
  line-height: 15px;
  margin-bottom: 1rem;
`
const ResetWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10rem;
  position: relative;
  @media (max-width: 768px) {
    padding: 4rem 1rem 0rem 1rem;
  }
`
const ResetForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 340px;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
const ResetInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 6px;
  font-size: 16px;
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ResetFormButton = styled.button`
  width: 340px;
  font-weight: 200;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 50px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 20px;
  background-color: var(--blue);
  margin: 2rem 0rem 2rem 0rem;
  cursor: pointer;
`
const SentFormButton = styled.button`
  width: 340px;
  font-weight: 200;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 50px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 20px;
  background-color: var(--darkblue);
  margin: 2rem 0rem 2rem 0rem;
  cursor: ban;
`
const BottomText = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
`
const ForgotPassword = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  &&a {
    color: var(--blue);
  }
`
const ErrorText = styled.span`
  color: red;
  margin-top: 2px;
`
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: auto;
  animation: ${spin} 2s linear infinite;
`;

const Reset = () => {
  let user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  let [errorText, setErrorText] = useState('')
  let [form, setForm] = useState({ email: '' })
  let [sent, setSent] = useState(false);
  let [checking, setChecking] = useState(false);
  let [error, setError] = useState('')

  const changeHandler = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    
    setChecking(true);
    setError("");

    const email = form.email
    console.log(email);

    fetch('twilio/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(res => {
        setChecking(false);
        if(res.status == 200) {
          setSent(true);
        } else {
          setError('User Not Found!');
          setSent(false);
        }
        return res.json()
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        setSent(false);
        setError(error);
      })
  }

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false)
    user.error = ''
  }

  const handleClose = (value) => {
    setOpen(false)
    user.error = ''
    setSelectedValue(value)
  }

  useEffect(() => {
    if (user.error) {
      setOpen(true)
    }
  }, [user])

  return (
    <Gradient>
      <BackgroundImage>
        <ResetWrapper>
          <CenteredWrapper>
            <Link to="/">
              <Logo src="./images/fdlogo.png" />
            </Link>
          </CenteredWrapper>
          <CenteredWrapper>
            <H3>Forgot your password?</H3>
          </CenteredWrapper>
          <CenteredWrapper>
            <H6>Enter your email and we'll send you a link to reset your password.</H6>
          </CenteredWrapper>
          <CenteredWrapper>
            <ResetForm onSubmit={handleSubmit} name="reset">
              <div>
                <FDTextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="filled"
                  type="email"
                  value={form.email}
                  onChange={(e) => changeHandler(e)}
                  style={{ marginTop: 30 }}
                  required
                />
              </div>
              {error && <ErrorText>{error}</ErrorText>}
              <div>
                {sent ?
                  <SentFormButton type="submit" disabled>Email Sent</SentFormButton> :
                  ( checking ? <ResetFormButton type="button"><Loader/></ResetFormButton> : <ResetFormButton type="submit">Reset Password</ResetFormButton>)}
              </div>
            </ResetForm>
          </CenteredWrapper>
          <CenteredWrapper>
            <BottomText style={{ justifyContent: 'right' }}>
              <Link to="/login">Back to Sign in</Link>
            </BottomText>
          </CenteredWrapper>
          <CenteredWrapper>
            {errorText && <ErrorText>{errorText}</ErrorText>}
          </CenteredWrapper>
        </ResetWrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default Reset
