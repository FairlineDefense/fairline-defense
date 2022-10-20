import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {update} from '../../../store/'

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
const City = styled.input`
padding: 1rem;
border: 1px solid #AAB1B9;
border-radius: 4px;
outline: none;
width: 170px;
margin-right: 10px;
font-size: 16px;
font-weight: 200;
color: var(--primary);
`
const ZipCode = styled.input`
padding: 1rem;
border: 1px solid #AAB1B9;
border-radius: 4px;
outline: none;
width: 80px;
margin-right: 0rem;
font-size: 16px;
font-weight: 200;
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
const ErrorText = styled.div`
height: 70px;
width: 220px;
margin: 2rem;
border: 1px solid red;
border-radius: 5px;
padding: 1rem;
background-color: #fff;
color: inherit;
`
export default function EditPersonalInformation(props) {
let {user, setState} = props
const dispatch = useDispatch()
let [form, setForm] = useState({id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone, streetAddress: user.streetAddress, line2: user.line2, city: user.city, state: user.state, zipCode: user.zipCode, password: user.password || '', repeatPassword: ''})
let [errorText, setErrorText] = useState('')

const changeHandler = (e) => {
    e.preventDefault()
    setForm({...form, [e.target.name]: e.target.value})
}
const cancelHandler = (e) => {
    e.preventDefault()
    //Insert warning to save or continue
    setState('PersonalInformation')
}
const submitHandler = (e) => {
    e.preventDefault()
    function validateFields() {
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email)) {
          return setErrorText('Invalid email address.')
        }
        if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(form.phone)) {
          return setErrorText('Invalid phone number.')
        }
        if(!/^\d{5}(-\d{4})?$/.test(form.zipCode)) {
            return setErrorText('Invalid zip code.')
        }
        //Not operational:
        if (password !== confirmPassword) {
          return setErrorText('Passwords do not match.')
        }
        if (password.length < 8) {
          return setErrorText('Your password must be at least 8 characters')
        }
        if (password.search(/[a-z]/i) < 0) {
          return setErrorText('Your password must contain at least one letter.')
        }
        if (password.search(/[0-9]/) < 0) {
          return setErrorText('Your password must contain at least one digit.')
        } else {
            dispatch(update(form))
        }
      }
      validateFields()
    
}

    return (
        <Wrapper>
            <form onSubmit={submitHandler}>
                <InputGroup>
                <span>
                    <Label htmlFor="firstName">First Name</Label>
                        <Input placeholder="First Name" name='firstName' value={form.firstName} onChange={(e)=>changeHandler(e)} required></Input>
                    </span>
                    <span>
                    <Label htmlFor="lastName">Last Name</Label>
                        <Input placeholder="Last Name" name='lastName' value={form.lastName} onChange={(e)=>changeHandler(e)} required></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <span>
                    <Label htmlFor="email">Email</Label>
                        <Input placeholder="Email Address" name='email' value={form.email} onChange={(e)=>changeHandler(e)} required></Input>
                    </span>
                    <span>
                    <Label htmlFor="phone">Phone</Label>
                        <Input placeholder="Phone Number" name='phone' value={form.phone} onChange={(e)=>changeHandler(e)} required></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <span>
                    <Label htmlFor="streetAddress">Street Address</Label>
                        <Input placeholder="Street Address" name='streetAddress' value={form.streetAddress} onChange={(e)=>changeHandler(e)} required></Input>
                    </span>
                    <span>
                    <Label htmlFor="city">City, Zipcode</Label>
                        <City placeholder="City" name='city' value={form.city} onChange={(e)=>changeHandler(e)} required></City>
                        <ZipCode placeholder="Zip." name='zipCode' value={form.zipCode} onChange={(e)=>changeHandler(e)} required></ZipCode>
                </span>
                </InputGroup>
                <InputGroup>
                <span>
                    <Label htmlFor="line2">Street Address Line 2</Label>
                        <Input placeholder="Optional" name='line2' value={form.line2} onChange={(e)=>changeHandler(e)}></Input>
                    </span>
                    <span>
                    <Label htmlFor="state">State</Label>
                        <Input placeholder="State" name='state' value={form.state} onChange={(e)=>changeHandler(e)} required></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <span>
                    <Label htmlFor="password">Password</Label>
                        <Input placeholder="Password" name='password' value={form.password} onChange={(e)=>changeHandler(e)}></Input>
                    </span>
                    <span>
                    <Label htmlFor="repeatPassword">Repeat New Password</Label>
                        <Input placeholder="Repeat Password" name='repeatPassword' value={form.repeatPassword} onChange={(e)=>changeHandler(e)}></Input>
                </span>
                </InputGroup>
                <InputGroup>
                <Button type="button" onClick={(e)=>cancelHandler(e)}>Cancel</Button><CyanButton type="submit">Save Edits</CyanButton>
                </InputGroup>
           </form>
           {errorText && <ErrorText>{errorText}</ErrorText>}
        </Wrapper>

    )
}
