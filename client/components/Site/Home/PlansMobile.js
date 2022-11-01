import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
max-width: 100vw;
margin: 2rem;
height: fit-content;
background-color: var(--bgblue);
display: flex;
justify-content: center;
flex-direction: column;
padding: 1rem 0rem 1rem 0rem;
display: none;

@media(max-width: 800px) {
    display: block;
}
`
const Header = styled.div`
font-size: 32px;
color: #C73232;
width: 100%;
text-align: center;
margin-bottom: 2rem;
font-weight: 500;
`
const BlueHeader = styled.div`
font-size: 32px;
line-height: 26px;
font-weight: 600;
text-align: center;
width: 100%;
margin-bottom: 1rem;
color: var(--darkblue);
`
const SubHeader = styled.div`
font-size: 16px;
width: 100%;
text-align: center;
color: var(--darkblue);
`
const Blue = styled.div`
width: 100%;
text-align: center;
font-size: 16px;
font-weight: 500;
color: var(--cyan);
margin: 2rem 0rem 1rem 0rem;
`
const Bold = styled.span`
font-size: inherit;
font-weight: 600;
color: inherit;
`
export default function PlansMobile() {
    return (
        <Section>
        <Header>No complicated plans</Header>
        <BlueHeader>No Bull</BlueHeader>
        <BlueHeader>All Protection</BlueHeader>
        <SubHeader>This is our company motto</SubHeader>
        <Blue>Peace of mind at $19.99</Blue>
        <SubHeader><Bold>$19.99</Bold>/ month or <Bold>$199</Bold> for the year.</SubHeader>
        <SubHeader>Add a spouse or family member for <Bold>$5</Bold></SubHeader>
        </Section>
    )
}
