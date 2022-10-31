import React from 'react'
import Navbar from '../Navbar'
import Landing from './Landing'
import Card from './Card'
import ProtectYourFuture from './ProtectYourFuture'
import HowItWorksSection from './HowItWorksSection'
import WhatDoWeCover from './WhatDoWeCover'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Card />
      <ProtectYourFuture />
      <HowItWorksSection />
      <WhatDoWeCover />
    </>
  )
}
export default Home
