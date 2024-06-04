import React from 'react'
import Headline from '@/components/home/headline/Headline'
import LearnMore from '@/components/home/learn-more/LearnMore'
import Offering from '@/components/home/offering/Offering'
import WhyUs from '@/components/home/why-us/WhyUs'

function MainSection() {
  return (
    <div>
      <Headline />
      <LearnMore />
      <Offering />
      <WhyUs />
    </div>
  )
}

export default MainSection