import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core'
import theme from '../theme'
export default function AccountExistsModal(props) {
  const {open, handleClose, handleClick} = props
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Error Creating Account</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {user.error.response.data.map(error => error)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Continue to Login
          </Button>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Go back
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}
