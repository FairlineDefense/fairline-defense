import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import update from '../../../store/'

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
const Label = styled.label`
display: block;
font-weight: 300;
font-size: 14px;
font-weight: 400;
margin-bottom: .5rem;
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
const Button = styled.button`
color: var(--blueblack);
width: 200px;
border-color: var(--blueblack);
border: 1px solid;
border-radius: 5px;
padding: .75rem;
background: transparent;
outline: none;
margin: .5rem 1rem .5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
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
    dispatch(update(form))
}

    return (
        <Wrapper>
            <form onSubmit={submitHandler}>
                <InputGroup>
                <span>
                    <Label htmlFor="firstName">First Name</Label>
                        <Input placeholder="First Name" name='firstName' value={form.firstName}></Input>
                    </span>
                    <span>
                    <Label htmlFor="lastName">Last Name</Label>
                        <Input placeholder="Last Name" name='lastName' value={form.lastName}></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <span>
                    <Label htmlFor="email">Email</Label>
                        <Input placeholder="Email Address" name='email' value={form.email}></Input>
                    </span>
                    <span>
                    <Label htmlFor="phone">Phone</Label>
                        <Input placeholder="Phone Number" name='phone' value={form.phone}></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <span>
                    <Label htmlFor="streetAddress">Street Address</Label>
                        <Input placeholder="Street Address" name='streetAddress' value={form.streetAddress}></Input>
                    </span>
                    <span>
                    <Label htmlFor="city">City, Zip Code</Label>
                        <Input placeholder="City, Zip Code" name='city' value={form.city + ',' + ' ' + form.zipCode}></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <span>
                    <Label htmlFor="password">Password</Label>
                        <Input placeholder="Password" name='password' value={form.password}></Input>
                    </span>
                    <span>
                    <Label htmlFor="repeatPassword">Repeat New Password</Label>
                        <Input placeholder="Repeat Password" name='repeatPassword' value={form.repeatPassword}></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <Button type="button" onClick={()=>cancelHandler()}>Cancel</Button><CyanButton type="submit">Save Edits</CyanButton>
                </InputGroup>
           </form>
        </Wrapper>

    )
}
