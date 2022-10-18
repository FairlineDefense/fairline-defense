import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'

const Navbar = () => {
  const user = useSelector(state => state.user)
  const isLoggedIn = user.id

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

  const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  color: #fff;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 14px;
  border-bottom: 1px solid #fff;
  a {
  color: #fff;
  }
  a:visited {
    color: #fff;
    }
  `
  const Logo = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  `
  return (
    <Nav>
      <span>
      <Link to="/membership">Membership</Link>
      <Link to="/home">Account</Link>
      <Link to="/benefits">Benefits</Link>
      <Link to="/feed">Feed</Link>
      </span>
      <Link to="/"><Logo src="./images/fdlogo.png" /></Link>
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    </Nav>
  )
}

export default Navbar
