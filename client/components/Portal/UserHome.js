import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'

const UserHome = () => {
  const user = useSelector(state => state.user)
  // if user.verified => render verify
  // if user.plan => render choose plan
  return (
    <div>
      <Navbar />
      <h3>Hi, {user.firstName}</h3>
    </div>
  )
}

export default UserHome
