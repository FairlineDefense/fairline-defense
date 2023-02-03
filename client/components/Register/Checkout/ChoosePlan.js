import React from 'react'
import css from '../register.css'
import styled from 'styled-components'
import RegisterHeader from '../RegisterHeader'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  position: relative;

  @media (max-width: 800px) {
    text-align: center;
    padding: 1rem 1rem 0rem 1rem;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 4rem;
  }
`
const Button = styled.button`
  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;
  background: transparent;
  color: #fff;
  height: 12rem;
  width: 18rem;
  margin: 2rem 1rem 2rem 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover {
    background: rgba(0, 171, 224, 0.2);
    border-color: var(--blue);
  }

  &:disabled {
    background: rgba(0, 171, 224, 0.2);
    border-color: var(--blue);
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    margin: 0.5rem;
    padding: 0.5rem;
  }
`
const Price = styled.p`
  font-size: 40px;
  color: var(--blue);
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 0;
  }
`
const Term = styled.p`
  font-size: 22px;
  font-weight: 200;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 800px) {
    display: none;
  }
`
const Billing = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
const H1 = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 2rem;
`
const Blue = styled.button`
  font-size: 20px;
  cursor: pointer;
  text-decoration: underline;
  font-weight: inherit;
  color: #00abe0;
  background: transparent;
  outline: none;
  border: none;
`
const ContinueButton = styled.button`
  background-color: var(--blue);
  color: #fff;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 100;
  margin: 2rem;
  outline: none;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-color: #2a4c78;
    color: #5d789a;
  }
`
const ChoosePlan = ({
  order: {protectionType, priceId},
  changeHandler,
  setStep
}) => {
  const oppositeProtectionTypeString =
    protectionType === 'armedCitizen' ? 'Armed Professional' : 'Armed Citizen'
  const protectionTypeString =
    protectionType === 'armedCitizen' ? 'Armed Citizen' : 'Armed Professional'

  const prices = {
    armedCitizenMonth: '$19.99',
    armedCitizenYear: '$199',
    armedProfessionalMonth: '$29.99',
    armedProfessionalYear: '$299'
  }
  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <H1>Select your plan for {protectionTypeString}</H1>
        <Blue onClick={() => setStep('ChooseProtection')}>
          Switch to {oppositeProtectionTypeString}
        </Blue>
        <ButtonWrapper>
          <Button
            onClick={e => changeHandler(e)}
            value={`${protectionType}Month`}
            name="priceId"
            disabled={priceId === `${protectionType}Month`}
          >
            <Price>{prices[`${protectionType}Month`]}</Price>
            <Term>Per Month</Term>
            <Billing>Billed Monthly</Billing>
          </Button>
          <Button
            onClick={e => changeHandler(e)}
            value={`${protectionType}Year`}
            name="priceId"
            disabled={priceId === `${protectionType}Year`}
          >
            <Price>{prices[`${protectionType}Year`]}</Price>
            <Term>Per Year</Term>
            <Billing>Billed Annually</Billing>
          </Button>
        </ButtonWrapper>
        <ContinueButton
          onClick={() => setStep('BillingAddress')}
          disabled={!priceId.length}
        >
          Continue
        </ContinueButton>
      </Wrapper>
    </div>
  )
}
export default ChoosePlan
