import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 800px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      transparent
    ),
    url('./images/security-patrol.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 18rem 12rem 12rem;

  @media (max-width: 800px) {
    justify-content: flex-start;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        transparent,
        transparent
      ),
      url('./images/security-patrol.svg');

    background-position: left top;
    background-size: 140% auto;
    height: 400px;
    padding: 4rem 2rem;
  }
`
const Wrapper = styled.div`
  width: 475px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 90%;
  }
`
const Header = styled.h1`
  font-size: 42px;
  font-weight: 500;
  line-height: 60px;
  color: #fff;
  position: relative;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 38px;
    font-weight: 400;
  }
`

export default function SecurityNoOneCanPredict() {
  return (
    <Section>
      <Wrapper>
        <Header>No one can predict when something will happen.</Header>
      </Wrapper>
    </Section>
  )
}
