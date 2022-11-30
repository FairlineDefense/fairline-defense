import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  padding: 2rem 4rem 2rem 4rem;
  justify-content: center;

  @media (max-width: 800px) {
    min-height: 800px;
    padding: 2rem;
    flex-direction: column;
    background-image: url('./images/lightredbg.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
`
const Header = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: var(--darkblue);
  text-align: center;
  margin: 1rem;

  @media (max-width: 800px) {
    width: 240px;
  }
`
const Text = styled.div`
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 320px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`
const Blue = styled.span`
  color: var(--darkblue);
  font-size: inherit;
  font-weight: 200;
  margin-right: 2rem;
  width: 100px;
  font-size: 20px;

  @media (max-width: 800px) {
    text-align: center;
    margin-right: 0rem;
  }
`
const Red = styled.span`
  color: var(--red);
  font-size: inherit;
  font-weight: 400;
  font-size: 20px;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`
const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 800px) {
    padding: 2rem;
    img {
      max-width: 300px;
    }
  }
`
const SubHeader = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: var(--darkblue);
  text-align: center;
  margin-bottom: 0.5rem;
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
    font-size: 20px;
  }
`
export default function HowItWorksSection() {
  // return (
  //     <Section>
  //         <Header>How it Works</Header>
  //         <SubHeader>
  //             If anything happens defending your life.
  //         </SubHeader>
  //         <SubHeader>
  //             Fairline Defense is here with a legal and support team.
  //         </SubHeader>
  //     </Section>
  // )
  return (
    <Section>
      <Header>How it Works</Header>
      <Image>
        <img src="./images/randomguy-768x335.png" />
      </Image>
      <Header>It couldn’t be more simple.</Header>
      <Text>
        <Blue>Step 1</Blue>
        <Red>Sign up</Red>
      </Text>
      <Text>
        <Blue>& done</Blue>
        <Red>You are protected</Red>
      </Text>
    </Section>
  )
}
