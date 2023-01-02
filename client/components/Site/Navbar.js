import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {useState} from 'react'

const Wrapper = styled.div.attrs(props => ({
  display: props.display || 'none',
  backgroundColor: props.backgroundColor || 'none'
}))`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${props => props.backgroundColor};
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
    font-weight: 400;
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
    flex-direction: row;
    background-color: #132a4a;
    position: fixed;
    padding: 1rem;
    justify-content: flex-end;

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
      font-weight: 400;
    }
  }
`

const FairlineLogo = styled.div`
  height: 50px;
  width: 182px;
  display: inline-block;
  z-index: 30;
  background-image: url('./images/fdlogo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 800px) {
    position: fixed;
    left: 45%;
    top: 10px;
    background-image: url('favicon.ico');
    width: 50px;
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
const MobileCTA = styled.div`
  background-color: var(--cyan);
  color: #fff;
  border-radius: 20px;
  width: fit-content;
  padding: 0.2rem 1rem 0.4rem 1rem;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: flex;
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
  const [backgroundColor, setBackgroundColor] = useState('none')
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setBackgroundColor('#132A4A')
    } else {
      setBackgroundColor('none')
    }
  }
  window.addEventListener('scroll', changeNavbarColor)
  return (
    <Wrapper display={display} backgroundColor={backgroundColor}>
      <a href="#top">
        <FairlineLogo />
      </a>
      <Nav>
        <HamburgerMenu
          onClick={() => setDisplay(display === 'flex' ? 'none' : 'flex')}
        >
          <Bar />
          <Bar />
          <Bar />
        </HamburgerMenu>
        {isLoggedIn ? (
          <>
            <ul>
              {/* The navbar will show these links after you log in */}
              <li>
                <a href="#howitworks" onClick={() => setDisplay('none')}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#coverages" onClick={() => setDisplay('none')}>
                  Coverages
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={() => setDisplay('none')}>
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/armedprofessionals">Armed Professionals</Link>
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
            <Link to="/home">
              <MobileCTA>Account</MobileCTA>
            </Link>
          </>
        ) : (
          <>
            <ul>
              {/* The navbar will show these links before you log in */}
              <li>
                <a href="#howitworks" onClick={() => setDisplay('none')}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#coverages" onClick={() => setDisplay('none')}>
                  Coverages
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={() => setDisplay('none')}>
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/armedprofessionals">Armed Professionals</Link>
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
            <Link to="/signup">
              <MobileCTA>Join Now</MobileCTA>
            </Link>
          </>
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
