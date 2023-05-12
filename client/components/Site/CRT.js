import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

import Navbar from './Navbar'
import SolidFooter from './Home/SolidFooter'
import FDTextField from '../FDTextField'

const Container = styled.div`
  text-align: center;
  padding: 10rem 6rem 1rem 6rem;
  background: #132A4A;
  @media (max-width: 768px) {
    padding: 5rem 2rem 1rem 1.5rem;
  }
`

const Header = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: white;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`
const TapToCallText = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: #E0CF39;
  margin-top: 50px;
  padding-bottom: 10px;
`
const StepHeader = styled.div`
  font-size: 32px;
  line-height: 44px;
  font-weight: 700;
  color: white;
  margin-top: 88px;

  @media (max-width: 800px) {
    font-size: 20px;
    line-height: 28px;
    width: 250px;
    margin: auto;
    margin-top: 58px;
  }
`
const StepText = styled.div`
  font-weight: 200;
  font-size: 30px;
  line-height: 42px;
  color: #FFFFFF;
  text-align: left;
  margin: auto;
  margin-top: 40px;
  width: 90%;
  margin-bottom: 120px;

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 30px;
    margin-top: 20px;
    width: 98%;
  }

  ol {
    margin-left: 2rem;
  }

  li strong {
    font-weight: bold;
  }

`
const Button = styled.div`
  background: #00ABE0;
  color: #fff;
  border-radius: 100px;
  width: 340px;
  height: 50px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;  
  padding: 0.7rem 1rem 0.5rem 1rem;
  text-align: center;
  font-family: 'Eina';
  margin: auto;

  @media (max-width: 400px) {
    width: 100%;
  }
`
const CrtImage = styled.img`
  width: 120px;

  @media (max-width: 800px) {
    margin-top: 30px;
    width: 73px;
  }
`

const ContactUs = () => {

  const handleClick = () => {
    window.open('tel:+18332011462')
  }

  return (
    <>
      <Navbar shouldShowBackground />
      <Container>
        <CrtImage src="./images/crt.svg" />
        <Header style={{ marginTop: 30 }}>Contact Fairline Defense<br />Critical Response Team (CRT)</Header>
        <TapToCallText>Tap to call</TapToCallText>
        <Button onClick={handleClick}>+1 (833) 201-1462</Button>
        <StepHeader>Make sure you follow these steps</StepHeader>
        <StepText>
          <ol>
            <li><strong>Call 911 immediately.</strong></li>
            <li>After calling 911, <strong>contact our CRT line</strong> without delay.</li>
            <li>Officers will arrive promptly, and it is important to be polite and respectful to the officers.</li>
            <li>When speaking to officers, simply state "I am happy to cooperate and answer any questions once my attorney is present."</li>
          </ol>
        </StepText>
      </Container>
      <SolidFooter />
    </>
  )
}

export default ContactUs
