import React from 'react'
import Navbar from '../Navbar'
import Landing from './Landing'
import SolutionToProtectYou from './SolutionToProtectYou'
import ProtectYourFuture from './SecurityWhyYouNeedIt'
import WhatDoWeCover from './WhatDoWeCover'
import WhatWeDontCover from './WhatWeDontCover'
import Plans from './Plans'
import Protection from './Protection'
import WhatDoYouGet from './WhatDoYouGet'
import WhatDoYouGetMobile from './WhatDoYouGetMobile'
import PlansMobile from './PlansMobile'
import NoOneCanPredict from './NoOneCanPredict'
import Stories from './Stories'
import JoinNow from './JoinNow'
import Footer from './Footer'
import FAQ from './FAQ'
import CriticalResponse from './CriticalResponse'
import Why from './Why'
import HowFairlineWorks from './HowFairlineWorks'
import WhyDoYouNeedIt from './WhyDoYouNeedIt'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <SolutionToProtectYou />
      <CriticalResponse />
      {/* <ProtectYourFuture /> */}
      <Why />
      <HowFairlineWorks />
      <WhyDoYouNeedIt />
      {/* <Protection /> */}
      <WhatDoYouGetMobile />
      <Plans />
      {/* <PlansMobile /> */}
      <WhatDoWeCover />
      <WhatWeDontCover />
      <NoOneCanPredict />
      {/* <Stories /> */}
      {/* <FAQ /> */}
      <JoinNow />
      <Footer />
    </>
  )
}
export default Home
