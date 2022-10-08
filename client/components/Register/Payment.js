import React from 'react'
import {useDispatch} from 'react-redux'

const Payment = props => {
  const {name, displayName, error} = props
  const dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()
    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value
    const email = evt.target.email.value
    const phone = evt.target.countryCode.value + evt.target.phone.value
    const password = evt.target.password.value
  }

  return (
    <div>
      <form onSubmit={handleSubmit} name="payment" />
    </div>
  )
}
export default Payment
