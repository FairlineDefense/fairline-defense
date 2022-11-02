import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Section = styled.div`
height: 350px;
padding: 4rem;
display: flex;
flex-direction: row;
justify-content: space-between;
color: #fff;
background-color: var(--darkblue);
`
const Logo = styled.div`
width: 25%;

img {
    width: 182px;
}

@media(max-width:800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
`
const Links = styled.div`
width: 50%;
display: flex;
flex-direction: column;
header {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 1.5rem;
}
ul {
    list-style: none;
}
ul li {
    margin-bottom: 1rem;
}
a {
    color: #fff;
}
@media(max-width:800px) {
    display:none;
}
`
const Support = styled.div`
width: 25%;
display: flex;
flex-direction: column;
header {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 1rem;
}
ul {
    list-style: none;
}
li {
    margin-bottom: 1rem;
}
a {
    color: #fff;
}
@media(max-width:800px) {
    display:none;
}
`
const Phone = styled.span`
font-size: 25px;
color: #FFD600;
`
export default function Footer() {
    return (
        <Section>
            <Logo>
                <img src="./images/fdlogo.png" />
            </Logo>
            <Links>
            <header>Quick Links</header>
            <ul>
            <li><Link to="#">Account Details</Link></li>
            <li><Link to="#">Membership Benefits</Link></li>
            <li><Link to="#">CCW Permit Process</Link></li>
            <li><Link to="#">Reciprocity Map & Gun Laws</Link></li>
            <li><Link to="#">Upcoming Fairline Defense Events</Link></li>
            </ul>
            </Links>
            <Support>
            <header>Support</header>
            <ul>
            <li><Phone>1-888-XXX-XXXX</Phone></li>
            <li><Link to="#">Email or Chat with us</Link></li>
            <li><Link to="#">FAQ & Questions</Link></li>
            </ul>
            </Support>
        </Section>
    )
}
