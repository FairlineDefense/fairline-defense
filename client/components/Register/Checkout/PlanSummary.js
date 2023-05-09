import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1rem 0rem 1rem 0rem;
`
const Header = styled.h3`
  font-size: 32px;
  font-weight: 300;
  margin: 0.5rem 0rem 1rem 0rem;
  width: 100%;
  text-align: center;

  @media (max-width: 800px) {
    margin: 0.5rem;
    font-size: 22px;
    font-weight: 500;
  }
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const SpaceBetweenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  padding: 0.2rem 0rem 0.4rem 0rem;

  @media (max-width: 800px) {
    width: 90%;
  }
`
const Bold = styled.div`
  font-weight: 500;
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
const MobileWrapper = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div:nth-child(3) {
    border-bottom: 1px solid #fff;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`
const DesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    display: none;
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
    display: none;
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
  height: 115px;
  width: 200px;
  margin: 1rem;
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
  font-size: 40px;
  margin-bottom: 0.2rem;
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 0;
  }
`
const Billing = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
const PlanSummary = ({
  price,
  priceId,
  billingInterval,
  protectionTypeString,
  protectionType,
  setStep,
  changeHandler,
}) => {
  const prices = {
    armedCitizenMonth: '$19.99',
    armedCitizenYear: '$199',
    armedProfessionalMonth: '$29.99',
    armedProfessionalYear: '$299',
  }
  return (
    <Wrapper>
      <MobileWrapper>
        <Header>Plan Summary</Header>

        <SpaceBetweenWrapper>
          <Bold>{protectionTypeString}</Bold>
          <Bold>{price}</Bold>
        </SpaceBetweenWrapper>

        <SpaceBetweenWrapper>
          <div>Billed {billingInterval}</div>
          <div>
            <Blue onClick={() => setStep('ChoosePlan')}>Change</Blue>
          </div>
        </SpaceBetweenWrapper>
      </MobileWrapper>

      <DesktopWrapper>
        <Header>{protectionTypeString}</Header>
        <ButtonWrapper>
          <Button
            onClick={(e) => changeHandler(e)}
            value={`${protectionType}Month`}
            name="priceId"
            disabled={priceId === `${protectionType}Month`}
          >
            <Price>{prices[`${protectionType}Month`]}</Price>
            <Billing>Billed Monthly</Billing>
          </Button>
          <Button
            onClick={(e) => changeHandler(e)}
            value={`${protectionType}Year`}
            name="priceId"
            disabled={priceId === `${protectionType}Year`}
          >
            <Price>{prices[`${protectionType}Year`]}</Price>
            <Billing>Billed Annually</Billing>
          </Button>
        </ButtonWrapper>
      </DesktopWrapper>
    </Wrapper>
  )
}
export default PlanSummary
