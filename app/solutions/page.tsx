import React from 'react'
import HeroSection from './HeroSection'
import WhatWeBuild from './WhatWeBuild'
import ProcessSection from './ProcessSection'
import WhyChooseUs from './WhyChooseUs'
import SolutionsCta from './SolutionsCta'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <main className="px-4 lg:px-9 min-h-screen">
            <HeroSection />
            <WhatWeBuild />
            <ProcessSection />
            <WhyChooseUs />
            <SolutionsCta />
            <Footer />
        </main>
    )
}

export default page