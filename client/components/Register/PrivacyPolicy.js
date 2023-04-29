import * as React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import {ThemeProvider} from '@material-ui/core'
import theme from '../theme'
import PrivacyPolicyContent from '../shared/PrivacyPolicyContent'

export default function PrivacyPolicy(props) {
  let {openPolicy, setOpenPolicy} = props

  const handleClose = () => {
    setOpenPolicy(false)
  }

  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (openPolicy) {
      const {current: descriptionElement} = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openPolicy])

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={openPolicy}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Fairline Defense Privacy Policy
        </DialogTitle>
        <DialogContent dividers={'paper'}>
          <PrivacyPolicyContent />
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
