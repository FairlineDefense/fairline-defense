import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {useState} from 'react'

const Wrapper = styled.div.attrs(props => ({display: props.display || 'none'}))`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  max-width: 100vw;
  z-index: 50;
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
    margin-left: 2.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: row-reverse;
    background-color: #000;
    position: fixed;
    padding: 1rem;

    ul {
      display: ${props => props.display};
      position: fixed;
      left: 0;
      top: 0;
      padding: 6rem 0rem 0rem 0rem;
      width: 375px;
      height: 100vh;
      background-color: #000;
      align-items: flex-start;
      flex-direction: column;
    }
    ul li {
      margin-bottom: 1rem;
    }
    li a {
      font-size: 32px;
      font-weight: 200;
    }
  }
`

const FairlineLogo = styled.div`
  height: 60px;
  z-index: 30;
  img {
    height: 100%;
  }
  @media (max-width: 800px) {
    height: 40px;
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
const LoginButton = styled.div`
  background-color: var(--cyan);
  color: #fff;
  border-radius: 40px;
  width: 150px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 32px;
    background: none;
    color: var(--cyan);
    width: auto;
    padding: 0rem;
    margin: 0rem;
    text-align: left;
  }
`
const Cyan = styled.span`
  color: var(--cyan);
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
`
const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  z-index: 20;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 20;
    left: 20px;
    top: 25px;
  }
`
const Bar = styled.div`
  background-color: #fff;
  height: 4px;
  width: 100%;
  display: block;
  margin-bottom: 5px;
  border-radius: 2px;
`

const Navbar = () => {
  const user = useSelector(state => state.user)
  const isLoggedIn = user.id

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

  let [display, setDisplay] = useState('none')

  return (
    <Wrapper display={display}>
      <FairlineLogo>
        <img src="./images/fdlogo.png" />
      </FairlineLogo>
      <Nav>
        <HamburgerMenu
          onClick={() => setDisplay(display === 'flex' ? 'none' : 'flex')}
        >
          <Bar />
          <Bar />
          <Bar />
        </HamburgerMenu>
        {isLoggedIn ? (
          <ul>
            {/* The navbar will show these links after you log in */}
            <li>
              <Link to="/howitworks">How It Works</Link>
            </li>
            <li>
              <Link to="/coverages">Coverages</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/security">Security Professionals</Link>
            </li>
            <li>
              <Link to="/home">
                <LoginButton>Account</LoginButton>
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            {/* The navbar will show these links before you log in */}
            <li>
              <a href="#howitworks">How It Works</a>
            </li>
            <li>
              <a href="#coverages">Coverages</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <Link to="/security">Security Professionals</Link>
            </li>
            <li>
              <Link to="/login">
                <Cyan>Login</Cyan>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <LoginButton>Join Now</LoginButton>
              </Link>
            </li>
          </ul>
        )}
      </Nav>
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
