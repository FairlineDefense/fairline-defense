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
  width: 700px;
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

export default function WhatIsAnArmedProfessional() {
  return (
    <Section>
      <Header>What is an Armed Professional?</Header>
      <Text>
        An armed professional is an individual who has received specialized
        training handling firearms or other weapons, and often has a primary job
        responsibility involve the protection of people, property, or assets.
      </Text>
    </Section>
  )
}
