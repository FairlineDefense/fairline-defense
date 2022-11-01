import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
min-height: 700px;
width: 100vw;
display: flex;
flex-direction: column;
padding: 4rem;
align-items: center;
background-color: var(--bgblue);
margin: 2rem;

@media(max-width: 800px) {
    padding: 2rem 0rem 2rem 0rem;
    margin: 1rem 2rem 1rem 1rem;
    flex-direction: column;
    min-height: 420px;
}
`
const Wrapper = styled.div`
display: flex;
min-height: 360px;
flex-direction: row;
justify-content: space-around;
width: 100%;
margin: 4rem;
@media(max-width: 800px) {
    margin: 0;
    flex-direction: column-reverse;
}
`
const Text = styled.div`
width: 70%;
color: var(--darkblue);
padding: 2rem;
display: flex;
flex-direction: column;

@media(max-width: 800px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0rem;
}
`
const Header = styled.div`
font-size: 42px;
font-weight: 500;
line-height: 48px;
color: var(--darkblue);
@media(max-width:800px) {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
}
`
const Small = styled.div`
font-size: 14px;
color: #C73232;
margin: 1.5rem 0rem 1.5rem 0rem;
`
const CuffsIcon = styled.div`
width: 30%;
background-image: url('./images/handcuffspng.png');
background-position: center;
background-repeat: no-repeat;

@media(max-width: 800px) {
    display: block;
    width: 100%;
    height: 200px;
    background-size: contain;
}
`
export default function WhatWeDontCover() {
    return (
        <Section>
           <Header>What we don't cover.</Header>
           <Wrapper>
           <Text>
            <Header>Any actions with criminal intent.</Header>
            <Small>Don't be a criminal, it never works out.</Small>
           </Text>
           <CuffsIcon></CuffsIcon>
           </Wrapper>
        </Section>
    )
}
