import React from 'react'
import Navbar from '../Navbar'
import SecurityLanding from './SecurityLanding'
import Card from './Card'
import ProtectYourFuture from './ProtectYourFuture'
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
import Footer from './Footer'
import WhyYouNeedIt from './WhyYouNeedIt'
import WhyWeStartedThis from './WhyWeStartedThis'
import JoinNowSecurity from './JoinNowSecurity'

const SecurityHome = () => {
  return (
    <>
      <Navbar />
      <SecurityLanding />
      <WhyWeStartedThis />
      <Card />
      <ProtectYourFuture />
      <HowItWorksSection />
      <WhyYouNeedIt />
      <WhatDoWeCover />
      <WhatWeDontCover />
      <Plans />
      <Protection />
      <WhatDoYouGet />
      <WhatDoYouGetMobile />
      <PlansMobile />
      <BePrepared />
      <Stories />
      <JoinNowSecurity />
      <Footer />
    </>
  )
}
export default SecurityHome
