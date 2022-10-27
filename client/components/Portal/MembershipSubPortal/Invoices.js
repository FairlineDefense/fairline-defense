import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
const Wrapper = styled.div`
width: 100%;
min-height: 100%;
flex-direction: column;

div:nth-child(odd) {
    background-color: #E8F3F9;
}
`
const Line = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: .5rem;
flex-wrap: no-wrap;
`
const Date = styled.span`
width: fit-content;
display: inline-block;
`
const Charge = styled.span`
width: fit-content;
display: inline-block;
`
const PDF = styled.span`
width: fit-content;
display: inline-block;

a {
    text-transform: uppercase;
    color: var(--cyan);
    font-weight: 600;
}
`
export default function Invoices() {
    let [invoices, setInvoices] = useState([{}])

    const getInvoices = async () => {
        const res = await fetch('/payment/invoices', {
            method: 'GET',
            headers: {'Content-type': 'application/json'}
        })
        const body = await res.json()
        setInvoices(body)
    }

    useEffect(()=> {
        getInvoices()
    }, [])

    console.log(invoices)
    return (
        <Wrapper>
            {invoices && invoices.map((line) =>
            <Line key={line.id}>
            <Date>{line.date}</Date>
            <Charge>{line.amount}</Charge>
            <PDF><a href={line.pdf}>View PDF</a></PDF>
            </Line>)}
        </Wrapper>
    )
}
