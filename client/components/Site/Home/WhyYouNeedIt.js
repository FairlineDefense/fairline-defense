import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 6rem 2rem 6rem;
  margin: 1rem 0rem 2rem 0rem;

  @media (max-width: 800px) {

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
    display: none;
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
        <p>If you are in a dfensive situaiton you will ....</p>
        <small>"Don't be a victim. Protect yourself."</small>
      </TextRight>
    </Section>
  )
}
