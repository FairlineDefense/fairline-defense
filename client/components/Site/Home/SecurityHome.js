import React from 'react'
import Navbar from '../Navbar'
import SecurityLanding from './SecurityLanding'
import SolutionToProtectYou from './SolutionToProtectYou'
import SecurityWhyYouNeedIt from './SecurityWhyYouNeedIt'
import HowItWorksSection from './HowItWorksSection'
import SecurityWhatDoWeCover from './SecurityWhatDoWeCover'
import SecurityWhatWeDontCover from './SecurityWhatWeDontCover'
import SecurityPlans from './SecurityPlans'
import Protection from './Protection'
import WhatDoYouGet from './WhatDoYouGet'
import WhatDoYouGetMobile from './WhatDoYouGetMobile'
import PlansMobile from './PlansMobile'
import SecurityNoOneCanPredict from './SecurityNoOneCanPredict'
import SecurityStories from './SecurityStories'
import Footer from './Footer'
import WhyYouNeedIt from './WhyYouNeedIt'
import WhyWeStartedThis from './WhyWeStartedThis'
import BecomeAMemberSecurity from './BecomeAMemberSecurity'
import SecurityNeed from './SecurityNeed'
import FAQ from './FAQ'
import CriticalResponseSecurity from './CriticalResponseSecurity'
import WhyAreWeDoingThis from './WhyAreWeDoingThis'
import HowFairlineWorks from './HowFairlineWorks'
import SecurityYouNeedExperiencedTeams from './SecurityYouNeedExperiencedTeams'
import Plans from './Plans'
import BePrepared from './BePrepared'

const SecurityHome = () => {
  return (
    <>
      <Navbar />
      <SecurityLanding />
      {/* <WhyWeStartedThis /> */}
      <SolutionToProtectYou />
      <CriticalResponseSecurity />
      <WhyAreWeDoingThis />
      <HowFairlineWorks />
      <SecurityWhyYouNeedIt />
      {/* <HowItWorksSection /> */}
      <SecurityYouNeedExperiencedTeams />
      <WhatDoYouGetMobile />
      <Plans />
      <SecurityWhatDoWeCover />
      <SecurityWhatWeDontCover />
      {/* <Protection /> */}
      {/* <PlansMobile /> */}
      <SecurityNoOneCanPredict />
      <BePrepared />
      {/* <SecurityStories /> */}
      {/* <FAQ /> */}
      <BecomeAMemberSecurity />
      <Footer />
    </>
  )
}
export default SecurityHome
