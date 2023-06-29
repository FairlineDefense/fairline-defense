import React from 'react'
import styled from 'styled-components'
import {withStyles} from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import {
  generalContents,
  faqContents,
  armedProfessionalsContents,
} from './constants'

import Navbar from './Navbar'
import Footer from './Home/Footer'

const Accordion = withStyles({
  root: {
    borderBottom: '1.5px solid rgba(0, 0, 0, 1)',
    boxShadow: 'none',
    '&:last-child': {
      borderBottom: 0,
      marginBottom: 20,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const FAQWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10rem 6rem 6rem;
  @media (max-width: 768px) {
    padding: 4rem 2rem 0rem 1.5rem;
  }
`

const Header = styled.h1`
  margin-top: 4rem;
  margin-bottom: 4rem;

  text-align: center;
`

const ExpandArrow = styled.img`
  width: 22px;
`

const AccordianText = styled.h2`
  font-size: 1.25rem;
`

const SubHeading = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export default function FAQ() {
  return (
    <div>
      <Navbar shouldShowBackground />
      <FAQWrapper>
        <Header>FAQs</Header>

        <SubHeading>
          Questions?
          <br />
          We got answers
        </SubHeading>

        <Header>General</Header>
        <div>
          {generalContents.map((content) => (
            <Accordion key={content.title}>
              <AccordionSummary
                expandIcon={<ExpandArrow src="./images/cyandownarrow.png" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <AccordianText>{content.title}</AccordianText>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{content.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <Header>FAQs</Header>
        <div>
          {faqContents.map((content) => (
            <Accordion key={content.title}>
              <AccordionSummary
                expandIcon={<ExpandArrow src="./images/cyandownarrow.png" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <AccordianText>{content.title}</AccordianText>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{content.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <Header>Armed Professionals</Header>
        <div>
          {armedProfessionalsContents.map((content) => (
            <Accordion key={content.title}>
              <AccordionSummary
                expandIcon={<ExpandArrow src="./images/cyandownarrow.png" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <AccordianText>{content.title}</AccordianText>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{content.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </FAQWrapper>
      <Footer />
    </div>
  )
}
