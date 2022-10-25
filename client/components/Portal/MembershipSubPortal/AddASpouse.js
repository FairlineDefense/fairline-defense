import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
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
const ButtonWrapper = styled.div`
width: 20%;
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
margin-bottom: 2rem;
justify-content: flex-start;
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
export default function AddASpouse(props) {
let {user, setState} = props
let [form, setForm] = useState({spouseFirstName: user.firstName, spouseEmail: user.email, spousePhone: user.phone})

const changeHandler = (e) => {
    e.preventDefault()
    setForm({...form, [e.target.name]: e.target.value})
}

const addASpouse = async () => {
    try {
     let reqBody = {...user, ...form}
     console.log(reqBody.subscription)
     const response = await fetch('/payment/add-a-spouse', {
       method: 'PUT',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(reqBody)
     })
    //  const {customerId: customerId} = await response.json()
    //  setCustomerId(customerId)
     } catch (error) {
     console.log('create customer error',error)
     }
    }

return (
        <Wrapper>
            <InformationWrapper>
                <form>
                    <InputGroup>
                        <span>
                            <Label htmlFor="firstName">Spouse First Name</Label>
                            <Input value={form.firstName} onChange={(e) => changeHandler(e)}>
                            </Input>
                        </span>
                    <span>
                        <Label htmlFor="email">Spouse Email Address</Label>
                        <Input value={form.emailAddress} onChange={(e) => changeHandler(e)}></Input>
                    </span>
                    </InputGroup>
                    <InputGroup>
                        <span>
                            <Label htmlFor="phone">Spouse Phone Number</Label>
                            <Input value={form.phone} onChange={(e) => changeHandler(e)}>
                            </Input>
                        </span>
                    </InputGroup>
                </form>
            </InformationWrapper>
            <ButtonWrapper>
                <CyanButton onClick={(e) => addASpouse(e)}>Add Spouse</CyanButton>
            </ButtonWrapper>
        </Wrapper>
    )
}
