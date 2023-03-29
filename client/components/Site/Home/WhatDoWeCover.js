import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 6rem 10rem 12rem;
  background-image: url('./images/light-blue-logo.svg');
  background-position: -30px 300px;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 800px) {
    min-height: 300px;
    padding: 5rem 1rem 4rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: 360px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    margin: 0;
    padding: 2rem;
    flex-direction: column-reverse;
    background-image: none;
  }
`
const Text = styled.div`
  width: 40%;
  color: var(--darkblue);
  margin: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0rem;
  }
`
const Header = styled.div`
  font-size: 42px;
  font-weight: 500;
  line-height: 48px;
  color: var(--darkblue);
  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 30px;
    margin-top: 1rem;
  }
`
const Subtext = styled.div`
  font-size: 28px;
  color: var(--darkblue);
  margin: 1.5rem 0rem 1.5rem 0rem;
`
const Image = styled.div`
  width: 60%;
  background-image: url('./images/girlwithgun.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  border-radius: 20px;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    background-size: contain;
  }
`

export default function WhatDoWeCover() {
  return (
    <Section>
      <Wrapper>
        <Text>
          <Header>What do we cover?</Header>
          <Header>Any actions to defend your life.</Header>
          <Subtext>
            You can never be prepared 100% for when a situation happens. That's
            why Fairline Defense will cover you no matter what means you took to
            save your life.
          </Subtext>
        </Text>
        <Image />
      </Wrapper>
    </Section>
  )
}
