import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  max-width: 100vw;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 2rem 4rem 2rem;
  @media (max-width: 800px) {
    margin: 4rem 0rem 4rem 0rem;
    height: auto;
  }
`
const Header = styled.div`
  font-size: 32px;
  max-width: 500px;
  text-align: center;
  font-weight: 600;
  line-height: 55px;
  color: var(--darkblue);

  @media (max-width: 800px) {
  }
`
const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  margin: 1rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
  }
`
const Story = styled.figure`
  width: 323px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 0rem 2rem 0rem 2rem;

  img {
    border-radius: 20px;
    margin-bottom: 1rem;
  }
  figcaption {
    font-size: 20px;
    line-height: 22px;
    font-weight: 400;
    color: var(--darkblue);
  }

  @media (max-width: 800px) {
    height: auto;

    figcaption {
      display: none;
    }
  }
`
export default function Stories() {
  return (
    <Section id="testimonials">
      <Header>Security Gaurds and their Stories</Header>
      <Wrapper>
        <Story>
          <img src="./images/thumbnailvids-300x217.png" />
          <figcaption />
        </Story>
        <Story>
          <img src="./images/thumbnailvids-300x217.png" />
          <figcaption />
        </Story>
        <Story>
          <img src="./images/thumbnailvids-300x217.png" />
          <figcaption />
        </Story>
      </Wrapper>
    </Section>
  )
}
