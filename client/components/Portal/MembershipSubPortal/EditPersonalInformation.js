import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {update} from '../../../store/'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`
const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content: flex-start;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const Label = styled.label`
  display: block;
  font-weight: 300;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`
const Input = styled.input`
  padding: 1rem;
  border: 1px solid #aab1b9;
  border-radius: 4px;
  outline: none;
  width: 260px;
  margin-right: 2rem;
  font-size: 16px;
  font-weight: 200;
  display: block;
  color: var(--primary);
`
const City = styled.input`
  padding: 1rem;
  border: 1px solid #aab1b9;
  border-radius: 4px;
  outline: none;
  width: 170px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 200;
  color: var(--primary);
`
const State = styled.select`
  padding: 1rem;
  border: 1px solid #aab1b9;
  border-radius: 4px;
  outline: none;
  width: 80px;
  margin-right: 0rem;
  font-size: 16px;
  font-weight: 200;
  color: var(--primary);
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
const ErrorText = styled.div`
  height: 70px;
  width: 220px;
  margin: 2rem;
  border: 1px solid red;
  border-radius: 5px;
  padding: 1rem;
  background-color: #fff;
  color: inherit;
`
export default function EditPersonalInformation(props) {
  let {user, setState} = props
  const dispatch = useDispatch()
  let [form, setForm] = useState({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    streetAddress: user.streetAddress,
    line2: user.line2,
    city: user.city,
    state: user.state,
    zipCode: user.zipCode,
    //New password:
    password: '',
    repeatNewPassword: ''
  })
  let [errorText, setErrorText] = useState('')

  const changeHandler = e => {
    e.preventDefault()
    setForm({...form, [e.target.name]: e.target.value})
  }
  const cancelHandler = e => {
    e.preventDefault()
    //Insert warning to save or continue
    setState('PersonalInformation')
  }
  const submitHandler = e => {
    e.preventDefault()
    function validateFields() {
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          form.email
        )
      ) {
        return setErrorText('Invalid email address.')
      }
      if (
        !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
          form.phone
        )
      ) {
        return setErrorText('Invalid phone number.')
      }
      if (!/^\d{5}(-\d{4})?$/.test(form.zipCode)) {
        return setErrorText('Invalid zip code.')
      }
      if (form.state === 'state' || form.state === '') {
        return setErrorText('Invalid state.')
      }
      //if password is changed
      if (form.password.length || form.repeatNewPassword.length) {
        if (form.password !== form.repeatNewPassword) {
          return setErrorText('Passwords do not match.')
        }
        if (form.password.length < 8) {
          return setErrorText('Passwords must be min. 8 chars long')
        }
        if (form.password.search(/[a-z]/i) < 0) {
          return setErrorText('Passwords must contain at least one letter')
        }
        if (form.password.search(/[!@#\$%\^\&*\)\(+=._-]/i) < 0) {
          return setErrorText(
            'Passwords must contain at least one special character'
          )
        }
        if (form.password.search(/[0-9]/) < 0) {
          return setErrorText('Passwords must contain at least one number')
        }
        dispatch(update(form))
      } else {
        //if password is not changed, don't send it
        dispatch(
          update({
            id: form.id,
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            streetAddress: form.streetAddress,
            line2: form.line2,
            city: form.city,
            state: form.state,
            zipCode: form.zipCode
          })
        )
      }
    }
    validateFields()
  }

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <InputGroup>
          <span>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={e => changeHandler(e)}
              required
            />
          </span>
          <span>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={e => changeHandler(e)}
              required
            />
          </span>
        </InputGroup>
        <InputGroup>
          <span>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={e => changeHandler(e)}
              required
            />
          </span>
          <span>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={e => changeHandler(e)}
              required
            />
          </span>
        </InputGroup>
        <InputGroup>
          <span>
            <Label htmlFor="streetAddress">Street Address</Label>
            <Input
              type="text"
              placeholder="Street Address"
              name="streetAddress"
              value={form.streetAddress}
              onChange={e => changeHandler(e)}
              required
            />
          </span>
          <span>
            <Label htmlFor="city">City, State</Label>
            <City
              type="text"
              placeholder="City"
              name="city"
              value={form.city}
              onChange={e => changeHandler(e)}
              required
            />
            <State
              placeholder="State"
              name="state"
              value={form.state}
              onChange={e => changeHandler(e)}
              required
            >
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AL">AL</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VA">VA</option>
              <option value="VT">VT</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </State>
          </span>
        </InputGroup>
        <InputGroup>
          <span>
            <Label htmlFor="line2">Street Address Line 2</Label>
            <Input
              type="text"
              placeholder="Optional"
              name="line2"
              value={form.line2}
              onChange={e => changeHandler(e)}
            />
          </span>
          <span>
            <Label htmlFor="city">Zip Code</Label>
            <Input
              type="text"
              placeholder="Zip."
              name="zipCode"
              value={form.zipCode}
              onChange={e => changeHandler(e)}
              required
            />
          </span>
        </InputGroup>
        <InputGroup>
          <span>
            <Label htmlFor="password">New Password</Label>
            <Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={e => changeHandler(e)}
            />
          </span>
          <span>
            <Label htmlFor="repeatPassword">Repeat New Password</Label>
            <Input
              type="password"
              autoComplete="off"
              placeholder="Repeat Password"
              name="repeatNewPassword"
              value={form.repeatNewPassword}
              onChange={e => changeHandler(e)}
            />
          </span>
        </InputGroup>
        <InputGroup>
          <Button type="button" onClick={e => cancelHandler(e)}>
            Cancel
          </Button>
          <CyanButton type="submit">Save Edits</CyanButton>
        </InputGroup>
      </form>
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Wrapper>
  )
}
