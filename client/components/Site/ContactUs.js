import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

import Navbar from './Navbar'
import Footer from './Home/Footer'
import FDTextField from '../FDTextField'

const HereToHelpSection = styled.div`
  text-align: center;
  padding: 10rem 6rem 1rem 6rem;
  @media (max-width: 768px) {
    padding: 5rem 2rem 1rem 1.5rem;
  }
`

const Header = styled.div`
  font-size: 35px;
  font-weight: 500;

  @media (max-width: 800px) {
    margin-bottom: 1rem;
    font-size: 22px;
  }
`

const CallAgentsImage = styled.img`
  max-height: 403px;
  width: 100%;
  max-width: 1210px;
`

const ContactFairlineSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem 4rem;
  background: rgba(196, 196, 196, 0.25);

  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Bold = styled.div`
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
`

const NameAndEmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 8px;
  > :first-child {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    > :first-child {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`

const SendMessageButton = styled.button`
  display: flex;
  background-color: var(--cyan);
  color: #fff;
  border-radius: 20px;
  width: 40%;
  padding: 0.5rem 1rem;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ContactUs = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setSubmitted] = useState(false)
  let [invalidation, setInvalidation] = useState({
    fullName: false,
    email: false,
    subject: false,
    message: false,
  })

  const handleChange = (e) => {
    if (isSubmitted) {
      setSubmitted(false)
    }
    setInvalidation({...invalidation, [e.target.name]: false})
    setForm({...form, [e.target.name]: e.target.value})
  }

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_z9fptlx',
        'template_s5fzwk1',
        formRef.current,
        '_aXICqV2wDs06SAdU'
      )
      .then(
        (result) => {
          console.log(result.text)
          setSubmitted(true)
          setForm({
            fullName: '',
            email: '',
            subject: '',
            message: '',
          })
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    function validateEmail() {
      let res = true
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          form.email
        )
      ) {
        setInvalidation({...invalidation, email: true})
        res = false
      }
      return res
    }

    if (validateEmail()) {
      sendEmail(evt)
    }
  }

  return (
    <>
      <Navbar shouldShowBackground />
      <HereToHelpSection>
        <Header>We are here to help</Header>
        <CallAgentsImage src="./images/callAgents.png" />
      </HereToHelpSection>
      <ContactFairlineSection>
        <Header>Contact Fairline Defense</Header>
        <ContactForm ref={formRef} onSubmit={handleSubmit} name="contact">
          <p>
            Fairline Defense team is here to connect and answer any questions.
          </p>
          <Bold>We are here to assist you 24/7.</Bold>
          <NameAndEmailContainer>
            <FDTextField
              fullWidth
              label="Full Name"
              placeholder="Full Name"
              name="fullName"
              variant="filled"
              type="text"
              onChange={handleChange}
              value={form.fullName}
              required
            />
            <FDTextField
              fullWidth
              label={invalidation.email ? 'Invalid email address' : 'Email'}
              name="email"
              placeholder="Contact Email"
              type="text"
              onChange={handleChange}
              value={form.email}
              variant="filled"
              required
              error={invalidation.email ? true : false}
            />
          </NameAndEmailContainer>
          <FDTextField
            fullWidth
            label="Subject"
            placeholder="Subject"
            name="subject"
            variant="filled"
            type="text"
            onChange={handleChange}
            value={form.subject}
            style={{margin: 8}}
            required
          />
          <FDTextField
            fullWidth
            label="Your Message"
            placeholder="Your Message"
            name="message"
            variant="filled"
            type="text"
            onChange={handleChange}
            value={form.message}
            style={{margin: 8}}
            multiline
            minRows={8}
            required
          />
          {!isSubmitted ? (
            <SendMessageButton type="submit">Send Message</SendMessageButton>
          ) : (
            <h3>Message sent!</h3>
          )}
        </ContactForm>
      </ContactFairlineSection>
      <Footer />
    </>
  )
}

export default ContactUs
