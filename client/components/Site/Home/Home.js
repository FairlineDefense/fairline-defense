import React from 'react'
import Navbar from '../Navbar'
import Landing from './Landing'
import Card from './Card'
import ProtectYourFuture from './ProtectYourFuture'
import HowItWorksSection from './HowItWorksSection'
import WhatDoWeCover from './WhatDoWeCover'
import WhatWeDontCover from './WhatWeDontCover'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Card />
      <ProtectYourFuture />
      <HowItWorksSection />
      <WhatDoWeCover />
      <WhatWeDontCover />
    </>
  )
}
export default Home
