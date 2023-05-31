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
import Footer from './Footer'
import SelfDefense from './SelfDefense'
import HowFairlineWorks from './HowFairlineWorks'
import OurMission from './OurMission'
import WhyDoYouNeedIt from './WhyDoYouNeedIt'
import BePrepared from './BePrepared'
import BecomeAMember from './BecomeAMember'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <SolutionToProtectYou />
      <SelfDefense />
      {/* <ProtectYourFuture /> */}
      <HowFairlineWorks />
      <OurMission />
      <WhyDoYouNeedIt />
      {/* <Protection /> */}
      <WhatDoYouGetMobile />
      <Plans isArmedCitizen />
      {/* <PlansMobile /> */}
      <WhatDoWeCover />
      <WhatWeDontCover />
      <NoOneCanPredict />
      <BePrepared />
      {/* <Stories /> */}
      <BecomeAMember />
      <Footer />
    </>
  )
}
export default Home
