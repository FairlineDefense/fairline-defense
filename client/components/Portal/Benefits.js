import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'

const Benefits = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      <Navbar />
      <h3>Hi, {user.firstName} this is your benefits page</h3>
    </div>
  )
}

export default Benefits
