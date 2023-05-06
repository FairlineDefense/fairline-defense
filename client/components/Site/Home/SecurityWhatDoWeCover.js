import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 4rem 2rem 4rem;

  @media (max-width: 800px) {
    min-height: 300px;
    padding: 4rem 2rem;
    flex-direction: column;
    justify-content: center;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: 360px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 6rem 4rem 6rem;
  @media (max-width: 800px) {
    margin: 0;
    padding: 0;
    flex-direction: column-reverse;
  }
`
const Text = styled.div`
  width: 430px;
  color: var(--darkblue);
  margin: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    justify-content: center;
    padding: 0rem;
  }
`
const Header = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  color: var(--darkblue);
  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 30px;
    margin-top: 1rem;
  }
`
const Small = styled.div`
  font-size: 28px;
  line-height: 30px;
  color: var(--darkblue);
  margin: 1.5rem 0rem 1.5rem 0rem;

  @media (max-width: 800px) {
    font-size: 22px;
    margin: 1.5rem 0rem 0rem 0rem;
  }
`
const Image = styled.div`
  width: 60%;
  background-image: url('./images/coparrest.jpg');
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  border-radius: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`

const ImageMobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    height: 220px;
    background-image: url('./images/coparrest.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 20px;
    margin-top: 2rem;
  }
`

export default function SecurityWhatDoWeCover() {
  return (
    <Section>
      <Wrapper>
        <Text>
          <Header>What do we cover?</Header>
          <Header>Any self-defense situation.</Header>
          <ImageMobile />
          <Small>
            You can never be prepared 100% for when a situation happens. That's
            why Fairline Defense will cover you no matter what means you took to
            save your life.
          </Small>
        </Text>
        <Image />
      </Wrapper>
    </Section>
  )
}
