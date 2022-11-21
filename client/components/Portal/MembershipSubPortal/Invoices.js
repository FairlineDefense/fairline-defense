import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  flex-direction: column;

  div:nth-child(even) {
    background-color: #e8f3f9;
  }
`
const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  flex-wrap: no-wrap;
`
const Date = styled.span`
  width: fit-content;
  display: inline-block;
  color: var(--blueblack);
`
const Charge = styled.span`
  width: fit-content;
  display: inline-block;
  color: var(--blueblack);
  margin-left: 8rem;
`
const PDF = styled.span`
  width: fit-content;
  display: inline-block;

  a {
    text-transform: uppercase;
    color: var(--cyan);
    font-weight: 500;
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

  useEffect(() => {
    getInvoices()
  }, [])

  console.log(invoices)
  return (
    <Wrapper>
      {invoices &&
        invoices.map(line => (
          <Line key={line.id}>
            <span>
              <Date>{line.date}</Date>
              <Charge>{line.amount}</Charge>
            </span>
            <PDF>
              <a href={line.pdf} target="_blank">
                View PDF
              </a>
            </PDF>
          </Line>
        ))}
    </Wrapper>
  )
}
