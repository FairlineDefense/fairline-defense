import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EmailSVG from './EmailSVG'

const VerifyEmail = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

    const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    const CenteredWrapper = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `
    const Heading = styled.span`
      font-size: 32px;
      font-weight: 300;
      margin-bottom: 2rem;
    `
    const SubHeading = styled.span`
      font-size: 18px;
      font-weight: 200;
      margin-bottom: 2rem;
    `
    const SemiBold = styled.span`
    font-size: inherit;
    font-weight: 400;
    color: inherit;
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
          <Heading>Verify Your Email</Heading>
          <CenteredWrapper>
            <SubHeading>
              A confirmation link has been sent to
            </SubHeading>
              <SemiBold>
                {user.email}
              </SemiBold>
            </CenteredWrapper>
            <CenteredWrapper><EmailSVG /></CenteredWrapper>
          <SubHeading>
            In order to proceed, please check your email and click the confirmation link.
          </SubHeading>
        </Wrapper>
      </div>
  )
}
export default VerifyEmail
