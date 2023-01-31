import React from 'react'
import {useState, useEffect} from 'react'
import ChoosePlan from './ChoosePlan'
import ChooseProtection from './ChooseProtection'

const Checkout = () => {
  let [protectionType, setProtectionType] = useState('none')
  let [price, setPrice] = useState('none')
  let [protectionTypeString, setProtectionTypeString] = useState('none')
  let [interval, setInterval] = useState('none')

  const protectionClickHandler = e => {
    e.preventDefault()
    setProtectionType(e.currentTarget.value)
  }

  useEffect(() => {
    if(protectionType === 'none') { 
        setProtectionTypeString('none')
    }
    if(protectionType === 'armedCitizen') {
        setProtectionTypeString('Armed Citizen')
      }
      if(protectionType === 'armedProfessional') {
        setProtectionTypeString('Armed Professional')
      }
  }, [protectionType])

  if (protectionType !== 'none') {
    return <ChoosePlan protectionType={protectionType} protectionTypeString={protectionTypeString} protectionClickHandler={protectionClickHandler} setInterval={setInterval} interval={interval} setPrice={setPrice} price={price} />
  }
  else {
  return <ChooseProtection protectionType={protectionType} protectionTypeString={protectionTypeString} protectionClickHandler={protectionClickHandler} setInterval={setInterval} interval={interval} setPrice={setPrice} price={price} />
}
}
export default Checkout
