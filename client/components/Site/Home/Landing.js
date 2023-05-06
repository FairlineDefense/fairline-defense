import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding: 12rem;
  background-image: url('./images/man-in-car.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    background-image: url('./images/man-in-car-mobile.jpg');
    margin-top: 60px;
    width: 100%;
    height: 680px;
    padding: 3rem 3rem 1rem 3rem;
    align-items: center;
  }
`
const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  width: 600px;
  margin-bottom: 1rem;
  line-height: 60px;

  @media (max-width: 800px) {
    width: 100%;
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
    width: 100%;
    font-size: 22px;
    line-height: 32px;
    margin: 0rem 0rem 1rem 0rem;
  }
`
const Bold = styled.div`
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
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
      <Heading>Be prepared to defend yourself & your family.</Heading>
      <SubHeading>
        Peace of mind at <Bold>$19.99</Bold>
        <br />
        <Bold>Subscription based legal defense</Bold>
      </SubHeading>
      <Link to="/signup">
        <StartButton>Become a Member</StartButton>
      </Link>
      <DownArrow />
    </Section>
  )
}
