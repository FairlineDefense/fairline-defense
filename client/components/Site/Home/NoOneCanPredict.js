import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: 800px;
  background-image: url('./images/predictbgimg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 27rem 0rem 0rem 12rem;

  @media (max-width: 800px) {
    height: auto;
    padding: 20rem 4rem 2rem 2rem;
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
    width: 100%;
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
