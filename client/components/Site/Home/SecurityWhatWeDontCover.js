import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 600px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 6rem 4rem 6rem;

  @media (max-width: 800px) {
    padding: 0;
    flex-direction: column;
    height: 420px;
  }
`
const Blue = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--bgblue);
  padding: 4rem;
  border-radius: 40px;

  @media (max-width: 800px) {
    padding: 2rem 0rem 2rem 0rem;
    margin: 1rem;
    flex-direction: column;
    height: 420px;
    border-radius: 0;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: 360px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 1rem 2rem 1rem 2rem;

  @media (max-width: 800px) {
    margin: 0;
    flex-direction: column;
  }
`
const Text = styled.div`
  width: 40%;
  color: var(--darkblue);
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0rem;
    margin: 0rem;
  }
`
const Header = styled.h1`
  font-size: 42px;
  font-weight: 500;
  line-height: 48px;
  color: var(--darkblue);
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
`
const SubHeader = styled.div`
  font-size: 30px;
  line-height: 35px;
  font-weight: 400;
  color: var(--darkblue);
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`
const Small = styled.div`
  font-size: 22px;
  color: var(--darkblue);
  font-style: italic;
  font-weight: 600;
  margin: 1.5rem 0rem 1.5rem 0rem;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`
const CuffsIcon = styled.div`
  width: 246px;
  background-image: url('./images/handcuffspng.png');
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    height: 200px;
    background-size: contain;
  }
`
export default function SecurityWhatWeDontCover() {
  return (
    <Section>
      <Blue>
        <Wrapper>
          <CuffsIcon />
          <Text>
            <Header>What we don't cover.</Header>
            <SubHeader>Any actions with criminal intent.</SubHeader>
            <Small>- Don't be a criminal, it never works out.</Small>
          </Text>
        </Wrapper>
      </Blue>
    </Section>
  )
}
