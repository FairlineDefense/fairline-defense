import React from 'react'
import {signup} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

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

    function validatePassword() {
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
    validatePassword()
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
    <div>
      <form onSubmit={handleSubmit} name="signup">
        <div>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
          <input name="lastName" type="text" placeholder="Last Name" required />
          <input name="email" type="text" placeholder="Email" required />
          <input name="countryCode" type="text" placeholder="+1" required />
          <input name="phone" type="text" placeholder="Phone" required />
          <input
            name="password"
            type="password"
            placeholder="Create Password"
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Repeat Password"
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        {/* {error && error.response && <div> {error.response.data} </div>} */}
        {errorText}
      </form>
      Already have an account? <Link to="/login">Login</Link>
    </div>
  )
}
export default Signup
