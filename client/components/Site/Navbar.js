import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { useState } from 'react'

const Wrapper = styled.div.attrs(props => ({display: props.display || "none"}))`
position: absolute;
left: 0;
right: 0;
top: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 2rem;

a {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
ul {
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
}

ul li {
  margin-right: 1rem;
}

@media(max-width: 800px) {
  flex-direction: row-reverse;
  ul {
    display: ${props => props.display};
    position: fixed;
    left: 0;
    top: 0;
    padding: 6rem 0rem 0rem 1rem;
    width: 300px;
    height: 100vh;
    background-color: var(--darkblue);
    align-items: flex-start;
    flex-direction: column;
  }
  li a {
    font-size: 32px;
    font-weight: 200;
  }
}
`

const FairlineLogo = styled.img`
height: 60px;
`
const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;
`
const LoginButton = styled.div`
    background-color: var(--cyan);
    color: #FFF;
    border-radius: 40px;
    width: 150px;
    padding: .5rem 1rem .5rem 1rem;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
`
const Cyan = styled.span`
    color: var(--cyan);
    font-size: inherit;
    font-weight:inherit;
    cursor: pointer;
`
const HamburgerMenu = styled.div`
width: 30px;
height: 30px;
display: none;
background-color: red;


@media(max-width: 800px) {
  display: block;
  position: fixed;
  z-index: 20;
  left: 20px;
  top: 40px;
}
`

const Navbar = () => {
  const user = useSelector(state => state.user)
  const isLoggedIn = user.id

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

let [display, setDisplay] = useState("none")

  return (
    <Wrapper display={display}>
      <Link to="/"><FairlineLogo src="./images/fdlogo.png"></FairlineLogo></Link>
      <Nav>
        <HamburgerMenu onClick={()=>setDisplay(display === 'flex' ? 'none' : 'flex')} />
        {isLoggedIn ? (
          <ul>
            {/* The navbar will show these links after you log in */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/howitworks">How It Works</Link></li>
            <li><Link to="/coverages">Coverages</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li>
              <a href="#" onClick={handleClick}>
              Logout
            </a>
            </li>
          </ul>
        ) : (
          <ul>
            {/* The navbar will show these links before you log in */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/howitworks">How It Works</Link></li>
            <li><Link to="/coverages">Coverages</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/login"><Cyan>Login</Cyan></Link></li>
            <li><Link to="/signup"><LoginButton>Join Now</LoginButton></Link></li>
          </ul>
        )}
      </Nav>
      <hr />
    </Wrapper>
  )
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

export default Navbar

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
