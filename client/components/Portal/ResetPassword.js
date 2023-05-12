import React from 'react'
import { auth } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import css from './style.css'
import FDTextField from '../FDTextField'

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
  background-image: url('/images/background.png');
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

const ResetPassword = (props) => {
  let user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  let [error, setError] = useState('')
  let [form, setForm] = useState({ email: '' })
  let [done, setDone] = useState(false);
  let [checking, setChecking] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const password = form.password;
    const confirmPassword = form.confirmPassword;
    const { token } = props.match.params;

    setError("");

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    function validateFields() {
      let res = true

      if (password !== confirmPassword) {
        setError('Passwords do not match')
        res = false
      }
      if (password.length < 8) {
        setError('Passwords must be min. 8 chars long')
        res = false
      }
      if (password.search(/[a-z]/i) < 0) {
        setError('Passwords must contain at least one letter')
        res = false
      }
      if (password.search(/[!@#\$%\^\&*\)\(+=._-]/i) < 0) {
        setError(
          'Passwords must contain at least one special character'
        )
        res = false
      }
      if (password.search(/[0-9]/) < 0) {
        setError('Passwords must contain at least one number')
        res = false
      }
      return res
    }

    if (!validateFields())
      return;

    setChecking(true);

    fetch('/auth/update-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password }),
    })
      .then(res => {
        setChecking(false);
        if (res.status == 200) {
          setDone(true);
        } else {
          alert('User Not Found!');
          setDone(false);
        }
        return res.json()
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        setDone(false);
        console.log(error);
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
              <Logo src="/images/fdlogo.png" />
            </Link>
          </CenteredWrapper>
          { !done ? (
          <div>
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
                    label="Password"
                    name="password"
                    variant="filled"
                    type="password"
                    value={form.password}
                    onChange={(e) => changeHandler(e)}
                    style={{ marginTop: 30 }}
                    required
                  />
                </div>
                <div>
                  <FDTextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    variant="filled"
                    type="password"
                    value={form.confirmPassword}
                    onChange={(e) => changeHandler(e)}
                    style={{ marginTop: 30 }}
                    required
                  />
                </div>
                {error && <ErrorText>{error}</ErrorText>}
                <div>
                  {checking ? <ResetFormButton type="button"><Loader /></ResetFormButton>
                    : <ResetFormButton type="submit">Reset Password</ResetFormButton>}
                </div>
              </ResetForm>
            </CenteredWrapper>
            <CenteredWrapper>
              <BottomText style={{ justifyContent: 'right' }}>
                <Link to="/login">Back to Sign in</Link>
              </BottomText>
            </CenteredWrapper>
          </div> ) : (
          <div>
            <CenteredWrapper>
              <img
                src="/images/bigbluecheck.png"
                style={{
                  height: 100,
                  marginBottom: 50
                }}
              />
            </CenteredWrapper>
            <CenteredWrapper>
              <H3>Password Changed!</H3>
            </CenteredWrapper>
            <CenteredWrapper>
              <H6>Your password has been changed successfully.</H6>
            </CenteredWrapper>
          </div>)}
        </ResetWrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default ResetPassword
