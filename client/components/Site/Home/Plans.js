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
    height: 100%;
    padding: 4rem 2rem;
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
const Header = styled.h1`
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
const Title = styled.h3`
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  color: #132a4a;
  color: var(--darkblue);

  @media (max-width: 800px) {
    font-size: 24px;
    margin-bottom: 1rem;
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
    min-height: 120px;
    min-width: 280px;
    padding: 1rem 0.5rem;

    header {
      font-size: 36px;
      margin: 0 0 0.25rem;
    }

    small {
      font-size: 20px;
      line-height: 24px;
    }
  }
`
const Small = styled.div`
  font-size: 28px;
  line-height: 40px;
  color: var(--darkblue);
  width: 400px;
  display: flex;
  flex-direction: column;
  height: 200px;

  @media (max-width: 800px) {
    width: 280px;
    height: fit-content;
    font-size: 20px;
    line-height: 24px;
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
const Arrow = styled.img`
  width: 100%;
  height: fit-content;
  position: relative;
  top: -48px;
  left: 88px;
  width: 120px;
  height: 87px;
`

export default function Plans() {
  return (
    <Section id="coverages">
      <Header>No complicated Plans & Options</Header>
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
          <Small>Add a spouse or family member for only $5 a month! </Small>
        </PlanWrapper>
        <PlanWrapper>
          <Plan>
            <header>$199</header>
            <small>Billed Yearly</small>
          </Plan>
          <Savings>
            <Arrow src="./images/cyanarrow.png" />
            Save $40!
          </Savings>
        </PlanWrapper>
      </Wrapper>
    </Section>
  )
}
