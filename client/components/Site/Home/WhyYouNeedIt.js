import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 6rem 2rem 6rem;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
    height: 620px;
  }
`
const TextLeft = styled.div`
width: 50%;

img {
  border-radius: 43px;
  max-width: 100%;
  height: 359px;
}

@media(max-width: 800px) {
  width: 100%;
}
`

const TextRight = styled.div`
color: var(--darkblue);
width: 50%;
font-weight: 400;
padding: 4rem;

header {
    font-weight: 500;
    font-size: 38px;
    margin-bottom: 1.5rem;
}
p {
    margin-bottom: 1rem;
    font-size: 25px;
    line-height: 30px;
}

small {
  font-size: 20px;
  font-style: italic;
  color: #C73232;
}

@media(max-width: 800px) {
  width: 100%;
  padding: 2rem;
   }
`
export default function WhyYouNeedIt() {
  return (
    <Section>
      <TextLeft>
        <img src="./images/courtroom.png" />
      </TextLeft>
      <TextRight>
        <header>Why do you need it?</header>
        <p>If you are in a defensive situation you could be arrested and financially responsible. </p>
        <small>-"Don't be a victim. Protect yourself."</small>
      </TextRight>
    </Section>
  )
}
