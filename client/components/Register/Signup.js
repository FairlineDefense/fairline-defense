import React from 'react'
import { signup } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RegisterHeader from './RegisterHeader'
import FDTextField from '../FDTextField'
import history from '../../history'
import styled from 'styled-components'
import AccountExistsModal from './AccountExistsModal'
import TermsAndConditions from './TermsAndConditions'
import PrivacyPolicy from './PrivacyPolicy'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import countries from './phonecodes'
import { ThemeProvider } from '@material-ui/core'
import theme from '../theme'
import FDPasswordField from '../FDTextField/password'
import SvgIcon from '@material-ui/core/SvgIcon'
import ListItemIcon from '@material-ui/core/ListItemIcon'

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
const H3 = styled.h3`
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    margin-bottom: 0.5rem;
  }
`
const SignupWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  @media (max-width: 768px) {
    padding: 2rem 2rem 0rem 1.5rem;
  }
`
const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 720px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
const FinePrint = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem 3rem 0rem;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0rem 0rem 1rem 0rem;
  }
`
const TermsAndConditionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 16px;
  align-items: center;
  svg {
    fill: white;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    flex-wrap: wrap;
  }
`
const OpenFinePrint = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const Phone = styled.span`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px;

  div:nth-child(1) {
    width: 60px;
  }
  div:nth-child(2) {
    margin-left: 4px;
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-between;
    padding: 8px 0px 8px 8px;

    div:nth-child(2) {
      width: calc(100% + 4px);
    }
  }
`
const SignupButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const SignupFormButton = styled.button`
  width: 340px;
  font-weight: 200;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 50px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 20px;
  background-color: var(--blue);
  margin-bottom: 2rem;
  cursor: pointer;
`
const Flag = styled.img`
  width: 37px;
  height: auto;
  margin-left: 10px;
  margin-top: 4px;
