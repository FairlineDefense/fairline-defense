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
    padding: 0rem;
  }
`
const TextLeft = styled.div`
  width: 50%;
  background-image: url('./images/AdobeStock_462413265 3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 43px;
  overflow: hidden;
  height: 359px;
  display: block;

@media(max-width: 800px) {
  width: 100%;
  background-image: url('./images/AdobeStock_462413265 3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 0px;

  img {
    width: 1px;
  }
}
`

const MobileHeader = styled.div`
display: none;

@media(max-width: 800px) {
  display: block;
  color: #fff;
  font-size: 38px;
  line-height: 48px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 1rem;
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
  height: 190px;
  padding: 0rem 2rem 1rem 2rem;

  header {
    display: none;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    width: 320px;
  }
   }
`
export default function WhyYouNeedIt() {
  return (
    <Section>
      <TextLeft>
        <MobileHeader>Why do you need it?</MobileHeader>
      </TextLeft>
      <TextRight>
        <header>Why do you need it?</header>
        <p>If you are in a defensive situation you could be arrested and financially responsible. </p>
        <small>-"Don't be a victim. Protect yourself."</small>
      </TextRight>
    </Section>
  )
}
