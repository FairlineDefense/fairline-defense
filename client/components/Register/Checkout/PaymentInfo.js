import React, { useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import { Elements, useStripe, useElements, PaymentElement, CardElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js'
import CreditCardInfo from './CreditCardInfo'
import RegisterHeader from '../RegisterHeader'
import css from '../register.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ThemeProvider } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FDTextField from '../../FDTextField'
import theme from '../../theme'
import PlanSummary from './PlanSummary'
import Checkbox from '@material-ui/core/Checkbox'
import ShippingAddress from './ShippingAddress'
import states from './states'
import { update } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import history from '../../../history';
import PromoCode from './PromoCode'

const Gradient = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);
  color: #fff;
  overflow-x: hidden;

  a {
    color: var(--blue);
  }

  a:visited {
    color: var(--blue);
  }

  a:hover {
    color: var(--blue);
  }
`
const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    width: 90%;
    margin-right: 0.5rem;
  }
`
const Line2Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 700px;
  text-align: left;
  font-size: 14px;
  line-height: 20px;

  p {
    font-weight: bold;
  }

  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    svg {
      fill: white;
    }
  }

  div:nth-child(2) {
    padding-left: 1rem;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  animation: ${spin} 2s linear infinite;
`;
const Button = styled.button`
  background-color: var(--hotred);
  color: #fff;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Eina';
  line-height: 28px;
  margin: 2rem;
  outline: none;
  border: none;
  cursor: pointer;

  @media (max-width: 800px) {
    margin: 2rem;
  }
`
const BackgroundImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('./images/darkblueFlogo.png');
  background-repeat: no-repeat;
  background-position: 0px 30px;
  background-size: 37%;

  @media (max-width: 1800px) {
    background-size: 700px;
  }

  @media (max-width: 800px) {
    background-image: none;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Header = styled.h6`
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  font-family: 'Eina';
  color: white;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 100%;
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const NormalText = styled.div`
  font-family: Eina;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-top: 1px !important;
  margin-bottom: 1px !important;
`;

const BoldText = styled.div`
  font-family: Eina;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-top: 1px !important;
  margin-bottom: 1px !important;
`;
const PaymentInfo = ({
  order: {
    priceId,
    customerId,
    clientSecret,
    holderName,
    price,
    protectionType,
    billingInterval,
    protectionTypeString,
    apt,
    streetAddress,
    line2,
    city,
    state,
    zipCode,
    differentAddress,
    termsAndConditions
  },
  order,
  options,
  setOrder,
  changeHandler,
  setStep,
}) => {
  // if (!clientSecret || clientSecret === '' || !stripePromise) {
  //   return (
  //     <Gradient>
  //       <BackgroundImage>
  //         <RegisterHeader />
  //         <Wrapper>
  //           <CenteredWrapper>
  //             <ThemeProvider theme={theme}>
  //               <CircularProgress color={theme.palette.primary.main} />
  //             </ThemeProvider>
  //           </CenteredWrapper>
  //         </Wrapper>
  //       </BackgroundImage>
  //     </Gradient>
  //   )
  // }

  const [loading, setLoading] = useState(0);
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [errorMessage, setErrorMessage] = useState(null)
  const [validCoupon, setValidCoupon] = useState('');
  const [validDiscount, setValidDiscount] = useState('');

  const handleSubmit = async event => {
    console.log(event);
    event.preventDefault()
    setLoading(1);
    var customerId = 0;

    //Create Customer
    if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
      return setErrorText('Invalid zip code.')
    }
    if (state === '' || state === 'state') {
      return setErrorText('Invalid state.')
    } else {
      //Set order to create customer to trigger stripe customer creation
      try {
        let reqBody = {
          ...user,
          apt: order.apt,
          streetAddress: order.streetAddress,
          line2: order.line2,
          city: order.city,
          state: order.state,
          zipCode: order.zipCode
        }
        if (order.customerId) {
          customerId = order.customerId;
        } else {
          const response = await fetch('/payment/create-customer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
          })
          customerId = await response.json();
          setOrder({ ...order, customerId: customerId.customerId })
        }
      } catch (error) {
        console.log('create customer error', error)
      }
    }

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    // Update user's shipping address in our db
    dispatch(update({ id: user.id, ...order, customerId: customerId.customerId }))
    console.log(customerId.customerId);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: holderName,
        }
      });

      const res = await fetch('payment/attach-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.paymentMethod.id,
          customerId: customerId.customerId,
        })
      });

      const response = await fetch('payment/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          priceId: order.priceId,
          customerId: customerId.customerId,
          coupon: validCoupon,
        })
      })

      const { clientSecretRes: clientSecret } = await response.json();

      if (!clientSecret) {
        history.push('/cardpaymentstatus');
      }
      console.log(response);
      const { error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: 'John Doe'
            }
          },
        })

      console.log(error);
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message)
        setLoading(0);
      } else {
        setLoading(0);
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
        history.push('/cardpaymentstatus');
      }
    } catch {
      console.log('error');
      setLoading(0);
    }
  }

  return (
    <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <Wrapper>
          <PlanSummary
            price={price}
            priceId={priceId}
            protectionTypeString={protectionTypeString}
            protectionType={protectionType}
            billingInterval={billingInterval}
            setStep={setStep}
            changeHandler={changeHandler}
          />
          <Form onSubmit={handleSubmit}>
            <Header>Credit Card</Header>
            <CreditCardInfo
              order={order}
              apt={apt}
              streetAddress={streetAddress}
              line2={line2}
              city={city}
              state={state}
              zipCode={zipCode}
              changeHandler={changeHandler}
              setOrder={setOrder}
            />
            <FDTextField
              name="holderName"
              placeholder="Cardholder Name"
              label="Cardholder Name"
              variant="filled"
              style={{ marginTop: 15, marginRight: 20, width: 'calc(50% - 10px)' }}
              onChange={(e) => changeHandler(e)}
              value={holderName}
              required
            />
            <FDTextField
              name="streetAddress"
              label="Address"
              placeholder="Address"
              type="text"
              variant="filled"
              style={{ marginTop: 15, width: 'calc(50% - 10px)' }}
              onChange={(e) => changeHandler(e)}
              value={streetAddress}
              required
            />
            <FDTextField
              name="line2"
              label="Address 2 (Optional)"
              placeholder="Address 2 (Optional)"
              type="text"
              variant="filled"
              style={{ marginTop: 15, marginRight: 20, width: 'calc(50% - 10px)' }}
              onChange={(e) => changeHandler(e)}
              value={line2}
            />
            <Select
              placeholder="State"
              style={{
                backgroundColor: '#FFF',
                borderRadius: 4,
                width: 'calc(25% - 15px)',
                marginTop: 15,
                marginRight: 20,
                paddingLeft: 20,
              }}
              name="state"
              value={state}
              onChange={(e) => setOrder({ ...order, state: e.target.value })}
              required
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            <FDTextField
              name="zipCode"
              placeholder="Zip Code"
              label="Zip Code"
              variant="filled"
              style={{ marginTop: 15, width: 'calc(25% - 15px)' }}
              onChange={(e) => changeHandler(e)}
              value={zipCode}
              required
            />
            <PromoCode setValidCoupon={setValidCoupon} setValidDiscount={setValidDiscount}/>
            {setValidDiscount ? (<LeftWrapper>
              <NormalText>
                Discount:
              </NormalText>
              <BoldText>
                {validDiscount / 1999} Month Free
              </BoldText>
            </LeftWrapper>) : ''}

            <LeftWrapper>
              <NormalText>
                Payment due now:
              </NormalText>
              <BoldText>
                {parseFloat(order.price.replace("$", "")) - validDiscount / 100.0}
              </BoldText>
            </LeftWrapper>

            {setValidDiscount ? (<LeftWrapper>
              <NormalText>
                After promo ends:
              </NormalText>
              <BoldText>
                ${parseFloat(order.price.replace("$", ""))}/mo
              </BoldText>
            </LeftWrapper>) : ''}

            <LeftWrapper style={{marginTop: 30}}>
              <div>
                <Checkbox
                  color="primary"
                  onChange={() =>
                    setOrder({ ...order, differentAddress: !differentAddress })
                  }
                  style={{ padding: 0 }}
                  name="differentAddress"
                  checked={!differentAddress}
                />
              </div>
              <div>
                My shipping address etc.
                {/* <p>
                  {apt} {streetAddress} {line2} <br />
                  {state} {zipCode}
                </p> */}
              </div>
            </LeftWrapper>

            <ShippingAddress
              order={order}
              changeHandler={changeHandler}
              setOrder={setOrder}
            />

            <LeftWrapper>
              <div>
                <ThemeProvider theme={theme}>
                  <Checkbox
                    color="primary"
                    onChange={() =>
                      setOrder({ ...order, termsAndConditions: !termsAndConditions })
                    }
                    style={{ padding: 0 }}
                    name="termsAndConditions"
                    checked={termsAndConditions}
                    required
                  />
                </ThemeProvider>
              </div>
              <div>
                By starting my Membership, I confirm that I have read and agree to
                the Fairline Defense Terms & Conditions. I understand that my
                Membership will automatically renew monthly at the then-current
                subscription rate, which will be charged to my payment method on
                file. I understand that I can update my payment method or pause or
                cancel my Membership at any time in accordance with the Membership
                Terms by going to my Account Settings at
                www.fairlinedefense.com/mymembership, and that these changes will
                take effect at the end of my current billing cycle.
              </div>
            </LeftWrapper>

            <CenteredWrapper>
              {loading ? <Button
                style={{ marginTop: 8, textAlign: '-webkit-center' }}>
                <Loader />
              </Button> :
                <Button disabled={!stripe}>Start my Membership</Button>
              }
            </CenteredWrapper>

            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
          </Form>

        </Wrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default PaymentInfo
