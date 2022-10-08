import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const UserHome = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      <h3>Hi, {user.firstName}</h3>
    </div>
  )
}

export default UserHome
