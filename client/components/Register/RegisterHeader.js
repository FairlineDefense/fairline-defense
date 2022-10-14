import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100vw;
    height: 80px;
    padding: 2rem 1rem 1rem 1rem;
    position: relative;
`
const Logo = styled.img`
    height: 64px;
    width: auto;
    cursor: pointer;
    `

export default function RegisterHeader() {
    return (
        <Wrapper>
        <Link to="/"><Logo src="./images/fdlogo.png" /></Link>
        </Wrapper>
    )
}
