import React from 'react'
import Navbar from '../Navbar'
import SecurityLanding from './SecurityLanding'
import Card from './Card'
import ProtectYourFuture from './SecurityWhyYouNeedIt'
import HowItWorksSection from './HowItWorksSection'
import SecurityWhatDoWeCover from './SecurityWhatDoWeCover'
import SecurityWhatWeDontCover from './SecurityWhatWeDontCover'
import SecurityPlans from './SecurityPlans'
import Protection from './Protection'
import WhatDoYouGet from './WhatDoYouGet'
import WhatDoYouGetMobile from './WhatDoYouGetMobile'
import PlansMobile from './PlansMobile'
import SecurityBePrepared from './SecurityBePrepared'
import SecurityStories from './SecurityStories'
import Footer from './Footer'
import WhyYouNeedIt from './WhyYouNeedIt'
import WhyWeStartedThis from './WhyWeStartedThis'
import JoinNowSecurity from './JoinNowSecurity'
import SecurityNeed from './SecurityNeed'
import FAQ from './FAQ'

const SecurityHome = () => {
  return (
    <>
      <Navbar />
      <SecurityLanding />
      {/* <WhyWeStartedThis /> */}
      <Card />
      <ProtectYourFuture />
      <HowItWorksSection />
      <SecurityNeed />
      <SecurityPlans />
      <WhatDoYouGetMobile />
      <SecurityWhatDoWeCover />
      <SecurityWhatWeDontCover />
      {/* <Protection /> */}
      {/* <PlansMobile /> */}
      <SecurityBePrepared />
      {/* <SecurityStories /> */}
      <FAQ />
      <JoinNowSecurity />
      <Footer />
    </>
  )
}
export default SecurityHome
