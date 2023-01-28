import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  align-items: center;
  padding: 2rem 4rem 2rem 4rem;
  background-color: #F0F0F0;

  @media (max-width: 800px) {
    min-height: 300px;
    padding: 2rem;
    flex-direction: column;
  }
`
const Text = styled.div`
  width: 60%;
  color: var(--darkblue);
  padding: 8rem;

  header {
    font-size: 48px;
    line-height: 48px;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  div {
    font-size: 24px;
    line-height: 30px;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 1rem;
    text-align: center;

    header {
      line-height: 38px;
      margin-bottom: 1rem;
      font-size: 32px;
      margin-bottom: 1rem;
    }
    div {
      line-height: 28px;
      font-size: 20px;
    }
  }
`
const Bold = styled.div`
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
`
const CardImage = styled.div`
  width: 40%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 515px;
  }

  @media (max-width: 800px) {
    padding: 0rem;
    img {max-width: 350px;
  }
}
`
export default function Card() {
  return (
    <Section>
      <Text>
        <header>We are the solution to protect you.</header>
        <div>
          Fairline Defense is a subscription based <Bold>legal team</Bold> that
          protects you with up to <Bold>$1.5M</Bold> in legal fees.
        </div>
      </Text>
      <CardImage>
        <img src="./images/card.png" />
      </CardImage>
    </Section>
  )
}
