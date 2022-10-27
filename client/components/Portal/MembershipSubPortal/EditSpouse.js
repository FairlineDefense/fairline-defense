import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const Header = styled.div`
font-size: 22px;
margin-bottom: 2rem;
`
const InformationWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
`
const InformationBlock = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
color: var(--blueblack);
border-bottom: .5px solid #ccc;

header {
font-weight: 300;
font-size: 22px;
margin: .25rem 0rem .25rem 0rem;
}
small {
font-weight: 200;
font-size: 16px;
}
`
const ButtonWrapper = styled.div`
width: 360px;
display: block;
`
const CyanButton = styled.button`
color: #fff;
width: 200px;
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
const Form = styled.form`
max-width: 700px;
display: flex;
flex-wrap: wrap;
`
const InputGroup = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: .5rem;
justify-content: flex-start;
min-height: 40px;
`
const Input = styled.input`
padding: 1rem;
border: 1px solid #AAB1B9;
border-radius: 4px;
outline: none;
width: 260px;
margin-right: 2rem;
font-size: 16px;
font-weight: 200;
display: block;
color: var(--primary);
`
const Label = styled.label`
display: block;
font-weight: 300;
font-size: 14px;
font-weight: 400;
margin-bottom: .5rem;
`
const ErrorText = styled.div`
height: 34px;
width: 220px;
border: 1px solid red;
border-radius: 5px;
padding: .3rem;
background-color: #fff;
color: inherit;
display: block;
`
export default function EditPersonalInformation(props) {
let {user, setState} = props
const dispatch = useDispatch()
let [form, setForm] = useState()
let [errorText, setErrorText] = useState('')

const changeHandler = (e) => {
    e.preventDefault()
    setForm({...form, [e.target.name]: e.target.value})
}
const cancelHandler = (e) => {
    e.preventDefault()
}
const submitHandler = (e) => {
    e.preventDefault()
}

    return (
        <Wrapper>
        <Header>Add your spouse for only $4.99 a month.</Header>
        <InformationWrapper>
            <form onSubmit={submitHandler}>
                <InputGroup>
                    <span>
                        <Label htmlFor="firstName">Spouse Name</Label>
                        <Input name="spouseName" value={form.spouseName} onChange={(e) => changeHandler(e)} required>
                        </Input>
                    </span>
                <span>
                    <Label htmlFor="email">Spouse Email Address</Label>
                    <Input name="spouseEmail" value={form.spouseEmailAddress} onChange={(e) => changeHandler(e)} required></Input>
                </span>
                <span>
                    <Label htmlFor="phone">Spouse Phone Number</Label>
                    <Input name="spousePhone" value={form.spousePhone} onChange={(e) => changeHandler(e)} required>
                    </Input>
                    </span>
                </InputGroup>
                <InputGroup>
                {errorText && <ErrorText>{errorText}</ErrorText>}
            </InputGroup>
                <ButtonWrapper>
            <span>
            <InformationBlock>
            <small>You will be billed</small>
            <header>$ {quote.total} today</header>
            <small>and $ {quote.total} per {quote.interval}</small>
            </InformationBlock>
            <CyanButton type="submit">Submit</CyanButton>
            </span>
        </ButtonWrapper>
            </form>
        </InformationWrapper>

    </Wrapper>
    )
}
