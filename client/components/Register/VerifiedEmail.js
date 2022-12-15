import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import RegisterHeader from './RegisterHeader'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 6rem;
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  text-align: center;
  margin-bottom: 2rem;
`
const Heading = styled.span`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 1.5rem;
`
const SubHeading = styled.span`
  font-size: 18px;
  font-weight: 200;
  line-height: 24px;
`
const SemiBold = styled.span`
  font-size: inherit;
  font-weight: 400;
  color: inherit;
`
const Blue = styled.span`
  font-size: inherit;
  font-weight: inherit;
  color: var(--blue);
`
const Button = styled.button`
  background-color: #ff1e3e;
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
`

const VerifiedEmail = () => {
  console.log(document.referrer)
  return (
    <div className="auth">
      <svg className="logo" />
      <svg className="logo" />
      <svg className="logo" />
      <RegisterHeader />
      <Wrapper>
        <CenteredWrapper>
          <SubHeading>
            <SemiBold>Congratulations!</SemiBold>
          </SubHeading>
          <SubHeading>Your account has been successfully created.</SubHeading>
        </CenteredWrapper>
        <CenteredWrapper>
          <SubHeading>
            You are one step away from getting the protection you need.
          </SubHeading>
        </CenteredWrapper>
        <CenteredWrapper>
          <SubHeading>
            Only <Blue>$19.99/Mo</Blue> or <Blue>$199/Yr ($40 Savings)</Blue>
          </SubHeading>
        </CenteredWrapper>
        <CenteredWrapper>
          <Heading>Start your protection</Heading>
          <img src="./images/downarrow.png" />
          <Link to="/home">
            <Button>Get Protected</Button>
          </Link>
        </CenteredWrapper>
      </Wrapper>
    </div>
  )
}
export default VerifiedEmail
