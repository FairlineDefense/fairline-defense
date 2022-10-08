import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const ChoosePlan = props => {
  const user = useSelector(state => state.user)
  const {name, displayName, error} = props
  const dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} name="ChoosePlan" />
    </div>
  )
}
export default ChoosePlan
