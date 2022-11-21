import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 520px;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  align-items: center;
  margin: 6rem 2rem 6rem 2rem;
  background-color: var(--bgblue);

  @media (max-width: 800px) {
    display: none;
  }
`
const Wrapper = styled.div`
  width: 400px;
  display: flex;
  height: 100%;
  padding-top: 4rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  div:nth-child(2) {
    margin-bottom: 3rem;
  }
`
const FairlineLogo = styled.div`
  width: 540px;
  overflow: visible;

  img {
    width: 474px;
    height: 618px;
  }
`
const Header = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  color: var(--darkblue);
`
const Arrow = styled.div`
  width: 220px;
  height: 300px;
  img {
    width: 220px;
  }
`

export default function Protection() {
  return (
    <Section>
      <FairlineLogo>
        <img src="./images/blueFlogo-966x1024.png" />
      </FairlineLogo>
      <Wrapper>
        <Header>One Plan</Header>
        <Header>Total Protection</Header>
        <Header>All Protection</Header>
        <Header>No Politics</Header>
      </Wrapper>
      <Arrow>
        <img src="./images/webelieve.png" />
      </Arrow>
    </Section>
  )
}
