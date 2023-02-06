import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  padding: 2rem 1rem 1rem 1rem;
  position: relative;

  @media (max-width: 800px) {
    padding: .5rem;
    height: 55px;
    background-color: #132A4A;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Logo = styled.img`
  height: 64px;
  width: auto;
  cursor: pointer;

  @media (max-width: 800px) {
    height: 32px;
  }
  `

export default function RegisterHeader() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="./images/fdlogo.png" />
      </Link>
    </Wrapper>
  )
}
