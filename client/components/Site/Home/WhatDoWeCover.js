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
    height: 100%;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    background-image: none;
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
    padding: 0;
    flex-direction: column-reverse;
    background-image: none;
  }
`
const Text = styled.div`
  width: 40%;
  color: var(--darkblue);
  margin-right: 4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    text-align: left;
    padding: 4rem 2rem;
  }
`
const Header = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  color: var(--darkblue);
  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 40px;
  }
`
const Subtext = styled.div`
  font-size: 28px;
  line-height: 36px;
  color: var(--darkblue);
  margin-top: 1.5rem;

  @media (max-width: 800px) {
    font-size: 20px;
    line-height: 28px;
  }
`
const Image = styled.div`
  width: 60%;
  background-image: url('./images/girl-with-gun.svg');
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  border-radius: 20px;
  background-size: contain;

  @media (max-width: 800px) {
    display: block;
    height: 250px;
    width: 100%;
    border-radius: 0;
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
