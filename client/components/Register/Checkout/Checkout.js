import React from 'react'
import {useState, useEffect} from 'react'
import ChoosePlan from './ChoosePlan'
import ChooseProtection from './ChooseProtection'
import BillingAddress from './BillingAddress'
import PaymentInfo from './PaymentInfo'
import PaymentStatus from './PaymentStatus'
import {loadStripe} from '@stripe/stripe-js'
import {useSelector} from 'react-redux'

const Checkout = () => {
  const user = useSelector((state) => state.user)
  const stripePromise = loadStripe(process.env.PUBLIC_KEY)

  const [order, setOrder] = useState({
    customerId: '',
    clientSecret: '',
    protectionType: '',
    protectionTypeString: '',
    priceId: '',
    price: '',
    billingInterval: '',
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
        borderRadius: '5px',
      },
      labels: 'floating',
    },
  }

  const [step, setStep] = useState('ChooseProtection')

  const changeHandler = (e) => {
    e.preventDefault()
    setOrder({...order, [e.currentTarget.name]: e.currentTarget.value})
  }

  //1) priceId is set in ChoosePlan.js, and is used to set the plan information in the useEffect below
  useEffect(() => {
    const prices = {
      armedCitizenMonth: '$19.99',
      armedCitizenYear: '$199',
      armedProfessionalMonth: '$29.99',
      armedProfessionalYear: '$299',
    }
    const price = prices[order.priceId]

    const protectionTypeStrings = {
      armedCitizenMonth: 'Armed Citizen',
      armedCitizenYear: 'Armed Citizen',
      armedProfessionalMonth: 'Armed Professional',
      armedProfessionalYear: 'Armed Professional',
    }
    const protectionTypeString = protectionTypeStrings[order.priceId]

    const billingIntervals = {
      armedCitizenMonth: 'monthly',
      armedCitizenYear: 'annually',
      armedProfessionalMonth: 'monthly',
      armedProfessionalYear: 'annually',
    }
    const billingInterval = billingIntervals[order.priceId]

    setOrder({
      ...order,
      billingInterval: billingInterval,
      protectionTypeString: protectionTypeString,
      price: price,
    })
  }, [order.priceId, step])

  //2) A customer is created via the Stripe API from their info in BillingAddress.js which returns a customer id.
  const createCustomer = async () => {
    try {
      let reqBody = {
        ...user,
        apt: order.apt,
        streetAddress: order.streetAddress,
        line2: order.line2,
        city: order.city,
        state: order.state,
        zipCode: order.zipCode,
      }
      const response = await fetch('/payment/create-customer', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reqBody),
      })
      const {customerId: customerId} = await response.json()
      setOrder({...order, customerId: customerId})
      setStep('PaymentInfo')
    } catch (error) {
      console.log('create customer error', error)
    }
  }
  useEffect(() => {
    if (order.customerId === 'createCustomer') {
      try {
        createCustomer()
      } catch (error) {
        console.log('error creating customer,', error)
      }
    }
  }, [order.customerId])

  //3) This customer id is used to render a payment intent (credit card form) in CreditCardInfo.js
  const fetchClientSecret = async () => {
    const response = await fetch('payment/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: order.priceId,
        customerId: order.customerId,
      }),
    })
    const {clientSecretRes} = await response.json()
    setOrder({...order, clientSecret: clientSecretRes})
  }
  useEffect(() => {
    if (order.customerId !== '' && order.customerId !== 'createCustomer') {
      try {
        fetchClientSecret()
      } catch (error) {
        console.log('error getting client secret,', error)
      }
    }
  }, [order.customerId])

  //4) In CreditCardInfo.js, submitHandler sends the payment intent to Stripe, which returns a payment status

  switch (step) {
    case 'ChooseProtection':
      return (
        <ChooseProtection
          setStep={setStep}
          changeHandler={changeHandler}
          order={order}
        />
      )
    case 'ChoosePlan':
      return (
        <ChoosePlan
          setStep={setStep}
          changeHandler={changeHandler}
          order={order}
        />
      )
    case 'BillingAddress':
      return (
        <BillingAddress
          setStep={setStep}
          changeHandler={changeHandler}
          order={order}
          setOrder={setOrder}
        />
      )
    case 'PaymentInfo':
      return (
        <PaymentInfo
          setStep={setStep}
          changeHandler={changeHandler}
          order={order}
          setOrder={setOrder}
          stripePromise={stripePromise}
          options={options}
        />
      )
    case 'PaymentStatus':
      return (
        <PaymentStatus
          setStep={setStep}
          changeHandler={changeHandler}
          order={order}
        />
      )
    default:
      return <ChooseProtection />
  }
}
export default Checkout
