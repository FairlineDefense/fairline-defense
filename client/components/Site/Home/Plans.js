import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 860px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 6rem;
  align-items: center;
  background-color: #e8f3f9;

  @media (max-width: 800px) {
    height: 1150px;
    padding: 2rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: fit-content;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const Header = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  line-height: 55px;
  color: var(--darkblue);
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 38px;
  }
`
const Subheader = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: var(--darkblue);
  margin-bottom: 4rem;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`
const Title = styled.div`
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;

  color: #132a4a;
  color: var(--darkblue);
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`
const Cyan = styled.span`
  color: var(--cyan);
  font-size: inherit;
  font-weight: inherit;
`
const PlanWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 450px;
  width: 400px;
  flex-direction: column;
  margin: 2rem;

  @media (max-width: 800px) {
    margin: 0rem;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-bottom: 1rem;
  }
`
const Plan = styled.div`
  min-height: 232px;
  min-width: 400px;
  background: #223f67;
  color: #fff;
  display: block;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 1rem;

  header {
    font-size: 60px;
    font-weight: 500;
    margin: 1.5rem;
  }
  small {
    font-size: 30px;
  }

  @media (max-width: 800px) {
    min-width: 280px;
  }
`
const Small = styled.div`
  font-size: 32px;
  line-height: 40px;
  color: var(--darkblue);
  width: 400px;
  display: flex;
  flex-direction: column;
  height: 200px;

  @media (max-width: 800px) {
    width: 280px;
    height: fit-content;
    font-size: 24px;
    line-height: 32px;
  }
`

const Savings = styled.div`
  font-size: 30px;
  width: 400px;
  display: block;
  min-height: 200px;
  color: var(--cyan);
  text-align: center;
  font-weight: bold;

  @media (max-width: 800px) {
    width: 280px;
    height: fit-content;
  }
`
const Arrow = styled.div`
  text-align: center;
  width: 100%;
  height: fit-content;
  img {
    position: relative;
    top: -28px;
    width: 120px;
    height: 87px;
  }
`
const Bold = styled.span`
  font-weight: 600;
  font-size: inherit;
`
export default function Plans() {
  return (
    <Section id="coverages">
      <Header>No Complicated Plans & Options</Header>
      <Subheader>
        Peace of mind at <Cyan>$19.99</Cyan>
      </Subheader>
      <Title>Armed Citizen Plan</Title>
      <Wrapper>
        <PlanWrapper>
          <Plan>
            <header>$19.99</header>
            <small>Billed Monthly</small>
          </Plan>
          <Small>
            Add a spouse or family member for <Bold>$5 Monthly</Bold>
          </Small>
        </PlanWrapper>
        <PlanWrapper>
          <Plan>
            <header>$199</header>
            <small>Billed Annually</small>
          </Plan>
          <Savings>
            {/* <Arrow><img src="./images/cyanarrow.png" /></Arrow>*/}
            Save $40!
          </Savings>
        </PlanWrapper>
      </Wrapper>
    </Section>
  )
}
