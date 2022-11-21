import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
  padding: 2rem;

  @media (max-width: 800px) {
    min-height: 300px;
    padding: 1rem;
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
  padding: 4rem;
  @media (max-width: 800px) {
    margin: 0;
    padding: 2rem;
    flex-direction: column-reverse;
  }
`
const Text = styled.div`
  width: 60%;
  color: var(--darkblue);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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
  font-weight: 600;
  line-height: 48px;
  color: var(--darkblue);
  @media (max-width: 800px) {
    font-size: 48px;
    font-size: 30px;
    line-height: 30px;
    margin-top: 1rem;
  }
`
const Small = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: var(--darkblue);
  margin: 1.5rem 0rem 1.5rem 0rem;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`
const Arrow = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  color: var(--darkblue);
  font-style: italic;
  img {
    width: 126px;
  }
  span {
    margin-top: 8rem;
    width: 280px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`
export default function WhyWeStartedThis() {
  return (
    <Section>
      <Wrapper>
        <Text>
          <Header>Why We started this?</Header>
          <Small>
            Our founders have a background in law enforcment and security work.
            We see the industry set up to only protect the companies and not the
            employees.{' '}
          </Small>
        </Text>
        <Arrow>
          <div>
            <img src="./images/arrow.png" />
          </div>
          <span>We are here to make that change to protect you.</span>
        </Arrow>
      </Wrapper>
    </Section>
  )
}
