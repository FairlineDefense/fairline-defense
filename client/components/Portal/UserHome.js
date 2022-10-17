import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import {VerifyEmail, VerifyPhone, ChoosePlan} from '../'

const UserHome = () => {
  const user = useSelector(state => state.user)
  // if user.emailVerified => render verify
  // if user.phoneVerified => render verify phone
  // if user.userPlan => render choose plan

  // if(!user.emailVerified) {
  //   return <VerifyEmail />
  // }

  // if (!user.phoneVerified) {
  //   return <VerifyPhone />
  // }

  if (!user.plan) {
    return <ChoosePlan />
  }

  return (
    <div>
      <Navbar />
      <h3>Hi, {user.firstName}</h3>
    </div>
  )
}

export default UserHome
