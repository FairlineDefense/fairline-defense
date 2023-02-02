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
const Header = styled.h1`
  font-size: 32px;
  font-weight: 300;
  margin: 0.5rem 0rem 2rem 0rem;

  @media(max-width: 800px) {
    margin: .5rem;
    font-size: 22px;
  }
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const SpaceBetweenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  padding: .2rem 0rem .2rem 0rem;

  @media (max-width: 800px) {
    width: 90%;
  }
`
const HR = styled.div`
  height: 1px;
  color: #fff;
  display: block;
  width: 800px;

  @media (max-width: 800px) {
    width: 90%;
  }
`
const Blue = styled.button`
font-size: 20px;
cursor: pointer;
text-decoration: underline;
font-weight: inherit;
color: #00ABE0;
background: transparent;
outline: none;
border: none;
`

const PlanSummary = ({price, billingInterval, protectionTypeString, setStep}) => {

  return (
      <Wrapper>
      <CenteredWrapper>
          <Header>Plan Summary</Header>
        </CenteredWrapper>

      <CenteredWrapper>
        <SpaceBetweenWrapper>
        <div>{protectionTypeString}</div>
        <div>{price}</div>
        </SpaceBetweenWrapper>

        <SpaceBetweenWrapper>
         <div>Billed {billingInterval}</div>
         <div>
         <Blue onClick={()=>setStep('ChoosePlan')}>Change</Blue>
         </div>
         </SpaceBetweenWrapper>
        </CenteredWrapper>
        <HR />
        </Wrapper>
  )
}
export default PlanSummary
