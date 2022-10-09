import React from 'react'
import {auth} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

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

  return (
    <div>
      <form onSubmit={handleSubmit} name="login">
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
        {errorText}
      </form>
      Don't have an account? <Link to="/signup">Register</Link>
    </div>
  )
}
export default Login