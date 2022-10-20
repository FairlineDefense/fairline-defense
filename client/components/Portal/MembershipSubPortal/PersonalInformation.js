import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
`
const InformationWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
`
const InformationBlock = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2rem;
color: var(--blueblack);

header {
font-weight: 300;
font-size: 22px;
margin-bottom: 1rem;
}
small {
font-weight: 200;
font-size: 16px;
}
`
const EditWrapper = styled.div`
width: 20%;
display: block;
`
const EditButton = styled.button`
color: var(--blueblack);
width: 200px;
border-color: var(--blueblack);
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
export default function PersonalInformation(props) {
let {user, setState} = props
const clickHandler = (e) => {
    e.preventDefault()
    setState('EditPersonalInformation')
}

return (
        <Wrapper>
            <InformationWrapper>
                <InformationBlock>
                    <h3>Full Name</h3>
                    <small>{`${user.firstName} ${user.lastName}`}</small>
                </InformationBlock>
                <InformationBlock>
                    <h3>Email</h3>
                    <small>{user.email}</small>
                </InformationBlock>
                <InformationBlock>
                    <h3>Phone</h3>
                    <small>{user.phone}</small>
                </InformationBlock>
                <InformationBlock>
                    <h3>Shipping Address</h3>
                    <small>{`${user.streetAddress}, ${user.city}, ${user.state}, ${user.zipCode}, ${user.line2}`}</small>
                </InformationBlock>
                <InformationBlock>
                    <h3>Password</h3>
                    <small>************</small>
                </InformationBlock>
            </InformationWrapper>
            <EditWrapper>
                <EditButton onClick={(e) => clickHandler(e)}>Edit Profile</EditButton>
            </EditWrapper>
        </Wrapper>
    )
}
