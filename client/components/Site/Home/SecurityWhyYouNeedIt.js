import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  min-height: 670px;
  color: var(--darkblue);
  padding: 0 4rem 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 0 2rem 4rem;
  }
`
const Text = styled.div`
  width: 50%;
  padding: 4rem;

  h1 {
    font-size: 42px;
    font-weight: 600;
  }

  p {
    font-size: 28px;
    line-height: 35px;
    font-weight: 200;
    margin: 2rem 0rem 2rem 0rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0rem;

    h1 {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 2rem;
      text-align: center;
    }

    p {
      font-size: 22px;
      line-height: 33px;
      font-weight: 300;
      margin-bottom: 1rem;
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
    display: none;
  }
`

const ImageMobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    object-fit: contain;

    img {
      width: 100%;
    }
  }
`
export default function SecurityWhyYouNeedIt() {
  return (
    <Section>
      <Image>
        <img src="./images/arrestingman.png" />
      </Image>
      <Text>
        <h1>Why do you need it?</h1>
        <ImageMobile>
          <img src="./images/arrestingman.png" />
        </ImageMobile>
        <p>After a self-defense situation, you need to protect yourself.</p>
        <p>
          You need an experienced lawyer immediately. This situation is
          expensive and confusing.
        </p>
        <p>Fairline Defense is here to step in immediately and protect you.</p>
      </Text>
    </Section>
  )
}
