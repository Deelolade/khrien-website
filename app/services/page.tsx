import React from 'react'
import HeroSection from "@/app/services/HeroSection"
import Services from "@/app/services/Services"
import Footer from "@/components/Footer"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Creative & Strategic Solutions',
  description: 'Explore Khrien\'s comprehensive creative services, including Branding, Content Creation, Graphics Design, and Web Solutions tailored for modern businesses.',
};

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