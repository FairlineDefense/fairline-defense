import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  min-height: 670px;
  color: var(--darkblue);
  padding: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`
const Text = styled.div`
  width: 50%;
  padding: 4rem;

  header {
    font-size: 42px;
    font-weight: 600;
  }

  p {
    font-size: 25px;
    line-height: 35px;
    font-weight: 200;
    margin: 2rem 0rem 2rem 0rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0rem;
    text-align: center;

    header {
      font-size: 32px;
      line-height: 40px;
    }

    p {
      font-size: 20px;
      line-height: 33px;
      font-weight: 300;
      margin: 1rem;
    }
  }
`
const Image = styled.div`
  width: 50%;
  object-fit: contain;

  img {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0rem;
  }
`
export default function SecurityWhyYouNeedIt() {
  return (
    <Section>
      <Image>
        <img src="./images/arrestingman.png" />
      </Image>
      <Text>
        <header>Why do you need it?</header>
        <p>
        After a self-defense situation, you need to protect yourself.
        </p>
        <p>
        You need an experienced lawyer immediately.
        This situation is expensive and confusing.
        Fairline Defense is here to step in immediately and protect you.
        </p>
      </Text>
    </Section>
  )
}
