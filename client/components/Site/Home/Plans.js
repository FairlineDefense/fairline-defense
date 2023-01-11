import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: fit-content;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
  background-color: #E8F3F9;

  @media (max-width: 800px) {
    display: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: fit-content;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Header = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  line-height: 55px;
  color: var(--darkblue);
  margin-bottom: 1rem;

  @media (max-width: 800px) {
  }
`
const Subheader = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: var(--darkblue);
  margin-bottom: 4rem;

  @media (max-width: 800px) {
  }
`
const Cyan = styled.span`
color: var(--cyan);
font-size: inherit;
font-weight: inherit;
`
const Plan = styled.div`
  height: 232px;
  width: 284px;
  background: #223F67;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #fff;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    font-size: 60px;
    font-weight: 500;
  }
  small {
    font-size: 30px;
  }
`
const Small = styled.div`
  font-size: 32px;
  line-height: 40px;
  color: var(--darkblue);
  width: 620px;
  padding-right: 300px;
`
const Arrow = styled.div`
  width: 260px;
  height: 200px;
  background-image: url('./images/savings.png');
  background-position: bottom;
  background-repeat: no-repeat;
`
const Bold = styled.span`
  font-weight: 600;
  font-size: inherit;
`
export default function Plans() {
  return (
    <Section>
      <Header>No Complicated Plans & Options</Header>
      <Subheader>Peace of mind at <Cyan>$19.99</Cyan></Subheader>
      <Header>Armed Citizen Plan</Header>
      <Wrapper>
        <Plan>
          <header>$19.99</header>
          <small>Billed Monthly</small>
        </Plan>
        <Plan>
          <header>$199</header>
          <small>Billed Annually</small>
        </Plan>
        {/* <Arrow /> */}
      </Wrapper>
      <Small>
        Add a spouse or family member for <Bold>$5 Monthly</Bold>
      </Small>
    </Section>
  )
}
