import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Section = styled.div`
  width: 100vw;
  height: 670px;
  display: flex;
  flex-direction: column;
  padding: 16rem 0rem 0rem 8rem;
  background-image: url('./images/security.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 800px) {
    background-size: cover;
    height: 80vh;
    padding: 20rem 1rem 1rem 1rem;
    text-align: center;
    align-items: center;
  }
`
const Heading = styled.div`
  font-size: 48px;
  font-weight: 500;
  color: #fff;

  @media (max-width: 800px) {
    line-height: 36px;
    width: 250px;
    font-size: 32px;
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
  background-color: var(--red);
  color: #fff;
  border-radius: 40px;
  width: 280px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 400;
  margin-top: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
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
      <Link to='/signup'><StartButton>Get Started</StartButton></Link>
      <DownArrow />
    </Section>
  )
}
