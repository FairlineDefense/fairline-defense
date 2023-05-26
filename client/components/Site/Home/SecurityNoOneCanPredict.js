import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 800px;
  background-image: url('./images/security-patrol.jpg');
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 18rem 12rem 12rem;

  @media (max-width: 800px) {
    justify-content: flex-start;
    background-image: url('./images/security-patrol-mobile.jpg');

    height: 498px;
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
