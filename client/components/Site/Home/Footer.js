import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);
`;

const Section = styled.div`
  height: 280px;
  padding: 4rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);

  @media (max-width: 800px) {
    height: 100%;
    flex-direction: column;
    padding: 2rem;
    margin-bottom: 0rem;
  }
`
const TermsSection = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  background: transparent;
  border-top: 0.2px solid #fff;
  justify-content: left;

  @media (max-width: 800px) {
    height: 100%;
    flex-direction: column;
    padding: 0rem 2rem 2rem 2rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }
`

const TermsLink = styled.a`
  padding-right: 30px;
  color: white;
  border-right: 0.2px solid #fff;
  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 2rem;
    flex-direction: column;
    border-right: none;
  }
`
const PrivacyLink = styled.a`
  padding-left: 30px;
  color: white;
  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 2rem;
    flex-direction: column;
    padding-left: 0px;
  }
`
const CopyrightLink = styled.a`
  padding-left: 30px;
  margin-left: auto;
  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 2rem;
    flex-direction: column;
    padding-left: 0px;
  }
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
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 3rem;

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 2rem;
    flex-direction: column;
  }
`

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;

  header {
    font-weight: 600;
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
    width: 100%;
    margin-bottom: 1.5rem;
    border-bottom: 0.5px solid #fff;

    header {
      margin-bottom: 1rem;
    }

    ul li {
      margin-bottom: 0.75rem;
    }

    > :last-child {
      margin-bottom: 1rem;
    }
  }
`
const Support = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: right;

  header {
    font-weight: 600;
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
    width: 100%;
    text-align: left;
  }
`
const Phone = styled.span`
  font-weight: 400;
`
export default function Footer() {
  return (
    <Container>
      <Section>
        <Logo>
          <img src="./images/fdlogo.png" />
        </Logo>
        <LinksWrapper>
          <LinkGroup>
            <header>About</header>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Reviews & Testimonials</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </LinkGroup>
          <LinkGroup>
            <header>Quick Links</header>
            <ul>
              <li>
                <a href="#">Armed Citizen</a>
              </li>
              <li>
                <a href="/armedprofessionals">Armed Professional</a>
              </li>
            </ul>
          </LinkGroup>
        </LinksWrapper>
        <Support>
          <header>Support</header>
          <ul>
            <li>
              <Phone>1-833-201-1463</Phone>
            </li>
            <li>
              <a href="/contactus">Email Us</a>
            </li>
          </ul>
        </Support>
      </Section>
      <TermsSection>
        <TermsLink href='/termsofservice'>Terms & Service</TermsLink>
        <PrivacyLink href='/privacypolicy'>Privacy Policy</PrivacyLink>
        <CopyrightLink>
          <span>Ⓒ 2023, Fairline Defense LLC, All Rights Reserved.</span>
        </CopyrightLink>
      </TermsSection>
    </Container>
  )
}
