import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const InformationWrapper = styled.div`
  width: 80%;
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
    margin-bottom: 0.5rem;
  }
  small {
    font-weight: 200;
    font-size: 12px;
  }
`
const EditWrapper = styled.div`
  width: 20%;
  display: block;
`
const EditButton = styled.button`
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
export default function PersonalInformation(props) {
  let {user, setState} = props
  const clickHandler = e => {
    e.preventDefault()
    setState('EditPersonalInformation')
  }

  return (
    <Wrapper>
      <InformationWrapper>
        <InformationBlock>
          <header>Full Name</header>
          <small>{`${user.firstName} ${user.lastName}`}</small>
        </InformationBlock>
        <InformationBlock>
          <header>Email</header>
          <small>{user.email}</small>
        </InformationBlock>
        <InformationBlock>
          <header>Phone</header>
          <small>{user.phone}</small>
        </InformationBlock>
        <InformationBlock>
          <header>Shipping Address</header>
          <small>
            {`${user.streetAddress}, ${user.city}, ${user.state}, ${
              user.zipCode
            }`}
            {user.line2 && `, ${user.line2}`}
          </small>
        </InformationBlock>
        <InformationBlock>
          <header>Password</header>
          <small>************</small>
        </InformationBlock>
      </InformationWrapper>
      <EditWrapper>
        <EditButton onClick={e => clickHandler(e)}>Edit Profile</EditButton>
      </EditWrapper>
    </Wrapper>
  )
}
