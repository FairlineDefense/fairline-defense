import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: 673px;
  background-image: url('./images/AdobeStock_347004185 1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 800px) {
    height: auto;
    background-size: 220% auto;
    padding: 22rem 0rem 0rem 1rem;
    background-position: 5% bottom;
    overflow: hidden;
  }
`
const Wrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Header = styled.div`
  font-size: 35px;
  font-weight: 600;
  line-height: 45px;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 38px;
    width: 100%;
    text-align: center;
  }
`
const Svg = styled.svg`
  position: absolute;
  right: -50px;
  margin-top: 5rem;
  width: 506px;
  height: 530px;

  @media (max-width: 800px) {
    margin-top: 5rem;
    height: auto;
    right: 50px;
  }
`
export default function SecurityBePrepared() {
  return (
    <>
      <Svg viewBox="0 0 506 530" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_673_27)">
          <path
            d="M31.2033 68.4848L0 187.72L474.797 119.38L506 0L31.2033 68.4848Z"
            fill="#B32D2D"
            fill-opacity="0.2"
          />
          <path
            d="M31.2033 239.336L0 358.716L474.797 290.231L506 170.996L31.2033 239.336Z"
            fill="#B32D2D"
            fill-opacity="0.2"
          />
          <path
            d="M31.2033 410.764L0 530L194.81 501.885L226.013 382.649L31.2033 410.764Z"
            fill="#B32D2D"
            fill-opacity="0.2"
          />
        </g>
        <defs>
          <clipPath id="clip0_673_27">
            <rect width="506" height="530" fill="white" />
          </clipPath>
        </defs>
      </Svg>
      <Section>
        <Wrapper>
          <Header>No one can predict when something will happen.</Header>
          <Header>Be prepared. Fairline Defense has a plan.</Header>
        </Wrapper>
      </Section>
    </>
  )
}
