import React from 'react'
import styled from 'styled-components'
export default function Card() {
const Wrapper = styled.div`
width: 100%;
background-color: #fff;
display: flex;
align-items: center;
min-height: 80vh;
`
const Container = styled.div`
margin: 1rem;
background-color: var(--bgblue);
border-radius: 20px;
padding: 2rem;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 400px;
`
const Left = styled.div`
display: flex;
flex-direction: column;
width: 50%;
align-items: flex-end;
img {
    width: 400px;
}
`
const H1 = styled.h1`
font-size: 42px;
font-weight: 600;
color: var(--darkblue);
margin-bottom: 1.5rem;
line-height: 42px;
`
const H2 = styled.h1`
font-size: 30px;
font-weight: 200;
color: var(--darkblue);
margin-bottom: 1rem;
`
const Button = styled.button`
color: var(--primary);
width: 220px;
border-color: var(--primary);
border: 1px solid;
border-radius: 5px;
padding: .75rem;
background: transparent;
outline: none;
margin: .5rem 0rem .5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
`
const CyanButton = styled.button`
color: #fff;
width: 220px;
border: none;
border-radius: 5px;
padding: .75rem;
background: var(--cyan);
outline: none;
margin: .5rem 0rem .5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
`
const Right = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: flex-start;
padding: 2rem;
`
const TextBlock = styled.div`
display: flex;
width: 220px;
flex-direction: column;
margin: .5rem 0 .5rem 0;
`
const Cyan = styled.span`
font-size: inherit;
font-weight: 500;
color: var(--cyan);
`
    return (
        <Wrapper>
            <Container>
                <Left><img src="./images/card.png" /></Left>
                <Right>
                    <H1>Membership Card</H1>
                    <Button>Download Digital</Button>
                    <CyanButton>Ship a New Card</CyanButton>
                </Right>
            </Container>
        </Wrapper>
    )
}
