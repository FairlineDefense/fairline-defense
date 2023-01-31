import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from './register.css'
import styled from 'styled-components'
import {useState} from 'react'
import Payment from './Payment'
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

@media(max-width: 800px) {
  width: 100%;
  height: auto;
  margin: .5rem;
  padding: .5rem;
}
`
const Price = styled.p`
font-size: 40px;
color: var(--blue);
margin-bottom: 1rem;
text-align: center;

@media(max-width: 800px) {
  margin-bottom: 0;
}
`
const Term = styled.p`
font-size: 22px;
font-weight: 200;
margin-bottom: 3rem;
text-align: center;

@media(max-width: 800px) {
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

@media(max-width: 800px) {
  margin-bottom: 1rem;
}
`
const H2 = styled.h2`
font-size: 24px;
font-weight: 200;
margin-bottom: 2rem;
`
const Blue = styled.span`
font-size: 20px;
cursor: pointer;
text-decoration: underline;
font-weight: inherit;
color: #00ABE0;
`

const ChoosePlanArmedProfessional = props => {
  const user = useSelector(state => state.user)
  const {name, displayName, error, protectionHandler, setPrice, setInterval, interval, price} = props
  const dispatch = useDispatch()

  let [priceId, setPriceId] = useState('none')

  const clickHandler = e => {
    e.preventDefault()
    setPriceId(e.currentTarget.value)

    if(e.currentTarget.value === 'professional_month') {
      setInterval('monthly')
      setPrice('$19.99')
    }
    if(e.currentTarget.value === 'professional_year') {
      setInterval('annually')
      setPrice('$199')
    }
  }

  const protectionClickHandler = (e) => {
    e.preventDefault()
    setPriceId('none')
    protectionHandler(e)
  }

  if (priceId !== 'none') {
    return <Payment priceId={priceId} clickHandler={clickHandler} price={price} protectionTypeString={protectionTypeString} interval={interval} />
  }

  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <H1>Select your plan for Armed Professional</H1>
        <Blue onClick={(e)=> protectionClickHandler(e)} value="armedCitizen">Switch to Armed Citizen</Blue>
        <ButtonWrapper>
          <Button onClick={e => clickHandler(e)} value="professional_month">
            <Price>$29.99</Price>
            <Term>Per Month</Term>
            <Billing>Billed Monthly</Billing>
          </Button>
          <Button onClick={e => clickHandler(e)} value="professional_year">
            <Price>$299</Price>
            <Term>Per Year</Term>
            <Billing>Billed Annually</Billing>
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </div>
  )
}
export default ChoosePlanArmedProfessional
