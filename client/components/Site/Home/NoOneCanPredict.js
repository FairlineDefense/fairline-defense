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
    linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), transparent),
    url('./images/break-in.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 27rem 0rem 0rem 12rem;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    height: auto;
    padding: 4rem 2rem 3rem;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        transparent,
        transparent
      ),
      url('./images/break-in.svg');

    background-position: center top;
    background-size: contain;
    height: 380px;
  }
`
const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: flex-end;
  }
`
const Header = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  color: #fff;
  margin-bottom: 2rem;
  position: relative;
  width: 451px;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0;
    width: 80%;
  }
`

export default function NoOneCanPredict() {
  return (
    <Section>
      <Wrapper>
        <Header>No one can predict when something will happen.</Header>
      </Wrapper>
    </Section>
  )
}