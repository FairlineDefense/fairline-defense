import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding: 27rem 12rem 7rem;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      transparent
    ),
    url('./images/courtroom.svg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        transparent,
        transparent
      ),
      url('./images/courtroom-mobile.svg');

    background-position: center top;
    background-size: contain;
    height: 550px;
    padding: 13rem 2rem 3rem 2rem;
  }
`
const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  width: 900px;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    width: 90%;
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 1rem;
  }
`

const Text = styled.div`
  color: #fff;
  width: 636px;
  font-weight: 400;

  p {
    margin-bottom: 2rem;
    font-size: 28px;
    line-height: 36px;
  }

  small {
    font-size: 28px;
    line-height: 48px;
    font-style: italic;
    color: #c73232;
  }

  @media (max-width: 800px) {
    width: 100%;

    p {
      width: 90%;
      font-size: 22px;
      line-height: 28px;
      margin-bottom: 1rem;
    }

    small {
      font-size: 16px;
      line-height: 16px;
      font-style: italic;
      color: #c73232;
    }
  }
`
export default function WhyDoYouNeedIt() {
  return (
    <Section>
      <Heading>Why do you need Fairline Defense? </Heading>
      <Text>
        <p>
          If you are in a defensive situation you could be arrested and
          financially responsible.{' '}
        </p>
        <small>- Don't be a victim and protect yourself.</small>
      </Text>
    </Section>
  )
}
