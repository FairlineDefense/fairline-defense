import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function EditPersonalInformation(props) {
let {user} = props
const dispatch = useDispatch()
let [form, setForm] = useState({firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone, streetAddress: user.streetAddress, city: user.city, zipCode: user.zipCode, password: user.password || '', repeatPassword: ''})

const changeHandler = (e) => {
    e.preventDefault()
    setForm({...form, [e.target.name]: e.target.value})
}
const submitHandler = (e) => {
    e.preventDefault()
    //dispatch update user
}
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
`
const InputGroup = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: 2rem;
justify-content: flex-start;
`
const Input = styled.input`
padding: 1rem;
border: 1px solid #AAB1B9;
border-radius: 4px;
outline: none;
width: 220px;
margin-right: 2rem;
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
    return (
        <Wrapper>
            <form>
                <InputGroup>
                <Input placeholder={'First Name'} name='firstName' value={form.firstName}></Input>
                <Input placeholder={'Last Name'} name='lastName' value={form.lastName}></Input>
                </InputGroup>
                <InputGroup>
                <Input placeholder={'Email Address'} name='email' value={form.email}></Input>
                <Input placeholder={'Phone Number'} name='phone' value={form.phone}></Input>
                </InputGroup>
                <InputGroup>
                <Input placeholder={'Street Address'} name='streetAddress' value={form.streetAddress}></Input>
                <Input placeholder={'City, Zip Code'} name='zipCode' value={form.city + form.zipCode}></Input>
                </InputGroup>
                <InputGroup>
                <Input placeholder={'Password'} name='password' value={form.password}></Input>
                <Input placeholder={'Repeat Password'} name='repeatPassword' value={form.repeatPassword}></Input>
                </InputGroup>
                <InputGroup>
                <Button>Cancel</Button><CyanButton>Save Edits</CyanButton>
                </InputGroup>
            </form>
        </Wrapper>
    )
}
