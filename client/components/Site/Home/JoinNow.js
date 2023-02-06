import React from 'react'
import styled from 'styled-components'
const Section = styled.div`
  width: 100vw;
  height: 797px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('./images/21centuryimage.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  @media (max-width: 800px) {
    justify-content: flex-end;
    padding-bottom: 10rem;
  }
`
const Heading = styled.div`
  font-size: 48px;
  line-height: 52px;
  font-weight: 600;
  color: #fff;
  width: 750px;

  @media (max-width: 800px) {
    line-height: 48px;
    font-size: 36px;
    width: 290px;
  }
`
const StartButton = styled.div`
  background-color: #ff1e3e;
  color: #fff;
  border-radius: 40px;
  width: 280px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 20px;
  font-weight: 400;
  margin-top: 2.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;

  @media (max-width: 800px) {
  }
`
export default function JoinNow() {
  return (
    <Section>
      <Heading>Protection for the 21st Century starts here</Heading>
      <a href="/signup">
        <StartButton>Join Now</StartButton>
      </a>
    </Section>
  )
}
