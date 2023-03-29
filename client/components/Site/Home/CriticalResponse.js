import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: 800px;
  background-image: url('./images/woman-with-shotgun.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20rem 0rem 0rem 12rem;

  @media (max-width: 800px) {
    height: auto;
    background-size: 220% auto;
    padding: 2rem;
    background-position: right bottom;
  }
`
const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 800px) {
    width: 100%;
  }
`
const Header = styled.div`
  font-size: 42px;
  font-weight: 600;
  line-height: 54px;
  color: #fff;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 32px;
  }
`

export default function CriticalResponse() {
  return (
    <Section>
      <Wrapper>
        <Header>
          If you use your firearm in a defensive situation, Fairline Defense
          will have a Critical Response team ready to help, guide, and be there
          for you.
        </Header>
      </Wrapper>
    </Section>
  )
}
