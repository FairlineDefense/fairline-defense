import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 4rem 6rem;
  justify-content: center;
  background-color: #e8f3f9;

  @media (max-width: 800px) {
    padding: 4rem 2rem;
  }
`
const Header = styled.h1`
  width: 520px;
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
  max-width: 900px;
  font-size: 28px;
  color: var(--darkblue);

  @media (max-width: 800px) {
    font-size: 22px;
  }
`

export default function OurMission() {
  return (
    <Section>
      <Header>Our Mission</Header>
      <Text>
        Our mission is to provide peace of mind to responsible individuals who
        have made the difficult decision to take their safety into their own
        hands. We believe that you should never have to face the financial and
        emotional burden of navigating the legal system alone after a
        self-defense incident.
      </Text>
    </Section>
  )
}
