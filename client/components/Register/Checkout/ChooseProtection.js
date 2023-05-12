import React from 'react'
import css from '../register.css'
import styled from 'styled-components'
import RegisterHeader from '../RegisterHeader'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {me} from '../../../store/user'
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
  height: 100%;
  width: 100%;
  background-image: url('./images/darkblueFlogo.png');
  background-repeat: no-repeat;
  background-position: 0px 30px;

  @media (max-width: 800px) {
    background-image: none;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;

  @media (max-width: 800px) {
    text-align: center;
    padding: 1rem 1rem 0rem 1rem;
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
  }
`
const Button = styled.button`
  outline: none;
  background: transparent;
  border: 2px solid #5D789A;
  border-radius: 10px;
  color: #5D789A;
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
  font-size: 28px;
  line-height: 34px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 24px;
    line-height: 28px;
  }
`
const Term = styled.p`
  font-size: 22px;
  font-weight: 200;
  margin-bottom: 1rem;
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
const SemiBold = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    margin-bottom: 0.5rem;
    font-size: 28px;
  }
`

const Subheader = styled.h4`
  font-size: 24px;
  margin: 1rem 0rem 2rem 0rem;
  text-align: center;
  width: 550px;
  font-weight: 400;

  p {
    margin-bottom: 1rem;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 0;
    font-size: 22px;
  }
`
const Blue = styled.span`
  font-size: 24px;
  color: #00abe0;

  @media (max-width: 800px) {
    font-size: 22px;
  }
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

  @media (max-width: 800px) {
    margin: 1rem;
  }
`

const ChooseProtection = ({
  order: {protectionType},
  changeHandler,
  setStep,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    const email = params.get('to')

    // Twilio functions do not accept multipart/form-data
    const data = new URLSearchParams()
    data.append('email', email)
    data.append('code', token)
    data.append('channel', 'email')
    console.log('data', data)
    token &&
      fetch('twilio/check-verify', {
        method: 'POST',
        body: data,
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json.success)
        })
        .then(() => {
          dispatch(me())
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])
  return (
    <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <Wrapper>
          <SemiBold>Congratulations!</SemiBold>
          <Subheader>
            <p>You are one step away from getting the protection you need.</p>
            <p>
              Starting from <Blue>$19.99/Mo</Blue> or <Blue>$199/Yr (Save $40)</Blue>
            </p>
          </Subheader>
          <SemiBold>Select Your Protection</SemiBold>
          <ButtonWrapper>
            <Button
              onClick={(e) => changeHandler(e)}
              value="armedCitizen"
              name="protectionType"
              disabled={protectionType === 'armedCitizen'}
            >
              <Price>Armed Citizen</Price>
            </Button>
            <Button
              onClick={(e) => changeHandler(e)}
              value="armedProfessional"
              name="protectionType"
              disabled={protectionType === 'armedProfessional'}
            >
              <Price>Armed Professional</Price>
            </Button>
          </ButtonWrapper>
          <ContinueButton
            onClick={() => setStep('ChoosePlan')}
            disabled={!protectionType.length}
          >
            Continue
          </ContinueButton>
        </Wrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default ChooseProtection
