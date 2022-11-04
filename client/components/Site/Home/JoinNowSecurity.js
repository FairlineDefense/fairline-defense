import React from 'react'
import styled from 'styled-components'
const Section = styled.div`
width: 100vw;
height: 797px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url('./images/joinnowsecurity.png');
background-position: center bottom;
background-repeat: no-repeat;
background-size: 100%;
text-align: center;

@media(max-width: 800px) {
    background-size: auto 90%;
    justify-content: flex-end;
    padding-bottom: 8rem;
}
`
const Heading = styled.div`
font-size: 48px;
line-height: 52px;
font-weight: 600;
color: #fff;
width: 750px;
margin-top: 8rem;
@media(max-width: 800px) {
  line-height: 38px;
  font-size: 32px;
  width: 290px;
}
`
const StartButton = styled.div`
    background-color: var(--red);
    color: #FFF;
    border-radius: 40px;
    width: 280px;
    padding: .5rem 1rem .5rem 1rem;
    font-size: 20px;
    font-weight: 400;
    margin-top: 2.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;

    @media(max-width: 800px) {
        background-color: #1EA0FF;
      }
`
export default function JoinNowSecurity() {
    return (
        <Section>
        <Heading>Protection for the 21st Century starts here</Heading>
        <a href="/signup"><StartButton>Join Now</StartButton></a>
      </Section>
    )
}
