import React from 'react'
import HeroSection from "@/app/services/HeroSection"
import Services from "@/app/services/Services"
import Footer from "@/components/Footer"
const page = () => {
  return (
    <>
      <main className='px-4 lg:px-9 min-h-screen'>
        <HeroSection />
        <Services />
        <Footer />
      </main>
    </>
  )
}

export default page