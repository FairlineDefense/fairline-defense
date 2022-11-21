import React from 'react'
import styled from 'styled-components'
import {useEffect, useState} from 'react'
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const InformationWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`
const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  color: var(--blueblack);

  header {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 0.25rem;
  }
  small {
    font-weight: 200;
    font-size: 12px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
`
const BottomWrapper = styled.div`
  width: 100%;
  // background-color: pink;
  display: block;
  border-top: 1px solid var(--lightgray);
  padding: 2rem 0rem 2rem 0rem;
`
const Button = styled.button`
  color: var(--blueblack);
  width: 200px;
  border-color: var(--blueblack);
  border: 1px solid;
  border-radius: 5px;
  padding: 0.75rem;
  background: transparent;
  outline: none;
  margin: 0.5rem 0rem 0.5rem 0rem;
  font-size: 18px;
  font-weight: 200;
  cursor: pointer;
`
const CyanButton = styled.button`
  color: #fff;
  width: 200px;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  background: var(--cyan);
  outline: none;
  margin: 0.5rem 0rem 0.5rem 0rem;
  font-size: 18px;
  font-weight: 200;
  cursor: pointer;
`
const Link = styled.span`
  margin-top: 0.5rem;
  a {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    color: var(--cyan);
  }
`
export default function MembershipAndBilling(props) {
  let {user, setState} = props
  let [portalUrl, setPortalUrl] = useState('')

  const clickHandler = async e => {
    e.preventDefault()
    if (e.target.value === 'View Card') {
      setState('ViewCard')
    }
    if (e.target.value === 'addASpouse') setState('AddASpouse')
  }

  const getPortalUrl = async () => {
    const res = await fetch('/api/users/create-customer-portal-session', {
      method: 'GET',
      headers: {'Content-type': 'application/json'}
    })
    const {sessionUrl: sessionUrl} = await res.json()
    setPortalUrl(sessionUrl)
  }

  useEffect(() => {
    getPortalUrl()
  }, [])

  return (
    <>
      <Wrapper>
        <InformationWrapper>
          <InformationBlock>
            <header>Member</header>
            <small>{`${user.firstName} ${user.lastName}`}</small>
          </InformationBlock>
          <InformationBlock>
            <header>Membership Number</header>
            <small># {user.membershipNumber}</small>
            <Link>
              <a href={portalUrl}>Edit Membership</a>
            </Link>
          </InformationBlock>
          <InformationBlock>
            <header>Auto Renew</header>
            <small>{user.periodEnd}</small>
          </InformationBlock>
          <InformationBlock>
            <header>Credit Card Billed for Membership</header>
            <small>
              {user.brand} ending in {user.last4}
            </small>
            <Link>
              <a href={portalUrl}>Update Card</a>
            </Link>
          </InformationBlock>
        </InformationWrapper>

        <ButtonWrapper>
          <Button onClick={e => clickHandler(e)}>View Card</Button>
          <CyanButton onClick={e => clickHandler(e)} value="addASpouse">
            Add a Spouse
          </CyanButton>
        </ButtonWrapper>

        <BottomWrapper>
          <InformationBlock>
            <header>Membership Documents</header>
            <small>
              Fairline MEMBERSHIP AGREEMENT AND SELF-DEFENSE LIABILITY POLICY
            </small>
            <Link>
              <a href={portalUrl}>View Documents</a>
            </Link>
          </InformationBlock>
        </BottomWrapper>

        <BottomWrapper>
          <InformationBlock>
            <header>Cancellation</header>
            <small>Active Membership: Billed {user.interval}ly</small>
            <Link>
              <a href={portalUrl}>Cancel Membership</a>
            </Link>
          </InformationBlock>
        </BottomWrapper>
      </Wrapper>
    </>
  )
}
