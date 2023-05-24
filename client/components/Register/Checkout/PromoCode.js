import React from 'react'
import styled, { keyframes } from 'styled-components';
import FDTextField from '../../FDTextField'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../theme'
import { useState } from 'react'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
`
const Form = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .5rem;

  @media (max-width: 800px) {
    margin-right: 0.5rem;
  }
`
const PromoFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0px;
  }
`;

const PromoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;


const SuccessMessage = styled.div`
  width: 50%;
  padding: 1rem;
  background-color: #4BB543;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  position: relative;
  margin-top: 10px;
  height: 58px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const ErrorMessage = styled.div`
  width: 50%;
  padding: 1rem;
  background-color: #F44336;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  position: relative;
  margin-top: 10px;
  height: 58px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  animation: ${spin} 2s linear infinite;
`;

const Button = styled.button`
  width: 80px;
  font-weight: 300;
  padding: 1rem;
  outline: none;
  border: none;
  background-color: var(--blue);
  color: white;
  height: 58px;
  border-radius: 3px;
`

const PromoCode = () => {
  const [promoCode, setPromoCode] = useState('')
  const [checking, setChecking] = useState(false)
  const [valid, setValid] = useState(-1)
  const [message, setMessage] = useState('')

  const applyHandler = (e) => {
    setChecking(true)
    fetch('payment/promo-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ promoCode }),
    })
    .then(res => {
      if(res.status == 200)
        setValid(1);
      else
        setValid(0);
      setChecking(false);
      return res.json()
    })
    .then(data => {
      setMessage(data.message);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <Wrapper>
      <Form>
        <PromoContainer>
          <PromoFormContainer>
            <FDTextField
              fullWidth
              name="promoCode"
              autoComplete=""
              label="PromoCode"
              placeholder="PromoCode"
              type="text"
              variant="filled"
              style={{ marginTop: 8, flexGrow: 1, paddingRight: 5 }}
              onChange={(e) => setPromoCode(e.target.value)}
              value={promoCode}
            />
            {checking ? (
              <Button
                onClick={applyHandler}
                style={{ marginTop: 8 }}>
                <Loader />
              </Button>
            ) : (
              <Button
                onClick={applyHandler}
                style={{ marginTop: 8, cursor: 'pointer' }}>
                Apply
              </Button>
            )}
          </PromoFormContainer>
          {valid == 1 ? (
            <SuccessMessage>
              <span>{message}</span>
            </SuccessMessage>
          ) : ''}
          {valid == 0 ? (
            <ErrorMessage>
              <span>{message}</span>
            </ErrorMessage>
          ) : ''}
        </PromoContainer>
      </Form>
    </Wrapper>
  )
}
export default PromoCode
