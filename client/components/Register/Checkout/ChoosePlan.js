import React from 'react'
import css from '../register.css'
import styled from 'styled-components'
import RegisterHeader from '../RegisterHeader'

const Gradient = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);
  color: #fff;
  overflow-x: hidden;

  a {
    color: var(--blue);
  }

  a:visited {
    color: var(--blue);
  }

  a:hover {
    color: var(--blue);
  }
`
const BackgroundImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('./images/darkblueFlogo.png');
  background-repeat: no-repeat;
  background-position: 0px 30px;
  background-size: 37%;

  @media (max-width: 1800px) {
    background-size: 700px;
  }

  @media (max-width: 800px) {
    background-image: none;
  }
`
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  margin-top: -40px;

  @media (max-width: 800px) {
    text-align: center;
    padding: 1rem 1rem 0rem 1rem;
    margin-top: 0px !important;
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
  outline: none;
  background: transparent;
  border: 2px solid #5D789A;
  border-radius: 10px;
  color: #5D789A;
  height: 180px;
  min-width: 240px;
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
    border: 2px solid #00ABE0;
    color: #fff;
  }

  &:disabled {
    background: rgba(0, 171, 224, 0.2);
    border: 2px solid #00ABE0;
    color: #fff;
  }

  @media (max-width: 800px) {
    height: auto;
    width: 100%;
    margin: 0.5rem;
    padding: 0.5rem;
  }
`
const Price = styled.p`
  font-size: 50px;
  text-align: center;
  font-weight: 600;
  font-family: Eina;

  span{
    font-size: 25px;
  }

  @media (max-width: 800px) {
    margin-bottom: 0;
  }
`
const Term = styled.p`
  font-size: 22px;
  font-weight: 200;
  text-align: center;

  @media (max-width: 800px) {
    display: none;
  }
`
const Billing = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-top: 25px;
`
const H3 = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
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
  margin-bottom: 20px;
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
  setStep,
}) => {
  const oppositeProtectionTypeString =
    protectionType === 'armedCitizen' ? 'Armed Professional' : 'Armed Citizen'
  const protectionTypeString =
    protectionType === 'armedCitizen' ? 'Armed Citizen' : 'Armed Professional'

  const prices = {
    armedCitizenMonth: '$19.99',
    armedCitizenYear: '$199',
    armedProfessionalMonth: '$29.99',
    armedProfessionalYear: '$299',
  }
  return (
    <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <Wrapper>
          <H3 style={{textAlign: 'center'}}>Select your plan for <br/>{protectionTypeString}</H3>
          <Blue onClick={() => setStep('ChooseProtection')}>
            Switch to {oppositeProtectionTypeString}
          </Blue>
          <ButtonWrapper>
            <Button
              onClick={(e) => changeHandler(e)}
              value={`${protectionType}Month`}
              name="priceId"
              disabled={priceId === `${protectionType}Month`}
            >
              <Price>
                {prices[`${protectionType}Month`].split(".")[0]}
                <span>{"." + prices[`${protectionType}Month`].split(".")[1]}</span>
              </Price>
              <Term>Per Month</Term>
              <Billing>Billed Monthly</Billing>
            </Button>
            <Button
              onClick={(e) => changeHandler(e)}
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
            onClick={() => setStep('PaymentInfo')}
            disabled={!priceId.length}
          >
            Continue
          </ContinueButton>
        </Wrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default ChoosePlan
