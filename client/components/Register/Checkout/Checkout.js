import React from 'react'
import {useState, useEffect} from 'react'
import ChoosePlan from './ChoosePlan'
import ChooseProtection from './ChooseProtection'

const Checkout = () => {
 const [order, setOrder] = useState({
    customerId: '',
    clientSecret: '',
    protectionType: '',
    protectionTypeString: '',
    billingInterval: '',
    price: '',
    apt: '',
    streetAddress: '',
    address2: '',
    city: '',
    state: 'State',
    zipCode: '',
    sameAddress: true,
    shippingApt: '',
    shippingStreetAddress: '',
    shippingAddress2: '',
    shippingCity: '',
    shippingState: 'State',
    shippingZipCode: '',
    termsAndConditions: false,
 })

 const [step, setStep] = useState('ChooseProtection')

  const changeHandler = e => {
    e.preventDefault()
    console.log(order)
    setOrder({...order, [e.currentTarget.name]:e.currentTarget.value})
  }

  switch (step) {
    case 'ChooseProtection':
      return (
        <ChooseProtection
          setStep={setStep}
          changeHandler={changeHandler}
          order={order}
        />
      );
    case 'ChoosePlan':
      return (
        <ChoosePlan
          setStep={setStep}
          changeHandler={changeHandler}
          order={order}
        />
      );
    case 'BillingAddress':
      return (
        <ConfirmOrder
        setStep={setStep}
        changeHandler={changeHandler}
        order={order}
        />
      );
      case 'CreateSubscription':
        return (
            <CreateSubscription
            setStep={setStep}
            changeHandler={changeHandler}
            order={order}
            />
        );
    default:
      return <ChooseProtection />;
  }

}
export default Checkout
