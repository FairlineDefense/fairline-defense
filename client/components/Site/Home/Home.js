import React from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components'

const Landing = styled.div`
width: 100vw;
height: 670px;
display: flex;
flex-direction: column;
padding: 17rem 0rem 0rem 4rem;
background-image: url('./images/welcomeimg-1024x476.png');
background-position: center top;
background-repeat: no-repeat;
background-size: 100%;

@media(max-width: 800px) {
  background-size: cover;
  height: 80vh;
  padding: 20rem 1rem 1rem 1rem;
}
`
const Heading = styled.div`
font-size: 48px;
font-weight: 600;
color: #fff;
`
const SubHeading = styled.div`
font-size: 24px;
font-weight: 200;
color: #fff;
width: 500px;
`
const StartButton = styled.div`
    background-color: var(--red);
    color: #FFF;
    border-radius: 40px;
    width: 280px;
    padding: 1rem 2rem 1rem 2rem;
    font-size: 20px;
    font-weight: 400;
    margin-top: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
`
const Home = () => {
  return (
    <>
      <Navbar />
      <Landing>
        <Heading>Protection Starts Here</Heading>
        <SubHeading>Fairline Defense protects your family in all  defense situations. </SubHeading>
        <StartButton>Get Started</StartButton>
      </Landing>
    </>
  )
}
export default Home
