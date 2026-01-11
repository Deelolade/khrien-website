'use client'
import Lenis from 'lenis';
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';


const Header = () => {
  const lastYRef = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolledTop, setScrolledTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  ;
  useEffect(() => {
    const lenis = new Lenis()
    if (!lenis) return;

    const onScroll = ({ scroll }: { scroll: number }) => {

      setScrolledTop(scroll < 10); // At top, make it transparent

      if (scroll > lastYRef.current && scroll > 100) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      lastYRef.current = scroll;
    };

    lenis.on('scroll', onScroll);


    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <header className={`${hidden ? "-translate-y-[150%] opacity-0" : "translate-y-0"} fixed lg:w-full w-full z-50 top-0 md:top-4 left-1/2 -translate-x-1/2 flex justify-between lg:justify-between items-center h-[9vh] max-w-360  bg-brandLightGray shadow-sm text-black my-0 px-6 rounded-0 lg:rounded-2xl transition-all duration-1000 ease-in-out`}>
        <h1 className='text-xl lg:text-3xl italic font-bold'>Khrien</h1>
        <nav className=' hidden lg:flex space-x-12 text-xl font-semibold'>
          <Link className='hover:text-brandPurple transition-all duration-50 ease-in-out' href="/home">Home</Link>
          <Link className='hover:text-brandPurple transition-all duration-50 ease-in-out' href="/about">About</Link>
          <Link className='hover:text-brandPurple transition-all duration-50 ease-in-out' href="/services">Services</Link>
          <Link className='hover:text-brandPurple transition-all duration-50 ease-in-out' href="/house">House</Link>
          <Link className='hover:text-brandPurple transition-all duration-50 ease-in-out' href="/academy">Academy</Link>
        </nav>
        <div className="px-4 flex items-center">
          <div className="border-5 rounded-full border-r border-t border-black bg-brandYellow px-5 lg:px-10 py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out">
            <Link href="/contact" className='text-xl font-bold'>Contact Us</Link>
          </div>
          <div className=" bg-red-500 h-4">
            <span className='h-0.5 w-4'></span>
            <span className='h-0.5 w-4'></span>
            <span className='h-0.5 w-4'></span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
