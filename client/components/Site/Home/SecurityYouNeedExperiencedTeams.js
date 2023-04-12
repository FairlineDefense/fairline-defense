import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding: 27rem 12rem 7rem;
  justify-content: flex-end;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      transparent
    ),
    url('./images/courtroom.svg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        transparent,
        transparent
      ),
      url('./images/courtroom-mobile.svg');

    background-position: center top;
    background-size: contain;
    height: 450px;
    padding: 13rem 2rem 3rem 2rem;
  }
`
const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  width: 660px;

  @media (max-width: 800px) {
    width: 90%;
    font-size: 34px;
    line-height: 42px;
  }
`

export default function SecurityYouNeedExperiencedTeams() {
  return (
    <Section>
      <Heading>You need experienced teams to protect you</Heading>
    </Section>
  )
}