import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
min-height: 400px;
width: 100vw;
display: flex;
flex-direction: column;
padding: 6rem;
align-items: center;
padding: 2rem 4rem 2rem 4rem;

@media(max-width: 800px) {
    min-height: 300px;
    padding: 2rem;
    flex-direction: column;
}
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
`
const Text = styled.div`
width: 50%;
color: var(--darkblue);
padding: 4rem;
display: flex;
flex-direction: column;
@media(max-width: 800px) {
}
`
const Header = styled.div`
font-size: 42px;
font-weight: 500;
line-height: 48px;
color: var(--darkblue);
`
const Small = styled.div`
font-size: 14px;
color: var(--darkblue);
margin: 1rem 0rem 1rem 0rem;
`
const Icons = styled.div`
width: 50%;
display: flex;
align-items: center;
padding: 4rem;
@media(max-width: 800px) {
}
`
const CyanButton = styled.div`
    background-color: var(--cyan);
    color: #FFF;
    border-radius: 40px;
    width: 150px;
    padding: .5rem 1rem .5rem 1rem;
    font-size: 16px;
    font-weight: 200;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
`
export default function WhatDoWeCover() {
    return (
        <Section>
           <Header>What do we cover?</Header>
           <Wrapper>
           <Text>
            <Header>Any actions to defend your life.</Header>
            <Small>Click below to see all coverages</Small>
            <CyanButton>All Coverages</CyanButton>
           </Text>
           <Icons><img src="./images/icons.png" /></Icons>
           </Wrapper>
        </Section>
    )
}
