import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 6rem 8rem 6rem 8rem;

  @media (max-width: 800px) {
    min-height: 300px;
    padding: 4rem 1rem 2rem 1rem;
    flex-direction: column;
  }
`
const Text = styled.div`
  width: 40%;
  color: var(--darkblue);
  disply: flex;
  justify-content: center;
  align-items: flex-start;
  height: 250px;

  header {
    position: relative;
    font-size: 48px;
    line-height: 48px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: fit-content;

    header {
      line-height: 38px;
      margin-bottom: 1rem;
      font-size: 32px;
      margin-bottom: 1rem;
      text-align: center;
    }
  }
`
const Questions = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

ul {
    width: 100%;

    li:last-child {
        border-bottom: none;
    }
}
ul li {
    font-size: 20px;
    color: var(--darkblue);
    font-weight: 500;
    padding: .75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--darkblue);

    img {
        width: 25px;
        height: 15px;
    }
}

@media(max-width: 800px) {
  width: 100%;
}
`
export default function FAQ() {
  return (
    <Section>
      <Text>
        <header>Questions?</header>
        <header>We got answers.</header>
      </Text>
      <Questions>
        <ul>
            <li>Why do I need this?<img src="./images/cyandownarrow.png" /></li>
            <li>Why do I need this?<img src="./images/cyandownarrow.png" /></li>
            <li>Why do I need this?<img src="./images/cyandownarrow.png" /></li>
            <li>Why do I need this?<img src="./images/cyandownarrow.png" /></li>
            <li>Why do I need this?<img src="./images/cyandownarrow.png" /></li>
        </ul>
      </Questions>
    </Section>
  )
}
