import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'

const Membership = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      <Navbar />
      <h3>Hi, {user.firstName} this is your membership</h3>
    </div>
  )
}

export default Membership
