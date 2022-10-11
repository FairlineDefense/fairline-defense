import React from 'react'
import {signup} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import css from './register.css'
const Signup = () => {
  let user = useSelector(state => state.user)
  const dispatch = useDispatch()
  let [errorText, setErrorText] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value
    const email = evt.target.email.value
    const phone = evt.target.countryCode.value + evt.target.phone.value
    const password = evt.target.password.value
    const confirmPassword = evt.target.confirmPassword.value

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
      <header className="authHeader">
        <img src="./images/fdlogo.png" />
      </header>
      <div className="authContent">
        <h2>Get Started</h2>
        <form className="signupForm" onSubmit={handleSubmit} name="signup">
          <div className="inputGroup">
            <input
              className="signupInput"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="signupInput"
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="inputGroup">
            <input
              className="signupInput"
              name="email"
              type="text"
              placeholder="Email"
              required
            />
            <input
              className="signupInputCC"
              name="countryCode"
              type="text"
              placeholder="+1"
              required
            />
            <input
              className="signupInputPhone"
              name="phone"
              type="text"
              placeholder="Phone"
              required
            />
          </div>
          <div className="inputGroup">
            <input
              className="signupInput"
              name="password"
              type="password"
              placeholder="Create Password"
              required
            />
            <input
              className="signupInput"
              name="confirmPassword"
              type="password"
              placeholder="Repeat Password"
              required
            />
          </div>
          <section className="finePrint">
            <span>
              Min 8 char. with at least one upper case letter, one number, and
              one special char.: !, @, $, #, &, *.
            </span>
            <span>
              <input type="checkbox" required />I agree to the Fairline Defense
              Terms & Conditions
            </span>
          </section>

          {errorText.length ? (
            <section className="errorText">{errorText}</section>
          ) : null}

          <section className="signupFormButton">
            <button type="submit">Create an Account</button>
          </section>
          <section className="signupFormBottom">
            <div>
              <span>Already have an account?</span>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </section>
        </form>
      </div>
    </section>
  )
}
export default Signup