`
const Signup = () => {
  let user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  let [errorText, setErrorText] = useState('')
  let [passwordErrorText, setPasswordErrorText] = useState(' ')
  let [invalidation, setInvalidation] = useState({
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  })
  let [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dialCode: '+1',
    countryCode: 'US',
    phone: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  })

  const changeHandler = (e) => {
    if (e.target.name === 'phone') {
      let phone = e.target.value
      if (phone[0] !== '+') {
        phone = form.dialCode + ' ' + phone
      }
      setForm({ ...form, phone: phone.slice(form.dialCode.length + 1) })
    } else {
      setInvalidation({ ...invalidation, [e.target.name]: false })
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const firstName = form.firstName
    const lastName = form.lastName
    const email = form.email
    const phone =
      form.dialCode +
      form.phone
        .split('')
        .filter((char) => {
          if (char !== ' ' && char !== '(' && char !== ')' && char !== '-') {
            return char
          }
        })
        .join('')
    const password = form.password
    const confirmPassword = form.confirmPassword

    function validateFields() {
      let res = true
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        setInvalidation({ ...invalidation, email: true })
        res = false
      }
      if (!/^[0-9()-+]+$/.test(phone)) {
        setInvalidation({ ...invalidation, phone: true })
        res = false
      }
      if (password !== confirmPassword) {
        setInvalidation({ ...invalidation, confirmPassword: true })
        setPasswordErrorText('Passwords do not match')
        res = false
      }
      if (password.length < 8) {
        setInvalidation({
          ...invalidation,
          password: true,
          confirmPassword: true,
        })
        setPasswordErrorText('Passwords must be min. 8 chars long')
        res = false
      }
      if (password.search(/[a-z]/i) < 0) {
        setInvalidation({
          ...invalidation,
          password: true,
          confirmPassword: true,
        })
        setPasswordErrorText('Passwords must contain at least one letter')
        res = false
      }
      if (password.search(/[!@#\$%\^\&*\)\(+=._-]/i) < 0) {
        setInvalidation({
          ...invalidation,
          password: true,
          confirmPassword: true,
        })
        setPasswordErrorText(
          'Passwords must contain at least one special character'
        )
        res = false
      }
      if (password.search(/[0-9]/) < 0) {
        setInvalidation({
          ...invalidation,
          password: true,
          confirmPassword: true,
        })
        setPasswordErrorText('Passwords must contain at least one number')
        res = false
      }
      return res
    }

    if (validateFields()) {
      dispatch(signup(firstName, lastName, email, phone, password, 'signup'))
    }
  }

  //Account already exists modal props:
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      cc: '',
      phone: '',
      password: '',
      confirmPassword: '',
    })
    setOpen(false)
    user.error = ''
    history.push('/login')
  }

  const handleClose = (value) => {
    setOpen(false)
    setSelectedValue(value)
  }

  useEffect(() => {
    if (user.error) {
      setOpen(true)
    }
  }, [user])

  //Terms and Conditions modal props:
  let [openTerms, setOpenTerms] = useState(false)
  let [openPolicy, setOpenPolicy] = useState(false)

  const viewTerms = (e) => {
    e.preventDefault()
    setOpenTerms(true)
  }

  const viewPolicy = (e) => {
    e.preventDefault()
    setOpenPolicy(true)
  }

  const handleClickShowPassword = () => {
    setForm({
      ...form,
      showPassword: !form.showPassword,
    })
  }

  const handleClickShowConfirmPassword = () => {
    setForm({
      ...form,
      showConfirmPassword: !form.showConfirmPassword,
    })
  }

  return (
    <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <SignupWrapper>
          <H3>Get Started</H3>
          <SignupForm onSubmit={handleSubmit} name="signup">
            <InputGroup>
              <FDTextField
                fullWidth
                label="First Name"
                placeholder="First Name"
                name="firstName"
                variant="filled"
                type="text"
                onChange={(e) => changeHandler(e)}
                value={form.firstName}
                style={{ margin: 8 }}
                required
              />
              <FDTextField
                fullWidth
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                type="text"
                onChange={(e) => changeHandler(e)}
                value={form.lastName}
                style={{ margin: 8 }}
                variant="filled"
                required
              />
            </InputGroup>
            <InputGroup>
              {window.innerWidth >= 768 ? (
                <FDTextField
                  label={invalidation.email ? 'Invalid email address' : 'Email'}
                  name="email"
                  placeholder="name@email.com"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  value={form.email}
                  style={{ margin: 8, flexGrow: 1 }}
                  variant="filled"
                  required
                  error={invalidation.email ? true : false}
                />
              ) : (
                <FDTextField
                  fullWidth
                  label={invalidation.email ? 'Invalid email address' : 'Email'}
                  name="email"
                  placeholder="name@email.com"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  value={form.email}
                  style={{ margin: 8, flexGrow: 1 }}
                  variant="filled"
                  required
                  error={invalidation.email ? true : false}
                />
              )}

              <Phone>
                <ThemeProvider theme={theme}>
                  <Select
                    disableUnderline={true}
                    style={{
                      backgroundColor: '#FFF',
                      borderRadius: 4,
                      width: 85,
                    }}
                    onChange={(e) => changeHandler(e)}
                    value={form.dialCode}
                    name="dialCode"
                    required
                  >
                    {countries.map((country) => (
                      <MenuItem
                        sx={{ p: 5 }}
                        key={country.code}
                        value={country.dial_code}
                      >
                        {form.dialCode === country.dial_code ? (
                          <ListItemIcon>
                            <Flag
                              src={`https://www.countryflagicons.com/SHINY/64/${country.code}.png`}
                            />
                          </ListItemIcon>
                        ) : (
                          <>
                            <ListItemIcon>
                              <Flag
                                src={`https://www.countryflagicons.com/SHINY/64/${country.code}.png`}
                              />
                            </ListItemIcon>{' '}
                            {country.name + ' ' + country.dial_code}
                          </>
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </ThemeProvider>
                {window.innerWidth >= 768 ? (
                  <FDTextField
                    label={invalidation.phone ? 'Invalid Phone Number' : 'Phone'}
                    style={{ width: 'calc(100% - 4px)' }}
                    name="phone"
                    placeholder="123 456 7890"
                    type="tel"
                    onChange={(e) => changeHandler(e)}
                    value={form.dialCode + ' ' + form.phone}
                    variant="filled"
                    error={invalidation.phone ? true : false}
                    required
                  />) : (
                  <FDTextField
                    fullWidth
                    label={invalidation.phone ? 'Invalid Phone Number' : 'Phone'}
                    name="phone"
                    placeholder="123 456 7890"
                    type="tel"
                    onChange={(e) => changeHandler(e)}
                    value={form.dialCode + ' ' + form.phone}
                    variant="filled"
                    error={invalidation.phone ? true : false}
                    required
                  />
                )}
              </Phone>
            </InputGroup>
            <InputGroup>
              <FDPasswordField
                fullWidth
                label="Password"
                placeholder="Password"
                name="password"
                type={form.showPassword ? 'text' : 'password'}
                onChange={(e) => changeHandler(e)}
                value={form.password}
                style={{ margin: 8 }}
                variant="filled"
                toggleVisibility={handleClickShowPassword}
                error={invalidation.password ? true : false}
                helperText={`Min 8 char. with at least one upper case letter, one number, and
            one special char.: !, @, $, #, &, *.`}
                required
              />
              <FDPasswordField
                fullWidth
                label="Confirm Password"
                placeholder="Confirm Password"
                name="confirmPassword"
                type={form.showConfirmPassword ? 'text' : 'password'}
                onChange={(e) => changeHandler(e)}
                value={form.confirmPassword}
                style={{ margin: 8 }}
                variant="filled"
                autocomplete="current-password"
                toggleVisibility={handleClickShowConfirmPassword}
                error={invalidation.confirmPassword ? true : false}
                helperText={passwordErrorText}
                required
              />
            </InputGroup>
            <FinePrint>
              <TermsAndConditionsDiv>
                <ThemeProvider theme={theme}>
                  <Checkbox color="primary" required />I agree to the Fairline
                  Defense&nbsp;
                  <OpenFinePrint
                    onClick={(e) => {
                      viewTerms(e)
                    }}
                  >
                    Terms & Service
                  </OpenFinePrint> &nbsp;and&nbsp;
                  <OpenFinePrint
                    onClick={(e) => {
                      viewPolicy(e)
                    }}
                  >
                    Privacy Policy
                  </OpenFinePrint>
                </ThemeProvider>
              </TermsAndConditionsDiv>
            </FinePrint>

            <SignupButtonWrapper>
              <SignupFormButton type="submit">
                Create an Account
              </SignupFormButton>
            </SignupButtonWrapper>
            <section className="signupFormBottom">
              {errorText.length ? (
                <ErrorText>{errorText}</ErrorText>
              ) : (
                <div>
                  <span>Already have an account?</span>
                  <span>
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              )}
            </section>
          </SignupForm>
        </SignupWrapper>

        <AccountExistsModal
          open={open}
          handleClose={handleClose}
          handleClick={handleClick}
        />
        <TermsAndConditions openTerms={openTerms} setOpenTerms={setOpenTerms} />
        <PrivacyPolicy openPolicy={openPolicy} setOpenPolicy={setOpenPolicy} />
      </BackgroundImage>
    </Gradient>
  )
}
export default Signup
