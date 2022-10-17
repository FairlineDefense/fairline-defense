import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {useDispatch, useSelector} from 'react-redux'

const Navbar = () => {
  const user = useSelector(state => state.user)
  const isLoggedIn = user.id

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <nav>
      <Link to="/membership">Membership</Link>
      <Link to="/home">Account</Link>
      <Link to="/benefits">Benefits</Link>
      <Link to="/">Fairline</Link>
      <Link to="/feed">Feed</Link>
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    </nav>
  )
}

export default Navbar
