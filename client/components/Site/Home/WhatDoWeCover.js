import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 4rem 2rem 4rem;

  @media (max-width: 800px) {
    display: none;
    min-height: 300px;
    padding: 5rem 1rem 4rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: 360px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 6rem 4rem 6rem;
  @media (max-width: 800px) {
    margin: 0;
    padding: 2rem;
    flex-direction: column-reverse;
  }
`
const Text = styled.div`
  width: 430px;
  color: var(--darkblue);
  margin: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0rem;
  }
`
const Header = styled.div`
  font-size: 42px;
  font-weight: 500;
  line-height: 48px;
  color: var(--darkblue);
  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 30px;
    margin-top: 1rem;
  }
`
const Small = styled.div`
  font-size: 14px;
  color: var(--darkblue);
  margin: 1.5rem 0rem 1.5rem 0rem;
`
const Image = styled.div`
  width: 60%;
  background-image: url('./images/girlwithgun.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  border-radius: 20px;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    background-size: contain;
  }
`
const CyanButton = styled.div`
  background-color: var(--cyan);
  color: #fff;
  border-radius: 40px;
  width: 280px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 16px;
  font-weight: 200;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
`
export default function WhatDoWeCover() {
  return (
    <Section>
      <Wrapper>
        <Text>
          <Header>What do we cover?</Header>
          <Header>Any actions to defend your life.</Header>
          <Small>Click below to see all coverages</Small>
          <CyanButton>All Coverages</CyanButton>
        </Text>
        <Image />
      </Wrapper>
    </Section>
  )
}
