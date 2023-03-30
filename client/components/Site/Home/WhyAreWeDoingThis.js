import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 22rem;
  justify-content: center;
  background-color: #f0f0f0;

  @media (max-width: 800px) {
    height: 380px;
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
  font-size: 28px;
  color: var(--darkblue);

  @media (max-width: 800px) {
    font-size: 22px;
  }
`

export default function WhyAreWeDoingThis() {
  return (
    <Section>
      <Header>Why are we doing this?</Header>
      <Text>
        Fairline Defense was founded by Security Professionals, First
        Responders, and Veterans who found a need for quality legal protection
        when you protect yourself.
      </Text>
    </Section>
  )
}
