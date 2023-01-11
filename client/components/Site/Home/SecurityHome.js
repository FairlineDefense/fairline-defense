import React from 'react'
import Navbar from '../Navbar'
import SecurityLanding from './SecurityLanding'
import Card from './Card'
import ProtectYourFuture from './ProtectYourFuture'
import HowItWorksSection from './HowItWorksSection'
import WhatDoWeCover from './WhatDoWeCover'
import WhatWeDontCover from './WhatWeDontCover'
import SecurityPlans from './SecurityPlans'
import Protection from './Protection'
import WhatDoYouGet from './WhatDoYouGet'
import WhatDoYouGetMobile from './WhatDoYouGetMobile'
import PlansMobile from './PlansMobile'
import BePrepared from './BePrepared'
import SecurityStories from './SecurityStories'
import Footer from './Footer'
import WhyYouNeedIt from './WhyYouNeedIt'
import WhyWeStartedThis from './WhyWeStartedThis'
import JoinNowSecurity from './JoinNowSecurity'
import SecurityNeed from './SecurityNeed'

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
      <WhatDoWeCover />
      <WhatWeDontCover />
      <Protection />
      {/* <PlansMobile /> */}
      <BePrepared />
      <SecurityStories />
      <JoinNowSecurity />
      <Footer />
    </>
  )
}
export default SecurityHome
