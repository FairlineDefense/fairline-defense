import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: 800px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      transparent
    ),
    url('./images/woman-with-shotgun.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 18rem 0rem 4rem 12rem;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        transparent,
        transparent
      ),
      url('./images/woman-with-shotgun-mobile.svg');

    background-position: center top;
    background-size: contain;
    height: 600px;
    padding: 4rem 2rem;
  }
`
const Wrapper = styled.div`
  width: 475px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: flex-end;
  }
`
const Header = styled.h1`
  font-size: 42px;
  font-weight: 500;
  line-height: 60px;
  color: #fff;
  position: relative;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 38px;
    font-weight: 400;
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
