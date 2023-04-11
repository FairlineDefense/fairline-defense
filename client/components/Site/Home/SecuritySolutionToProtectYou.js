import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 369px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 4rem 2rem 4rem;
  justify-content: center;
  margin: 2rem;

  @media (max-width: 800px) {
    height: 260px;
    margin: 2rem 0rem 2rem 0rem;
    padding: 2rem;
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
    padding: 0 1rem;
  }
`
const Text = styled.div`
  font-size: 28px;
  color: var(--darkblue);

  @media (max-width: 800px) {
    font-size: 22px;
  }
`

const Bold = styled.div`
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
`

export default function SecuritySolutionToProtectYou() {
  return (
    <Section>
      <Header>Fairline Defense is the solution to protect you. </Header>
      <Text>
        Fairline defense is a <Bold>subscription based legal team</Bold>
      </Text>
    </Section>
  )
}
