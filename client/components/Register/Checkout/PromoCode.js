import React from 'react'
import styled from 'styled-components'
import FDTextField from '../../FDTextField'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import {useState} from 'react'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const Form = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .5rem;

  @media (max-width: 800px) {
    margin-right: 0.5rem;
  }
`
const Message = styled.div`
    width: 100%;
    font-weight: 300;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

    const Button = styled.button`
    width: 80px;
    font-weight: 300;
    padding: 1rem;
    outline: none;
    border: none;
    background-color: var(--blue);
    color: white;
    `

const PromoCode = () => {
    const [promoCode, setPromoCode] = useState('')
    const [checking, setChecking] = useState(false)
    const [valid, setValid] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setChecking(true)
        fetch('payment/promo-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({promoCode}),
        }).then((res) => {
            setChecking(false)
            if(res.status === 200) {
                setValid(true)
            } else {
                setValid(false)
            }
        })
    }

  return (
    <Wrapper>
        <Form onSubmit={(e)=>submitHandler(e)}>
          <FDTextField
            fullWidth
            name="promoCode"
            autoComplete=""
            label="PromoCode"
            placeholder="PromoCode"
            type="text"
            variant="filled"
            style={{margin: 8, flexGrow: 1}}
            onChange={(e) => setPromoCode(e.target.value)}
            value={promoCode}
            required
          />
          <Button type="submit">Apply</Button>
          <Message>
          <span>loader</span>
          <span>message</span>
          </Message>
        </Form>
    </Wrapper>
  )
}
export default PromoCode
