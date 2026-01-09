import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center h-[8vh] max-w-[1440] mx-auto bg-amber-50 text-black mt-6 px-6 rounded-2xl'>
      <h1 className='text-3xl italic font-bold'>Khrien</h1>
      <nav className='space-x-12 text-xl font-semibold'>
        <Link className='hover:text-[#934ab3] transition-all duration-50 ease-in-out' href="/home">Home</Link>
        <Link className='hover:text-[#934ab3] transition-all duration-50 ease-in-out' href="/about">About</Link>
        <Link className='hover:text-[#934ab3] transition-all duration-50 ease-in-out' href="/services">Services</Link>
        <Link className='hover:text-[#934ab3] transition-all duration-50 ease-in-out' href="/house">House</Link>
        <Link className='hover:text-[#934ab3] transition-all duration-50 ease-in-out' href="/academy">Academy</Link>
      </nav>
      <div className="px-4">
        <div className="border-5 rounded-full border-r border-t border-black bg-[#f7a619] px-6 py-3 hover:bg-[#934ab3] hover:text-white transition-all duration-50 ease-in-out">
          <Link href="/contact" className='text-xl font-semibold' >Contact Us</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
