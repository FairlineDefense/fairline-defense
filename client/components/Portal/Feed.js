import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'

const Feed = () => {
  const user = useSelector((state) => state.user)

  return (
    <div>
      <Navbar />
      <h3>Hi, {user.firstName} this is your feed</h3>
    </div>
  )
}

export default Feed
