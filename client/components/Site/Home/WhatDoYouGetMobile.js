import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 1rem;

  @media (max-width: 800px) {
    display: block;
    height: fit-content;
    padding: 4rem 0rem 4rem 0rem;
  }
`
const Header = styled.h1`
  font-size: 48px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  line-height: 55px;
  color: var(--darkblue);
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 36px;
  }
`
const Wrapper = styled.div`
  width: 100vw;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 0;
  }
`
const Card = styled.div`
  width: 320px;
  height: 160px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  color: var(--darkblue);
  padding: 2rem 0.8rem 1rem 1.5rem;
  background-color: #f0f0f0;
  margin: 0rem 1rem;

  header {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  small {
    font-size: 22px;
    line-height: 26px;
    font-weight: 200;
  }

  img {
    height: 60px;
    width: 60px;
    margin-right: 1.5rem;
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
          <img src="./images/headset.svg" />
          <div>
            <header>24/7</header>
            <small>Critical Response Team</small>
          </div>
        </Card>
        <Card>
          <img src="./images/balance.svg" />
          <div>
            <header>Unlimited</header>
            <small>Legal fees in Criminal Defense</small>
          </div>
        </Card>
        <Card>
          <img src="./images/gavel.svg" />
          <div>
            <header>$1.5M</header>
            <small>
              Legal fees in
              <br />
              Civil Defense
            </small>
          </div>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card>
          <img src="./images/handshake.svg" />
          <div>
            <header>Legal Team</header>
            <small>Professionals and Experts</small>
          </div>
        </Card>
        <Card>
          <img src="./images/moneybags.svg" />
          <div>
            <header>$1000</header>
            <small>Per Diem</small>
          </div>
        </Card>
        <Card>
          <img src="./images/payment.svg" />
          <div>
            <header>100%</header>
            <small>
              No pay back if <br />
              you lose
            </small>
          </div>
        </Card>
      </Wrapper>
    </Section>
  )
}
