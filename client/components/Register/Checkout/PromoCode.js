import React from 'react'
import styled, { keyframes } from 'styled-components';
import FDTextField from '../../FDTextField'
import { TextField, ThemeProvider } from '@material-ui/core'
import theme from '../../theme'
import { useState } from 'react'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
  margin-bottom: 25px;
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
const TextFieldWrapper = styled.div`
  width: calc(50% - 10px);
  margin-top: 15px;

  @media (max-width: 768px) {
    width: 100%;
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
  color: #00ABE0;
  font-weight: 600;
  font-family: Eina;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 10px;
  height: 58px;
  font-size: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.div`
  width: 50%;
  padding: 1rem;
  color: #F44336;
  font-weight: 600;
  font-family: Eina;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 10px;
  height: 58px;
  font-size: 20px;

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
  margin: auto;
  animation: ${spin} 2s linear infinite;
`;

const Button = styled.button`
  width: calc(25% - 15px);
  font-weight: 300;
  padding: 1rem;
  outline: none;
  border: none;
  background-color: var(--blue);
  color: white;
  height: 58px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 15px;
  margin-left: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`

const PromoCode = ({ setValidCoupon, setValidDiscount }) => {
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
        if (res.status == 200) {
          setValid(1);
        }
        else
          setValid(0);
        setChecking(false);
        console.log(res);
        return res.json()
      })
      .then(data => {
        console.log(data);
        setValidCoupon(data.coupon);
        setValidDiscount(data.amount);
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
          <TextFieldWrapper>
            <FDTextField
              fullWidth
              name="promoCode"
              autoComplete=""
              label="PromoCode"
              placeholder="PromoCode"
              type="text"
              variant="filled"
              onChange={(e) => setPromoCode(e.target.value)}
              value={promoCode}
            />
          </TextFieldWrapper>
          {checking ? (
            <>
              <Button
                onClick={applyHandler}
                style={{ cursor: 'none' }}
              >
                <Loader />
              </Button>
            </>
          ) : (
            <>
              {valid == 1 ? (
                <>
                  <SuccessMessage>
                    <span>{message}</span>
                  </SuccessMessage>
                </>
              ) : ''}
              {valid == 0 ? (
                <>
                  <Button
                    onClick={applyHandler}>
                    Apply
                  </Button>
                </>
              ) : ''}
              {valid == -1 ? (
                <>
                  <Button
                    onClick={applyHandler}>
                    Apply
                  </Button>
                </>
              ) : ''}
            </>
          )}
        </PromoContainer>
      </Form>
    </Wrapper>
  )
}
export default PromoCode
