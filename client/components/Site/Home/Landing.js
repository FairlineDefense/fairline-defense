import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding: 12rem;
  background-image: url('./images/man-in-car.svg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    margin-top: 60px;
    background-size: cover;
    background-position: 50% top;
    height: 500px;
    padding: 3rem 2rem 1rem 2rem;
    align-items: center;
  }
`
const Heading = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: #fff;
  width: 400px;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 2rem;
  }
`
const SubHeading = styled.div`
  font-size: 28px;
  font-weight: 200;
  color: #fff;
  width: 500px;
  margin: 1rem 0rem 3rem 0rem;

  @media (max-width: 800px) {
    width: 100%;
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
  padding: 1rem 2rem 1rem 2rem;
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
  top: 720px;
  left: 50%;

  @media (max-width: 800px) {
    display: none;
  }
`
export default function Landing() {
  return (
    <Section id="top">
      <Heading>
        Are you prepared if you have to defend yourself & your family?
      </Heading>
      <SubHeading>
        Fairline Defense protects your family in all defense situations.
      </SubHeading>
      <Link to="/signup">
        <StartButton>Become a Member</StartButton>
      </Link>
      <DownArrow />
    </Section>
  )
}
