import React from 'react'
import Navbar from '../Navbar'
import Landing from './Landing'
import Card from './Card'
import ProtectYourFuture from './SecurityWhyYouNeedIt'
import HowItWorksSection from './HowItWorksSection'
import WhatDoWeCover from './WhatDoWeCover'
import WhatWeDontCover from './WhatWeDontCover'
import Plans from './Plans'
import Protection from './Protection'
import WhatDoYouGet from './WhatDoYouGet'
import WhatDoYouGetMobile from './WhatDoYouGetMobile'
import PlansMobile from './PlansMobile'
import BePrepared from './BePrepared'
import Stories from './Stories'
import JoinNow from './JoinNow'
import Footer from './Footer'
import WhyYouNeedIt from './WhyYouNeedIt'
import FAQ from './FAQ'
const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Card />
      {/* <ProtectYourFuture /> */}
      <HowItWorksSection />
      <WhyYouNeedIt />
      <Plans />
      {/* <Protection /> */}
      <WhatDoYouGetMobile />
      {/* <PlansMobile /> */}
      <WhatDoWeCover />
      <WhatWeDontCover />
      <BePrepared />
      {/* <Stories /> */}
      <JoinNow />
      <FAQ />
      <Footer />
    </>
  )
}
export default Home
