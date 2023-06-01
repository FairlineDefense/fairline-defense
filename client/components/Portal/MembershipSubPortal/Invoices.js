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
const Header = styled.span`
  font-weight: 500;
  color: var(--darkblue);
  font-size: 20px;
`
const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  flex-wrap: no-wrap;
`
const Date = styled.span`
  width: 10%;
  display: inline-block;
  color: var(--blueblack);
`
const Charge = styled.span`
  width: 60%;
  display: inline-block;
  color: var(--blueblack);
  margin-left: 8rem;

  @media (max-width: 800px) {
    width: 50%;
  }
`
const PDF = styled.span`
  width: 30%;
  display: inline-block;
  text-align: right;
  a {
    text-transform: uppercase;
    color: var(--cyan);
    font-weight: 500;
  }

  @media (max-width: 800px) {
    width: 40%;
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

  return (
    <Wrapper>
      <Line>
        <Date>
          <Header>Date</Header>
        </Date>
        <Charge>
          <Header>Charge</Header>
        </Charge>
        <PDF>
          <Header>Invoice</Header>
        </PDF>
      </Line>
      {invoices &&
        invoices.map(line => (
          <Line key={line.id}>
            <Date>{line.date}</Date>
            <Charge>{line.amount}</Charge>

            <PDF>
              <a href={line.pdf} target="_blank">
                PDF
              </a>
            </PDF>
          </Line>
        ))}
    </Wrapper>
  )
}
