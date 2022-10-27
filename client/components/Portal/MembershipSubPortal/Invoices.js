import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
const Wrapper = styled.div`
width: 100%;
height: 100%;
`
export default function Invoices() {
    let [invoices, setInvoices] = useState([])

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
            Invoices
        </Wrapper>
    )
}
