import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from './register.css'
import styled from 'styled-components'
import {useState} from 'react'
const ChoosePlan = props => {
  const user = useSelector(state => state.user)
  const {name, displayName, error} = props
  const dispatch = useDispatch()

  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    align-items: center;
    justify-content: space-around;
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

    &:hover {
      background: rgba(0, 171, 224, 0.2);
      border-color: var(--blue);
    }
  `
  const Price = styled.p`
    font-size: 40px;
    color: var(--blue);
    margin-bottom: 1rem;
    text-align: center;
  `
  const Term = styled.p`
    font-size: 22px;
    font-weight: 200;
    margin-bottom: 3rem;
    text-align: center;
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
  `
  const H2 = styled.h1`
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 2rem;
  `
  const H3 = styled.h1`
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 2rem;
  `
  const Blue = styled.span`
    font-size: inherit;
    font-weight: inherit;
    color: var(--blue);
  `

  let [plan, setPlan] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  const clickHandler = e => {
    e.preventDefault()
    setPlan(e.target.value)
  }
  return (
    <div className="auth">
      <svg />
      <svg />
      <svg />
      <header className="authHeader">Fairline</header>
      <Wrapper>
        <H1>Congratulations!</H1>
        <H2>Your account has been created succsefully!</H2>
        <H1>Start Your Protection</H1>
        <ButtonWrapper>
          <Button onClick={e => clickHandler} value="19000">
            <Price>$19</Price>
            <Term>Per Month</Term>
            <Billing>Billed Monthly</Billing>
          </Button>
          <Button onClick={e => clickHandler} value="199000">
            <Price>$199</Price>
            <Term>Per Year</Term>
            <Billing>Billed Annually</Billing>
          </Button>
        </ButtonWrapper>
        <H2>You are one step away from getting protection you need</H2>
        <H2>
          Only for <Blue>$19.99/Mo</Blue> or <Blue>$199/Yr ($40 Savings)</Blue>
        </H2>
      </Wrapper>
    </div>
  )
}
export default ChoosePlan
