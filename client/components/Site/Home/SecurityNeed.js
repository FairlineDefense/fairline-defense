import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  padding: 0rem 4rem 0rem 4rem;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
    padding: 0rem;
  }
`

const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('./images/courtroom.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  background-color: pink;
`

const TextRight = styled.div`
width: 300px;
text-align: right;
margin-right: 9rem;

header {
    color: #FFF;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 1.5rem;
}

@media(max-width: 800px) {
  width: 100%;
  height: 190px;
  padding: 0rem 2rem 1rem 2rem;

  header {
    
  }
   }
`
export default function SecurityNeed() {
  return (
    <Section>
        <Image>
        <TextRight>
        <header>You need experienced teams to protect you</header>
      </TextRight>
        </Image>
    </Section>
  )
}
