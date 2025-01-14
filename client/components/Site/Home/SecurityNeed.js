import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  padding: 0rem 4rem 0rem 4rem;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
    padding: 0rem;
  }
`

const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('./images/AdobeStock_462413265 3.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;

  @media (max-width: 800px) {
    border-radius: 0px;
    background-size: cover;
    background-position: 70% bottom;
  }
`

const TextRight = styled.div`
  width: 300px;
  text-align: right;
  margin-right: 9rem;

  header {
    color: #fff;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 190px;
    margin-right: 0rem;
    margin-top: 6rem;
    text-align: center;

    header {
    }
  }
`
export default function SecurityNeed() {
  return (
    <Section>
      <Image>
        <TextRight>
          <header>You need experienced teams to protect you</header>
        </TextRight>
      </Image>
    </Section>
  )
}
