import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 369px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 2rem 12rem;
  justify-content: center;
  background-image: url('./images/lightredbg.png');
  background-position: -30px 50px;
  background-repeat: no-repeat;
  background-size: contain;
  align-items: center;
  text-align: center;

  @media (max-width: 800px) {
    height: 100%;
    padding: 4rem 2rem;
    background-position: -110px 80px;
    align-items: left;
    text-align: left;
  }
`
const Header = styled.h1`
  width: 740px;
  font-size: 42px;
  line-height: 50px;
  font-weight: 700;
  color: var(--darkblue);
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 32px;
    line-height: 38px;
  }
`
const Text = styled.div`
  font-size: 28px;
  width: 800px;
  color: var(--darkblue);

  @media (max-width: 800px) {
    width: 100%;
    font-size: 22px;
  }
`

export default function HowFairlineWorks() {
  return (
    <Section id="howitworks">
      <Header>How Fairline Defense Works?</Header>
      <Text>
        In a defensive situation, trust Fairline Defense to provide a prompt and
        expert critical response team, dedicated legal support, and unwavering
        assistance for you and your family.
      </Text>
    </Section>
  )
}
