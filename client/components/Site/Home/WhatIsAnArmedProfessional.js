import React, {useState} from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 4rem 3rem;
  justify-content: center;
  background-color: #e8f3f9;

  @media (max-width: 800px) {
    padding: 4rem 2rem;
  }
`
const Header = styled.h1`
  width: 700px;
  font-size: 42px;
  line-height: 50px;
  font-weight: 700;
  color: var(--darkblue);
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 32px;
    line-height: 38px;
  }
`
const Text = styled.div`
  max-width: 900px;
  font-size: 28px;
  color: var(--darkblue);
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`

const Button = styled.div`
  background-color: var(--darkblue);
  color: #fff;
  border-radius: 40px;
  width: 280px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`

export default function WhatIsAnArmedProfessional() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Section>
      <Header>What is an Armed Professional?</Header>
      <Text>
        An armed professional is an individual who has received specialized
        training handling firearms or other weapons, and often has a primary job
        responsibility involve the protection of people, property, or assets.
      </Text>
      {isExpanded && (
        <Text>
          These professionals are often found working in fields such as law
          enforcement, private security, and military roles. People who are
          skilled in the effective use of escalation of force, various types of
          weapons, and detainment techniques. Those who are well-versed in
          tactics and procedures that ensure the safety and well-being of those
          they been trained to protect. Armed professionals are typically
          required to maintain their proficiency in weapon handling and may
          undergo regular training and evaluations to ensure they are up-to-date
          with current “best practices” and legal requirements.
        </Text>
      )}
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {!isExpanded ? 'Learn More' : 'Hide'}
      </Button>
    </Section>
  )
}
