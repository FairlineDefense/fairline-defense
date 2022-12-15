import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: 655px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-image: url('./images/courtroom.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 8rem;
  margin: 1rem 0rem 2rem 0rem;

  @media (max-width: 800px) {
    background-size: auto 90%;
    align-items: flex-end;
    flex-direction: column-reverse;
    padding: 1rem;
  }
`
const TextLeft = styled.div`
color: #fff;
font-size: 25px
line-height: 30px;
max-width: 526px;
font-weight: 400;
margin-bottom: 6rem;
padding-right: 4rem;
p {
    margin-bottom: 1rem;
}

@media(max-width: 800px) {
 margin-bottom: 4rem;
}
`

const TextRight = styled.div`
color: #fff;
font-size: 25px
line-height: 30px;
max-width: 526px;
font-weight: 400;
text-align: center;
margin-bottom: 4rem;

header {
    font-weight: 500;
    font-size: 42px;
    margin-bottom: 1.5rem;
}
p {
    margin-bottom: 1rem;
}

@media(max-width: 800px) {
    display: none;
   }
`
export default function WhyYouNeedIt() {
  return (
    <Section>
      <TextLeft>
        <p>
          As a guard if you are in an altercation or shooting. Majority of the
          time you will be sewed by the opossing party, property owner, and the
          business owner.
        </p>
        <p>
          Even though you were in the right, there is a lawyer looking to make
          money off you.
        </p>
      </TextLeft>
      <TextRight>
        <header>Why do you need it?</header>
        <p>"Don't be a victim and protect yourself"</p>
      </TextRight>
    </Section>
  )
}
