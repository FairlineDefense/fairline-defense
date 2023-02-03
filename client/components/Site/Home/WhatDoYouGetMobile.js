import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  max-width: 100vw;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0rem 4rem 0rem;

  @media (max-width: 800px) {
    display: block;
    height: fit-content;
  }
`
const Header = styled.div`
  font-size: 48px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  line-height: 55px;
  color: var(--darkblue);
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 36px;
  }
`
const Wrapper = styled.div`
  width: 100vw;
  margin: 4rem 0rem 4rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const Card = styled.div`
  width: 284px;
  height: 302px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--darkblue);
  padding: 2rem;
  background-color: #f0f0f0;
  margin: 0rem 2rem 0rem 2rem;

  header {
    font-size: 60px;
    font-weight: 500;
  }
  small {
    font-size: 24px;
    line-height: 30px;
    font-weight: 200;
  }

  img {
    height: 100px;
    width: 106px;
  }

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
`
export default function WhatDoYouGetMobile() {
  return (
    <Section>
      <Header>What do you get?</Header>
      <Wrapper>
        <Card>
          <img src="./images/7.png" />
          <header>24/7</header>
          <small>Critical Response Team</small>
        </Card>
        <Card>
          <img src="./images/8.png" />
          <header>100%</header>
          <small>Legal Defense Team</small>
        </Card>
        <Card>
          <img src="./images/9.png" />
          <header>$1.5M</header>
          <small>
            In Legal<br />Fees
          </small>
        </Card>
      </Wrapper>
    </Section>
  )
}
