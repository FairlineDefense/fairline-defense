import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const VerifyPhone = () => {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} name="VerifyPhone" />
    </div>
  )
}
export default VerifyPhone
