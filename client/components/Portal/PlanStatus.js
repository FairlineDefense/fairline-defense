import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    height: 70px;
  }
`
const TextBlock = styled.div`
  display: flex;
  width: 260px;
  flex-direction: column;
  margin-bottom: 1rem;

  bold {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  small {
    font-weight: 200;
  }
`
const WarningBlock = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  margin-bottom: 1rem;

  bold {
    color: #d6ae21;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`
const Button = styled.button`
  color: #d6ae21;
  width: 120px;
  border: 1px solid #d6ae21;
  border-radius: 5px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: none;
  outline: none;
  margin: 0.5rem 0rem 0.5rem 0rem;
  font-size: 14px;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    background-color: #d6ae21;
    color: var(--darkblue);
  }
`
const ProgressBarWrapper = styled.div`
  width: 225px;
  height: 225px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
export default function PlanStatus(props) {
  const {user} = props

  if (user.status === 'actionRequired' || user.status === 'incomplete') {
    return (
      <Wrapper>
        <ProgressBarWrapper>
          <CircularProgressbar
            value={100}
            text={`Your account is inactive`}
            styles={buildStyles({
              textColor: '#FFF',
              pathColor: '#D6AE21',
              trailColor: '#FFF',
              textSize: '7px',
              strokeLinecap: 'butt',
            })}
          />
        </ProgressBarWrapper>
        <WarningBlock>
          <bold>Please update your payment method</bold>
          <Link to="/membership/membershipandbilling">
            <Button>Go to billing</Button>
          </Link>
        </WarningBlock>
        <TextBlock>
          <bold>Questions</bold>
          <small>Call 1 833 201 1463</small>
        </TextBlock>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <ProgressBarWrapper>
        <CircularProgressbar
          value={user.percentageLeft}
          text={`${user.daysLeft} days remaining`}
          styles={buildStyles({
            textColor: '#FFF',
            pathColor: '#D6AE21',
            trailColor: '#FFF',
            textSize: '7px',
            strokeLinecap: 'butt',
          })}
        />
      </ProgressBarWrapper>
      <TextBlock>
        <bold>Auto Renew</bold>
        <small>{user.periodEnd}</small>
      </TextBlock>
      <TextBlock>
        <bold>Questions</bold>
        <small>Call 1 833 201 1463</small>
      </TextBlock>
    </Wrapper>
  )
}
