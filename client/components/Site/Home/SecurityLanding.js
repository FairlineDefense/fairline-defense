import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.div`
  width: 100vw;
  height: 670px;
  display: flex;
  flex-direction: column;
  padding: 15rem 0rem 0rem 8rem;
  background-image: url('./images/AdobeStock_314672886 1.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 800px) {
    background-size: cover;
    background-position: 70% top;
    height: 80vh;
    padding: 26rem 1rem 1rem 1rem;
    text-align: center;
    align-items: center;
  }
`
const Heading = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 500;
  color: #fff;

  @media (max-width: 800px) {
    line-height: 40px;
    font-size: 32px;
    width: 100%;
  }
`
const SubHeading = styled.div`
  font-size: 24px;
  font-weight: 200;
  color: #fff;
  width: 500px;

  @media (max-width: 800px) {
    width: 280px;
    font-size: 16px;
    margin: 1rem 0rem 1rem 0rem;
  }
`
const StartButton = styled.div`
  background-color: var(--hotred);
  opacity: 0.9;
  color: #fff;
  border-radius: 40px;
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  margin-top: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
`
const DownArrow = styled.div`
  position: absolute;
  background-image: url('./images/downarrow.png');
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  display: block;
  top: 74%;
  left: 50%;

  @media (max-width: 800px) {
    display: none;
  }
`
export default function SecurityLanding() {
  return (
    <Section>
      <Heading>
        Legal protection for<br />Armed professionals
      </Heading>
      <Link to="/signup">
        <StartButton>Get Started</StartButton>
      </Link>
      <DownArrow />
    </Section>
  )
}
