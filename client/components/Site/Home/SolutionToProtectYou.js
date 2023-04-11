import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem 4rem;
  justify-content: center;

  @media (max-width: 800px) {
    height: 260px;
    margin: 0;
    padding: 2rem;
  }
`
const Header = styled.h1`
  width: 600px;
  font-size: 42px;
  line-height: 50px;
  font-weight: 700;
  color: var(--darkblue);

  @media (max-width: 800px) {
    width: 100%;
    font-size: 32px;
    line-height: 38px;
    padding: 0 1rem;
  }
`

export default function SolutionToProtectYou() {
  return (
    <Section>
      <Header>
        Fairline Defense is the solution to protect you & your family.
      </Header>
    </Section>
  )
}
