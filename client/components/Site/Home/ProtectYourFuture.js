import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
width: 100vw;
min-height: 670px;
background: linear-gradient(102.57deg, #21488a 0%, #0b182d 100%);
color: #fff;
padding: 4rem;
display: flex;
flex-direction: row;
align-items: center;

@media(max-width: 800px) {
    flex-direction: column-reverse;
    min-height: 100vh;
    padding: 1rem;
}
`
const Text = styled.div`
width: 50%;
padding: 4rem;
header {
    font-size: 42px;
    font-weight: 600;
}
p {
    font-size: 25px;
    font-weight: 200;
    margin: 2rem 0rem 2rem 0rem;
}
@media(max-width: 800px) {
    width: 100%;
    padding: 0rem;
    text-align: center;
}
`
const Image = styled.div`
width: 50%;
object-fit: contain;
img {
    width: 100%;
}

@media(max-width: 800px) {
    width: 100%;
    padding: 2rem;
}
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
    display: none;

@media(max-width: 800px) {
    display: block;
}
`
export default function ProtectYourFuture() {
    return (
        <Section>
        <StartButton>Get Started</StartButton>
        <Text><header>Protect your future</header>
        <p>If you have to defend yourself in a traumatic situation, you will be questioned by the police.</p>
        <p>You can even be sued by your attacker or their family. Defending yourself can quickly spiral into a financial problem.</p></Text>
        <Image><img src="./images/AdobeStock_169557997-1.png" /></Image>
        </Section>
    )
}