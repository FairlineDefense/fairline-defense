import React from 'react'
import styled from 'styled-components'
import CanvasImage from './CanvasImage';
import CanvasDownload from './CanvasDownload';
import user from '../../store/user';
export default function Card({user}) {
  const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    min-height: 80vh;
  `
  const Container = styled.div`
    margin: 2rem;
    background-color: var(--bgblue);
    border-radius: 20px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 420px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      height: 80vh;
      margin: 0.5rem;
    }
  `
  const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-end;
    img {
      width: auto;
      height: 284px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
      justify-content: center;
      padding: 1rem 0rem 1rem 0rem;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  `
  const H3 = styled.h3`
    font-size: 42px;
    font-weight: 600;
    color: var(--darkblue);
    margin-bottom: 1.5rem;
    line-height: 42px;
  `

  const Button = styled.button`
    color: var(--primary);
    width: 220px;
    border-color: var(--primary);
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
    width: 220px;
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
  const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-start;
    padding: 2rem;

    @media (max-width: 768px) {
      font-size: 18px;
      width: 100%;
      padding: 0;
    }
  `
  const TextBlock = styled.div`
    display: flex;
    width: 220px;
    flex-direction: column;
    margin: 0.5rem 0 0.5rem 0;
  `
  const Cyan = styled.span`
    font-size: inherit;
    font-weight: 500;
    color: var(--cyan);
  `
  return (
    <Wrapper>
      <Container>
        <Left>
          <CanvasImage firstName={user.firstName} lastName={user.lastName} cardNo={user.membershipNumber}/>
        </Left>
        <Right>
          <H3>Membership Card</H3>
          <CanvasDownload firstName={user.firstName} lastName={user.lastName} cardNo={user.membershipNumber}/>
          <CyanButton>Ship a New Card</CyanButton>
        </Right>
      </Container>
    </Wrapper>
  )
}