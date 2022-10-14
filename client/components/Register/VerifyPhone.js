import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EmailSVG from './EmailSVG'
import styled from 'styled-components'
import history from '../../history'

const VerifyPhone = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const clickHandler = (e) => {
    e.preventDefault(e)
    // if(!user.emailVerifed){
    //   return
    // }
    history.push('/home')
  }

    const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: space-between;
      padding: 4rem;
    `
    const CenteredWrapper = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 3rem;
      width: 340px;
      text-align: center;
    `
    const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 340px;
    `
    const Input = styled.input`
    border-radius: 5px;
    text-align: center;
    width: 2.75rem;
    height: 4rem;
    outline: none;
    border: none;
    background-color: #CCC;
    font-size: 32px;

    &:content {
      background-color: #FFF;
    }
    &:active {
      background-color: #FFF;
    }
    `
    const Heading = styled.span`
      font-size: 32px;
      font-weight: 300;
      margin-bottom: 2rem;
    `
    const SubHeading = styled.span`
      font-size: 16px;
      font-weight: 200;
    `
    const SemiBold = styled.span`
    font-size: inherit;
    font-weight: 500;
    color: inherit;
    `
    const Button = styled.button`
    background-color: var(--blue);
    color: #FFF;
    border-radius: 40px;
    width: 340px;
    padding: 1rem 2rem 1rem 2rem;
    font-size: 20px;
    font-weight: 100;
    margin: 2rem;
    outline: none;
    border: none;
    cursor: pointer;

    &::disabled {
    background-color: #2A4C78;
  }
    `

    return (
      <div className="auth">
        <svg />
        <svg />
        <svg />
        <header className="authHeader">
          <img src="./images/fdlogo.png" />
        </header>
        <Wrapper>
          <Heading>Verify Your Phone Number</Heading>
            <CenteredWrapper>
              <EmailSVG />
              Phone SVG
            <SubHeading>
            A verification code has been sent to
            </SubHeading>
            <SubHeading>
                {user.phone}
              </SubHeading>
            </CenteredWrapper>
              <Form>
                <Input name="0" maxLength={1}></Input>
                <Input name="1" maxLength={1}></Input>
                <Input name="2" maxLength={1}></Input>
                <Input name="3" maxLength={1}></Input>
                <Input name="4" maxLength={1}></Input>
                <Input name="5" maxLength={1}></Input>
              </Form>
          <CenteredWrapper>
            <SubHeading>
            Please enter the verification code received by SMS.
          </SubHeading>
            <Button onClick={(e)=>clickHandler(e)} disabled={user.phoneVerified}>Continue</Button>
            </CenteredWrapper>
        </Wrapper>
      </div>
  )
}
export default VerifyPhone
