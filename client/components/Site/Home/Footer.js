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
object-fit: contain;

img {
    width: 182px;
}
`
const Links = styled.div`
width: 50%;
display: flex;
flex-direction: column;
header {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 1rem;
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
`
const Support = styled.div`
width: 25%;
display: flex;
flex-direction: column;
header {
    font-weight: 400;
    font-size: 18px;
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
            <li><Link to="#">1-888-XXX-XXXX</Link></li>
            <li><Link to="#">Email or Chat with us</Link></li>
            <li><Link to="#">FAQ & Questions</Link></li>
            </ul>
            </Support>
        </Section>
    )
}
