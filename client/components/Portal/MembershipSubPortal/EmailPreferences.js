import React from 'react'
import styled from 'styled-components'
import user from '../../../store/user'
import {useState} from 'react'
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3rem;
  color: var(--darkblue);
`
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 1px solid #aab1b9;

  heading {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: var(--darkblue);
  }
  small {
    font-weight: 200;
    font-size: 16px;
    color: var(--darkblue);
  }
`
const Text = styled.div`
  width: 40%;
  font-size: 14px;
  line-height: 2;
`
const Preferences = styled.div`
  width: 50%;
  font-weight: 500;
  ul {
    list-style: none;
  }

  li {
    margin-bottom: 2rem;
  }

  li input {
    margin-right: 1rem;
  }
`
export default function EmailPreferences(props) {
  const {user} = props
  let [form, setForm] = useState({
    reminders: '',
    deals: '',
    news: '',
    promotion: ''
  })
  return (
    <>
      <Header>
        <heading>Member</heading>
        <small>{`${user.firstName} ${user.lastName}`}</small>
      </Header>
      <Wrapper>
        <Text>
          To select your email preferences or unsubscribe from all publications,
          please verify your email address above and update your preferences
          below:
        </Text>
        <Preferences>
          <ul>
            <li>
              <input
                type="checkbox"
                name={'reminders'}
                value={form.reminders}
              />{' '}
              Membership & Subscription Reminders
            </li>
            <li>
              <input type="checkbox" name={'deals'} value={form.reminders} />{' '}
              Insider Deals & Self-Defense Products
            </li>
            <li>
              <input type="checkbox" name={'news'} value={form.reminders} />{' '}
              News Feed
            </li>
            <li>
              <input
                type="checkbox"
                name={'promotions'}
                value={form.reminders}
              />{' '}
              Promotions
            </li>
          </ul>
        </Preferences>
      </Wrapper>
    </>
  )
}
