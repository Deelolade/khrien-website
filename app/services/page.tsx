import React from 'react'
import HeroSection  from "@/app/services/HeroSection.tsx"
import Services  from "@/app/services/Services.tsx"
import Footer  from "@/components/Footer.tsx"
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