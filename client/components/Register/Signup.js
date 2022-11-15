import React from 'react'
import {signup} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import RegisterHeader from './RegisterHeader'
import FDTextField from '../FDTextField'
import history from '../../history'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import css from './register.css'
import styled from 'styled-components'


import TermsAndConditions from './TermsAndConditions'

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
  padding: 4rem;
  @media (max-width: 768px) {
    padding: 4rem .5rem 0rem .5rem;
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
margin: 3rem 0rem 3rem 0rem;
width: 100%;
`
const TermsAndConditionsDiv = styled.div`
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
const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  `
const Phone = styled.span`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  
  div:nth-child(1) {
    width: 60px;
  }
  div:nth-child(2) {
    flex-grow: 1;
  }
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
const ErrorText = styled.div`
  height: fit-content;
  border: 1px solid red;
  border-radius: 5px;
  padding: .5rem;
  background-color: #fff;
  font-size: .75rem;
  color: #000;
`
const Signup = () => {
  let user = useSelector(state => state.user)
  const dispatch = useDispatch()
  let [errorText, setErrorText] = useState('')
  let [passwordErrorText, setPasswordErrorText] = useState(" ")
  let [invalidation, setInvalidation] = useState({email: false, phone: false, password: false, confirmPassword:false})
  let [form, setForm] = useState({firstName: '', lastName: '', email: '', cc: '', phone: '', password: '', confirmPassword:''})
  
  const changeHandler = (e) => {
    setInvalidation({...invalidation, [e.target.name]: false})
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
      let res = true
      if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
         setInvalidation({...invalidation, email: true})
         res = false
      }
      if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone)) {
         setInvalidation({...invalidation, phone: true})
         res = false
      }
      if (password !== confirmPassword) {
         setInvalidation({...invalidation, confirmPassword: true})
         setPasswordErrorText("Passwords do not match")
         res = false
      }
      if (password.length < 8) {
         setInvalidation({...invalidation, password: true, confirmPassword: true})
         setPasswordErrorText("Passwords must be min. 8 chars long")
         res = false
      }
      if (password.search(/[a-z]/i) < 0) {
         setInvalidation({...invalidation, password: true, confirmPassword: true})
         setPasswordErrorText("Passwords must contain at least one letter")
         res = false
      }
      if (password.search(/[!@#\$%\^\&*\)\(+=._-]/i) < 0) {
        setInvalidation({...invalidation, password: true, confirmPassword: true})
        setPasswordErrorText("Passwords must contain at least one special character")
        res = false
     }
      if (password.search(/[0-9]/) < 0) {
         setInvalidation({...invalidation, password: true, confirmPassword: true})
         setPasswordErrorText("Passwords must contain at least one number")
         res = false
      } 
      return res
    }

    if(validateFields()) {
        dispatch(signup(firstName, lastName, email, phone, password, 'signup'))
    }
}

const [open, setOpen] = useState(false);

const handleClick = () => {
  setForm({firstName: '', lastName: '', email: '', cc: '', phone: '', password: '', confirmPassword:''})
  setOpen(false);
  user.error = ''
  history.push('/login')
};

const handleClose = (value) => {
  setOpen(false);
  setSelectedValue(value);
};

  useEffect(
    () => {
     if(user.error){
      setOpen(true)
     }
    },
    [user]
  )

  let [openTerms, setOpenTerms] = useState(false);

  const viewTerms = (e) => {
    e.preventDefault()
    setOpenTerms(true)
  }

  return (
    <section className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />

     <RegisterHeader />
      <SignupWrapper>
        <H1>Get Started</H1>
        <SignupForm onSubmit={handleSubmit} name="signup">
          <InputGroup>
            <FDTextField
              fullWidth
              label="First Name"
              placeholder="First Name"
              name="firstName"
              variant="filled"
              type="text"
              onChange={(e)=>changeHandler(e)}
              value={form.firstName}
              style={{ margin: 8 }}
              required
            />
            <FDTextField
              fullWidth
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              type="text"
              onChange={(e)=>changeHandler(e)}
              value={form.lastName}
              style={{ margin: 8 }}
              variant="filled"
              required
            />
          </InputGroup>
          <InputGroup>
            <FDTextField
            label={invalidation.email ? 'Invalid email address' : 'Email'}
            name="email"
            placeholder="name@email.com"
            type="text"
            onChange={(e)=>changeHandler(e)}
            value={form.email}
            style={{ margin: 8, flexGrow: 1 }}
            variant="filled"
            required
            error={invalidation.email ? true : false}
            />
            <Phone>
            <FDTextField
            label="CC"
            name="cc"
            placeholder="+1"
            type="text"
            onChange={(e)=>changeHandler(e)}
            value={form.cc}
            style={{ margin: 8 }}
            variant="filled"
            required
            />
            <FDTextField
            label={invalidation.phone ? 'Invalid Phone Number' : 'Phone'}
            name="phone"
            placeholder="123-456-7890"
            autoComplete="off"
            type="tel"
            onChange={(e)=>changeHandler(e)}
            value={form.phone}
            style={{ margin: 8 }}
            variant="filled"
            error={invalidation.phone ? true : false}
            required
            />
            </Phone>
          </InputGroup>
          <InputGroup>
            <FDTextField
            fullWidth
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e)=>changeHandler(e)}
            value={form.password}
            style={{ margin: 8 }}
            variant="filled"
            error={invalidation.password ? true : false}
            helperText={`Min 8 char. with at least one upper case letter, one number, and
            one special char.: !, @, $, #, &, *.`}
            required
            />
            <FDTextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            onChange={(e)=>changeHandler(e)}
            value={form.confirmPassword}
            style={{ margin: 8 }}
            variant="filled"
            error={invalidation.confirmPassword ? true : false}
            helperText={passwordErrorText}
            required
            />
          </InputGroup> 
           <FinePrint>
            <TermsAndConditionsDiv>
              <Checkbox type="checkbox" required></Checkbox>I agree to the&nbsp;<OpenFinePrint onClick={(e)=>{viewTerms(e)}}>Fairline Defense Terms & Conditions</OpenFinePrint>
              </TermsAndConditionsDiv>
            </FinePrint> 

          <SignupButtonWrapper>
            <SignupFormButton type="submit">Create an Account</SignupFormButton>
          </SignupButtonWrapper>
          <section className="signupFormBottom">
          {errorText.length ? (
            <ErrorText>{errorText}</ErrorText>
          ) : <div>
          <span>Already have an account?</span>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </div>}
          </section>
        </SignupForm>
      </SignupWrapper>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
         Account Already Exists
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            An Account with that information has already been created. Would you like to login?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Continue to Login</Button>
          <Button onClick={handleClose} autoFocus>
            Go back
          </Button>
        </DialogActions>
      </Dialog>

<TermsAndConditions openTerms={openTerms} setOpenTerms={setOpenTerms} />

    </section>
  )
}
export default Signup
