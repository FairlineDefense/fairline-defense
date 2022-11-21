import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 650px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
  margin: 2rem;

  @media (max-width: 800px) {
    display: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: fit-content;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
const Header = styled.div`
  font-size: 48px;
  width: 450px;
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
  color: var(--cyan);
  font-weight: 500;
  @media (max-width: 800px) {
  }
`
const Plan = styled.div`
  height: 232px;
  width: 284px;
  background: #00abe0;
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
  font-size: 30px;
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
      <Subheader>Peace of mind at $19.99</Subheader>
      <Wrapper>
        <Plan>
          <header>$19</header>
          <small>Billed Monthly</small>
        </Plan>
        <Plan>
          <header>$199</header>
          <small>Billed Annually</small>
        </Plan>
        <Arrow />
      </Wrapper>
      <Small>
        Add a spouse or family member for <Bold>$5 Monthly</Bold>
      </Small>
    </Section>
  )
}
