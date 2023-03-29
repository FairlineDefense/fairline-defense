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

  @media (max-width: 800px) {
    height: 100%;
    padding: 4rem 2rem;
    background-position: -110px 80px;
  }
`
const Header = styled.div`
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
  width: 636px;
  color: var(--darkblue);

  @media (max-width: 800px) {
    width: 100%;
    font-size: 22px;
  }
`

export default function HowFairlineWorks() {
  return (
    <Section>
      <Header>How Fairline Defense Works?</Header>
      <Text>
        If anything happens defending your life. Fairline Defense is here with a
        legal and support team.{' '}
      </Text>
    </Section>
  )
}
