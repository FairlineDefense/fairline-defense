import React from 'react'
import {auth} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import css from './style.css'

const Login = () => {
  let user = useSelector(state => state.user)
  const dispatch = useDispatch()
  let [errorText, setErrorText] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    dispatch(auth(email, password, 'login'))
  }

  useEffect(
    () => {
      user.error &&
        setErrorText('Invalid login credentials. Forgot your password?')
    },
    [user]
  )
  const Logo = styled.img`
  height: 64px;
  width: auto;
  margin-bottom: 2rem;
  `
  const H1 = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 2rem;
`
const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10rem;
  position: relative;
  @media (max-width: 768px) {
    padding: 4rem 1rem 0rem 1rem;
  }
`
const LoginForm = styled.form`
display: flex;
flex-direction: column;
width: 340px;
position: relative;
@media (max-width: 768px) {
  max-width: 100%;
}
`
const LoginInput = styled.input`
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
const LoginFormButton = styled.button`
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
  return (
    <section className="auth">
    <svg />
    <svg />
    <svg />
    <LoginWrapper>
     <CenteredWrapper>
      <Logo src="./images/fdlogo.png" />
     </CenteredWrapper>
     <CenteredWrapper><H1>Login</H1></CenteredWrapper>
      <CenteredWrapper>
      <LoginForm onSubmit={handleSubmit} name="login">
        <div>
          <LoginInput name="email" type="text" placeholder="Email" />
        </div>
        <div>
          <LoginInput name="password" type="password" placeholder="Password" />
        </div>
        <ForgotPassword><Link to="#">Forgot your password?</Link></ForgotPassword>
        <div>
          <LoginFormButton type="submit">Log In</LoginFormButton>
        </div>
        {errorText}
      </LoginForm>
      </CenteredWrapper>
      <CenteredWrapper>
      <BottomText><span>Don't have an account?</span><Link to="/signup">Register</Link></BottomText>
      </CenteredWrapper>
      </LoginWrapper>
    </section>
  )
}
export default Login


