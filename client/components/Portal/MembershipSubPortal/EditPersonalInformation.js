import React from 'react'
import styled from 'styled-components'

export default function EditPersonalInformation(props) {
let {user} = props
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
`
const Button = styled.button`
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
    return (
        <Wrapper>
            <Form>
                <InputGroup>
                <Input placeholder={'value'} value={user.firstName}></Input>
                <Input></Input>
                </InputGroup>
                <InputGroup>
                <Input placeholder={'value'} value={user.firstName}></Input>
                <Input></Input>
                </InputGroup>
                <InputGroup>
                <Input placeholder={'value'} value={user.firstName}></Input>
                <Input></Input>
                </InputGroup>
                <InputGroup>
                <Input placeholder={'value'} value={user.firstName}></Input>
                <Input placeholder={'value'} value={user.firstName}></Input>
                </InputGroup>
                <InputGroup>
                <Button>Cancel</Button><CyanButton>Save Edits</CyanButton>
                </InputGroup>
            </Form>
        </Wrapper>
    )
}
