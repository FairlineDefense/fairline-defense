import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.div`
  height: 280px;
  padding: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  background-color: var(--darkblue);
`
const Logo = styled.div`
  width: 25%;

  img {
    width: 182px;
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`
const Links = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  header {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 1.5rem;
  }
  ul {
    list-style: none;
  }
  ul li {
    margin-bottom: 1rem;
  }
  a {
    color: #fff;
  }
  @media (max-width: 800px) {
    display: none;
  }
`
const Support = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  header {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    color: #fff;
  }
  @media (max-width: 800px) {
    display: none;
  }
`
const Phone = styled.span`
  font-size: 25px;
  color: #ffd600;
`
const Copyright = styled.div`
width: 100%;
height: 90px;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 2rem;
background-color: var(--darkblue);
color: #fff;
font-size: 15px;
`
export default function Footer() {
  return (
    <>
    <Section>
      <Logo>
        <img src="./images/fdlogo.png" />
      </Logo>
      <Links>
        <header>Quick Links</header>
        <ul>
          <li>
            <Link to="/armedprofessionals">Armed Professionals</Link>
          </li>
          <li>
            <Link to="#">Testimonials</Link>
          </li>
          <li>
            <Link to="/termsofservice">Terms of Service</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
        </ul>
      </Links>
      <Support>
        <header>Support</header>
        <ul>
          <li>
            <Phone>1-833-201-1463</Phone>
          </li>
          <li>
            <Link to="#">Email or Chat with us</Link>
          </li>
          <li>
            <Link to="#">FAQs & Questions</Link>
          </li>
        </ul>
      </Support>
    </Section>
    <Copyright>
      <span>
    Ⓒ 2023, Fairline Defense LLC, All Rights Reserved.
      </span>
    </Copyright>
    </>
  )
}
