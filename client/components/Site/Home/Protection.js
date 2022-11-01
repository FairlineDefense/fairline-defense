import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 548px;
max-width: 100vw;
display: flex;
flex-direction: row;
padding: 1rem;
align-items: center;
margin: 6rem 2rem 6rem 2rem;
background-color: var(--bgblue);
`
const Wrapper = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const FairlineLogo = styled.div`
width: 50%;
overflow: visible;

img {
    width: 474px;
    height: 618px;
}
`
const Header = styled.div`
font-size: 48px;
font-weight: 600;
line-height: 55px;
color: var(--darkblue);
margin-bottom: 1rem;
`
const Arrow = styled.div`
width: 260px;
height: 200px;
background-image: url('./images/webelieve.png');
background-position: bottom;
background-repeat: no-repeat;
`

export default function Protection() {
    return (
        <Section>
            <FairlineLogo><img src="./images/blueFlogo-966x1024.png" /></FairlineLogo>
            <Wrapper>
                <Header>
                    One Plan
                </Header>
                <Header>
                    Total Protection
                </Header>
                <Header>
                    All Protection
                </Header>
                <Header>
                    No Politics
                </Header>
            </Wrapper>
            <Arrow></Arrow>
        </Section>
    )
}
