import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 550px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);

  @media (max-width: 800px) {
    padding: 4rem 2rem;
    flex-direction: column;
    height: 100%;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: 360px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 1rem 2rem 1rem 2rem;
  @media (max-width: 800px) {
    margin: 0;
    flex-direction: column;
  }
`
const Text = styled.div`
  width: 40%;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0rem;
    margin: 0rem;
  }
`
const Header = styled.h1`
  font-size: 42px;
  font-weight: 500;
  line-height: 48px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
`

const Subtext = styled.div`
  font-size: 28px;
  margin-bottom: 1rem;
`

const Small = styled.div`
  font-size: 22px;
  color: #c73232;
  font-style: italic;
`
const CuffsIcon = styled.div`
  width: 246px;
  background-image: url('./images/handcuffs.svg');
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    display: none;
  }
`

const CuffsIconMobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    height: 200px;
    background-size: contain;
    background-image: url('./images/handcuffs.svg');
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

export default function WhatWeDontCover() {
  return (
    <Section>
      <Wrapper>
        <CuffsIcon />
        <Text>
          <Header>What we don't cover.</Header>
          <Subtext>Any actions with criminal intent.</Subtext>
          <CuffsIconMobile />
          <Small>- Don't be a criminal, it never works out.</Small>
        </Text>
      </Wrapper>
    </Section>
  )
}
