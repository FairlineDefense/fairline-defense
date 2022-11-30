import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  max-width: 100vw;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`
const Header = styled.div`
  font-size: 48px;
  width: 450px;
  text-align: center;
  font-weight: 600;
  line-height: 55px;
  color: var(--darkblue);
  margin-bottom: 1rem;
`
const Subheader = styled.div`
  font-size: 35px;
  color: var(--cyan);
  font-weight: 500;
`
const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  margin: 4rem 0rem 4rem 0rem;
  display: flex;
  justify-content: center;
`
const Card = styled.div`
  width: 284px;
  height: 302px;
  border: 0.5px solid #ccc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--darkblue);
  padding: 2rem;
  margin: 0rem 2rem 0rem 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  header {
    font-size: 60px;
    font-weight: 500;
  }
  small {
    font-size: 24px;
    line-height: 30px;
    font-weight: 200;
  }
`
export default function WhatDoYouGet() {
  return (
    <Section>
      <Header>What do you get?</Header>
      <Subheader>Peace of mind at $19.99</Subheader>
      <Wrapper>
        <Card>
          <header>24/7</header>
          <small>Critical Response Team</small>
        </Card>
        <Card>
          <header>100%</header>
          <small>Legal Defense Team</small>
        </Card>
        <Card>
          <header>$1.5M</header>
          <small>
            In Legal<br />Fees
          </small>
        </Card>
      </Wrapper>
    </Section>
  )
}
