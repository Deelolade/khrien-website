import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ValuePropostition from '@/components/ValuePropostition'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <main className="">
      <HeroSection/>
      <ValuePropostition/>
    </main>
    </>
  )
}

export default page
