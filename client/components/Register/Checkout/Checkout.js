import React from 'react'
import {useState, useEffect} from 'react'
import ChoosePlan from './ChoosePlan'
import ChooseProtection from './ChooseProtection'
import BillingAddress from './BillingAddress'
import CreateSubscription from './CreateSubscription'
import PaymentStatus from './PaymentStatus'
import {loadStripe} from '@stripe/stripe-js'

const Checkout = () => {
 const stripePromise = loadStripe(process.env.PUBLIC_KEY)

 const [order, setOrder] = useState({
    customerId: '',
    clientSecret: '',
    protectionType: '',
    protectionTypeString: '',
    priceId: '',
    price: '',
    apt: '',
    streetAddress: '',
    address2: '',
    city: '',
    billingState: 'State',
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

 const options = {
    clientSecret: order.clientSecret,
    // Appearance of Stripe form:
    appearance: {
      theme: 'stripe',

      variables: {
        colorText: '#0C192E',
        colorPrimaryText: '#FFF',
        colorTextSecondary: '#FFF',
        colorTextPlaceholder: '#AAB1B9',
        colorPrimary: '#00abe1',
        colorBackground: '#FFF',
        colorDanger: '#FF1E3E',
        fontFamily: 'Eina, sans-serif',
        spacingUnit: '5px',
        borderRadius: '5px'
      },
      labels: 'floating'
    }
  }

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
        <BillingAddress
        setStep={setStep}
        changeHandler={changeHandler}
        order={order}
        setOrder={setOrder}
        />
      );
      case 'CreateSubscription':
        return (
            <CreateSubscription
            setStep={setStep}
            changeHandler={changeHandler}
            order={order}
            setOrder={setOrder}
            stripePromise={stripePromise}
            options={options}
            />
        );
        case 'PaymentStatus':
            return (
                <PaymentStatus
                setStep={setStep}
                changeHandler={changeHandler}
                order={order}
                />
            );
    default:
    //   return <ChooseProtection />;
      return (<CreateSubscription
            setStep={setStep}
            changeHandler={changeHandler}
            order={order}
            setOrder={setOrder}
            stripePromise={stripePromise}
            options={options}
            />)
  }

}
export default Checkout
