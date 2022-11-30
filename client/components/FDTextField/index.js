import React from 'react'
import {alpha, styled} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const FDTextField = styled(props => (
  <TextField InputProps={{disableUnderline: true}} {...props} />
))(({theme}) => ({
  '& label.Mui-focused': {
    color: '#AAB1B9'
  },
  '& .MuiFormHelperText-root': {
    color: '#FFF'
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: '#f44336'
  },
  '& .MuiFilledInput-root.Mui-error': {
    borderColor: `#f44336`
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FFF',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    '&:hover': {
      backgroundColor: '#FFF'
    },
    '&.Mui-focused': {
      backgroundColor: '#FFF',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: `#00abe1`
    }
  }
}))

export default FDTextField
