import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding: 12rem;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      transparent
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), transparent),
    url('./images/security.svg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        transparent,
        transparent
      ),
      url('./images/security.svg');
    margin-top: 60px;
    background-size: 160% auto;
    background-position: right bottom;
    height: 490px;
    padding: 4rem 3rem;
    align-items: center;
    justify-content: space-between;
  }
`
const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  width: 400px;
  margin-bottom: 1rem;
  line-height: 60px;

  @media (max-width: 800px) {
    width: 90%;
    font-size: 34px;
    line-height: 42px;
  }
`
const SubHeading = styled.div`
  font-size: 28px;
  font-weight: 200;
  color: #fff;
  width: 500px;
  margin: 1rem 0rem 3rem 0rem;

  @media (max-width: 800px) {
    width: 90%;
    font-size: 22px;
    line-height: 32px;
    margin: 0rem 0rem 1rem 0rem;
  }
`
const StartButton = styled.div`
  background-color: var(--cyan);
  color: #fff;
  border-radius: 40px;
  width: 280px;
  padding: 0.75rem 2rem 0.75rem 2rem;
  font-size: 20px;
  font-weight: 400;
  margin-top: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
`

const DownArrow = styled.div`
  position: absolute;
  background-image: url('./images/doubleDownArrow.png');
  background-repeat: no-repeat;
  height: 50px;
  width: 100px;
  display: block;
  z-index: 50;
  top: 746px;
  left: 50%;

  @media (max-width: 800px) {
    display: none;
  }
`
export default function Landing() {
  return (
    <Section id="top">
      <div>
        <Heading>Protecting those who protect us.</Heading>
        <SubHeading>Legal protection for Armed Professionals</SubHeading>
      </div>
      <Link to="/signup">
        <StartButton>Become a Member</StartButton>
      </Link>
      <DownArrow />
    </Section>
  )
}
