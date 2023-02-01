import * as React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import {ThemeProvider} from '@material-ui/core'
import theme from '../theme'
import TermsOfServiceContent from '../shared/TermsOfServiceContent'

export default function TermsAndConditions(props) {
  let {openTerms, setOpenTerms} = props

  const handleClose = () => {
    setOpenTerms(false)
  }

  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (openTerms) {
      const {current: descriptionElement} = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openTerms])

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={openTerms}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Fairline Defense Terms of Service
        </DialogTitle>
        <DialogContent dividers={'paper'}>
          <TermsOfServiceContent />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
          {/* <Button onClick={handleClose} color="secondary">Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}
