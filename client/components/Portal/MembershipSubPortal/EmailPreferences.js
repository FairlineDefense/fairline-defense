import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import {update} from '../../../store/user'

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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #aab1b9;
`
const InformationBlock = styled.div`
display: flex;
flex-direction: column;

heading {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1rem;
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
const Button = styled.button`
  color: var(--blueblack);
  width: 200px;
  border-color: var(--blueblack);
  border: 1px solid;
  border-radius: 5px;
  padding: 0.75rem;
  background: transparent;
  outline: none;
  margin: 0.5rem 1rem 0.5rem 0rem;
  font-size: 18px;
  font-weight: 200;
  cursor: pointer;
`
const Link = styled.span`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    color: var(--cyan);
    cursor: pointer;
    margin-right: 4rem;
`
export default function EmailPreferences(props) {
  const {user, setState} = props
  const dispatch = useDispatch()

  let [form, setForm] = useState({
    emailReminders: user.emailReminders,
    emailInsider: user.emailInsider,
    emailNews: user.emailNews,
    emailPromotions: user.emailPromotions,
    id: user.id
  })

  const changeHandler = (e) => {
    e.preventDefault()
    setForm({...form, [e.target.name]: !form[e.target.name]})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(update(form))
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header>
        <InformationBlock>
        <heading>Email</heading>
        <small>{`${user.email}`}</small>
        </InformationBlock>
        <Link onClick={() => setState('EditPersonalInformation')}>Update</Link>
      </Header>
      <Wrapper>
        <Text>
        To select your email preferences or unsubscribe from all publications, please verify your email address above and update your preferences below:
        </Text>
        <Preferences>
          <ul>
            <li>
              <Checkbox
                color='primary'
                onChange={(e) => changeHandler(e)}
                name='emailReminders'
                checked={form.emailReminders}
              />
              Membership & Subscription Reminders
            </li>
            <li>
              <Checkbox
                color='primary'
                onChange={(e) => changeHandler(e)}
                 name='emailInsider'
                 checked={form.emailInsider} />
              Insider Deals & Self-Defense Products
            </li>
            <li>
              <Checkbox
                color='primary'
                onChange={(e) => changeHandler(e)}
                name='emailNews'
                checked={form.emailNews} />
              News Feed
            </li>
            <li>
              <Checkbox
                color='primary'
                onChange={(e) => changeHandler(e)}
                name='emailPromotions'
                checked={form.emailPromotions}
              />
              Promotions
            </li>
            <li>
            <Button type="submit" onClick={(e) => submitHandler(e)}>Save Changes</Button>
            </li>
          </ul>
        </Preferences>
      </Wrapper>
      </ThemeProvider>
    </>
  )
}
