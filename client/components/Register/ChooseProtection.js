import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from './register.css'
import styled from 'styled-components'
import {useState} from 'react'
import ChoosePlan from './ChoosePlan'
import ChoosePlanArmedProfessional from './ChoosePlanArmedProfessional'
import RegisterHeader from './RegisterHeader'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    position: relative;

    @media(max-width: 800px) {
      text-align: center;
      padding: 4rem 1rem 0rem 1rem;
    }
  `
  const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    align-items: center;
    justify-content: space-around;
    position: relative;

    @media(max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
  `
  const Button = styled.button`
    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;
    background: transparent;
    color: #fff;
    height: 140px;
    width: 240px;
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

    @media(max-width: 800px) {
      height: auto;
      width: 100%;
      margin: .5rem;
      padding: .5rem;
    }
  `
  const Price = styled.p`
    font-size: 28px;
    line-height: 34px;
    color: var(--blue);
    text-align: center;
    
    @media(max-width: 800px) { 
      font-size: 24px;
      line-height: 28px;
    }
  `
  const Term = styled.p`
    font-size: 22px;
    font-weight: 200;
    margin-bottom: 1rem;
    text-align: center;

    @media(max-width: 800px) {
      margin-bottom: 0;
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
    margin-bottom: 1rem;

    @media(max-width: 800px) {
      margin-bottom: 1rem;
    }
  `
  const Subheader = styled.h2`
    font-size: 24px;
    margin: 1rem 0rem 2rem 0rem;
    text-align: center;
    width: 500px;

    p {
        margin-bottom: 1rem;
    }
    @media(max-width: 800px) { 
      width: 100%;
    }
  `
  const Blue = styled.span`
    font-size: 24px;
    color: #00ABE0;
  `

const ChooseProtection = props => {
  const user = useSelector(state => state.user)
  const {name, displayName, error} = props
  const dispatch = useDispatch()
  
  let [protectionType, setProtectionType] = useState('none')

  const protectionHandler = e => {
    e.preventDefault()
    setProtectionType(e.currentTarget.value)
  }

  if (protectionType === 'armedProfessional') {
    return <ChoosePlanArmedProfessional protectionType={protectionType} protectionHandler={protectionHandler} />
  }
  if (protectionType === 'armedCitizen') {
    return <ChoosePlan protectionType={protectionType} protectionHandler={protectionHandler} />
  }

  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <H1>Congratulations!</H1>
        <Subheader><p>You are one step away from getting the protection you need.</p>
        <p>Starting from <Blue>$19.99/Mo</Blue> or <Blue>$199/Yr</Blue></p></Subheader>
        <H1>Select Your Protection</H1>
        <ButtonWrapper>
          <Button onClick={e => protectionHandler(e)} value="armedCitizen">
          <Term>I am</Term>
            <Price>Armed Citizen</Price>
          </Button>
          <Button onClick={e => protectionHandler(e)} value="armedProfessional">
          <Term>I am</Term>
            <Price>Armed Professional</Price>
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </div>
  )
}
export default ChooseProtection
