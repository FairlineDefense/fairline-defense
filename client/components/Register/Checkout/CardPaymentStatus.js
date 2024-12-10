import React from 'react'
import css from '../register.css'
import styled from 'styled-components'
import RegisterHeader from '../RegisterHeader'
import {Link} from 'react-router-dom'

const Gradient = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);
  color: #fff;
  overflow-x: hidden;

  a {
    color: var(--blue);
  }

  a:visited {
    color: var(--blue);
  }

  a:hover {
    color: var(--blue);
  }
`
const BackgroundImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('./images/redFlogo.png');
  background-repeat: no-repeat;
  background-position: 0px 30px;

  @media (max-width: 800px) {
    background-image: url('./images/backgroundimagered.png');
    background-position: -120px top;
    position: fixed;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 4rem;
  position: relative;
  justify-content: center;
  margin-top: -80px;
`
const H3 = styled.h3`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 2rem;
  margin-top: 1rem;
`
const Button = styled.button`
  background-color: var(--blue);
  color: #fff;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 100;
  margin: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Eina';

  &::disabled {
    background-color: #2a4c78;
  }
`
const Header = styled.div`
  font-size: 60px;
  line-height: 70px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  width: 500px;
  margin-bottom: 3rem;

  @media (max-width: 800px) {
    width: 100%;

    font-size: 36px;
    line-height: 48px;
  }
`
const CardPaymentStatus = () => {
  return (
    <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <Wrapper>
          <img src="./images/bluecheck.png" style={{width: 50, height: 50}}/>
          <H3>Payment is Successful!</H3>
          <Link to="/home">
            <Header>Welcome to the Fairline Family</Header>
            <Button>View my Membership</Button>
          </Link>
        </Wrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default CardPaymentStatus
