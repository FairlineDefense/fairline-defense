import React from 'react'
import {signup} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import RegisterHeader from './RegisterHeader'
import '@material/react-text-field/dist/text-field.css';
import TextField, {HelperText, Input} from '@material/react-text-field';
import css from './register.css'
import styled from 'styled-components'

const H1 = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 2rem;
`
const SignupWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  @media (max-width: 768px) {
    padding: 4rem 1rem 0rem 1rem;
  }
`
const SignupForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 720px;
position: relative;
@media (max-width: 768px) {
  max-width: 100%;
}
`
const FinePrint = styled.div`
display: flex;
flex-direction: column;
padding: .5rem;
margin-bottom: 3rem;
width: 100%;
`
const PasswordFormat = styled.div`
  margin-bottom: 2rem;
  width: 60%;
  font-size: 14px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const TermsAndConditions = styled.div`
display: flex;
flex-direction: row;
width: 100%;
font-size: 16px;
@media (max-width: 768px) {
  flex-wrap: wrap;
}
`
const Checkbox = styled.input`
margin-right: .5rem;
`
const OpenFinePrint = styled.span`
text-decoration: underline;
cursor: pointer;
`
const SignupButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const SignupFormButton = styled.button`
width: 340px;
font-weight: 200;
padding: 1rem 2rem 1rem 2rem;
border-radius: 50px;
outline: none;
border: none;
color: #fff;
font-size: 20px;
background-color: var(--blue);
margin-bottom: 2rem;
cursor: pointer;
`

const Signup = () => {
  let user = useSelector(state => state.user)
  const dispatch = useDispatch()
  let [errorText, setErrorText] = useState('')
  let [form, setForm] = useState({firstName: '', lastName: '', email: '', cc: '', phone: '', password: '', confirmPassword:''})
  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    const firstName = form.firstName
    const lastName = form.lastName
    const email = form.email
    const phone = form.phone
    const password = form.password
    const confirmPassword = form.confirmPassword

    function validateFields() {
      if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return setErrorText('Invalid email address.')
      }
      if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone)) {
        return setErrorText('Invalid phone number.')
      }
      if (password !== confirmPassword) {
        return setErrorText('Passwords do not match.')
      }
      if (password.length < 8) {
        return setErrorText('Your password must be at least 8 characters')
      }
      if (password.search(/[a-z]/i) < 0) {
        return setErrorText('Your password must contain at least one letter.')
      }
      if (password.search(/[0-9]/) < 0) {
        return setErrorText('Your password must contain at least one digit.')
      } else {
        dispatch(signup(firstName, lastName, email, phone, password, 'signup'))
      }
    }
    validateFields()
  }

  useEffect(
    () => {
      user.error &&
        setErrorText(
          'An account with that information already exists try logging in.'
        )
    },
    [user]
  )

  return (
    <section className="auth">
      <svg />
      <svg />
      <svg />
     <RegisterHeader />
      <SignupWrapper>
        <H1>Get Started</H1>
        <SignupForm onSubmit={handleSubmit} name="signup">
          <div className="inputGroup">
            <TextField
            label="First Name"
            className="signupInput"
            >
              <Input 
              name="firstName"
              type="text"
              onChange={(e)=>changeHandler(e)}
              value={form.firstName}
              required />
            </TextField>
            <TextField className="signupInput" label="Last Name">
            <Input
              name="lastName"
              type="text"
              onChange={(e)=>changeHandler(e)}
              value={form.lastName}
              required
            />
            </TextField>
          </div>
          <div className="inputGroup">
            <TextField
            label="Email Address"
            className="signupInput"
            >
            <Input
            name="email"
            type="email"
            onChange={(e)=>changeHandler(e)}
            value={form.email}
            required
            />
            </TextField>
            <TextField
            label=""
            className="signupInputCC"
            >
            <Input
            name="cc"
            type="tel"
             onChange={(e)=>changeHandler(e)}
            value={form.cc}
              required
            />
            </TextField>
            <TextField
            label="Phone"
            className="signupInputPhone"
            >
            <Input
           name="phone"
           type="tel"
            onChange={(e)=>changeHandler(e)}
            value={form.phone}
              required
            />
            </TextField>
          </div>
          <div className="inputGroup">
            <TextField
            label="Password"
            className="signupInput"
            >
            <Input
         name="password"
         type="password"
             onChange={(e)=>changeHandler(e)}
            value={form.password}
              required
            />
            </TextField>
            <TextField
            label="Confirm Password"
            className="signupInput"
            >
            <Input
          name="confirmPassword"
          type="password"
            onChange={(e)=>changeHandler(e)}
            value={form.confirmPassword}
              required
            />
            </TextField>
          </div>
          <FinePrint>
            <PasswordFormat>
              Min 8 char. with at least one upper case letter, one number, and
              one special char.: !, @, $, #, &, *.
            </PasswordFormat>
            <TermsAndConditions>
              <Checkbox type="checkbox" required></Checkbox>I agree to the&nbsp;<OpenFinePrint>Fairline Defense Terms & Conditions</OpenFinePrint>
              </TermsAndConditions>
            </FinePrint>

          {errorText.length ? (
            <section className="errorText">{errorText}</section>
          ) : null}

          <SignupButtonWrapper>
            <SignupFormButton type="submit">Create an Account</SignupFormButton>
          </SignupButtonWrapper>
          <section className="signupFormBottom">
            <div>
              <span>Already have an account?</span>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </section>
        </SignupForm>
      </SignupWrapper>
    </section>
  )
}
export default Signup
