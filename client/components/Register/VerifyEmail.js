import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import RegisterHeader from './RegisterHeader'

const VerifyEmail = () => {
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
    const Heading = styled.span`
      font-size: 32px;
      font-weight: 300;
      margin-bottom: 1rem;
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
    margin: 1rem;
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
        <RegisterHeader />
        <Wrapper>
          <Heading>Verify Your Email</Heading>
            <CenteredWrapper>
            <img src="./images/confirmphone.png" />
            <SubHeading>
              A confirmation link has been sent to
            </SubHeading>
            <SubHeading>
              <SemiBold>
                {user.email}
              </SemiBold>
              </SubHeading>
            </CenteredWrapper>
          <CenteredWrapper>
            <SubHeading>
            In order to proceed, please check your email and click the confirmation link.
          </SubHeading>
            <Button onClick={(e)=>clickHandler(e)} disabled={user.emailVerified}>Continue</Button>
            </CenteredWrapper>
        </Wrapper>
      </div>
  )
}
export default VerifyEmail
