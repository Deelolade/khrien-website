'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';
import imageOne from '@/public/contactus-image.jpeg';
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-360 mx-auto my-6 mt-[13vh] md:mt-[16vh] shadow-sm rounded-3xl flex flex-col justify-center items-center gap-1 h-[50vh] md:h-[70vh]">
      <div className="absolute z-0 inset-0">
      <Image
        src={imageOne}
        alt="contactus-image"
        fill
        priority
        className="object-cover z-0"
      />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white space-y-6 px-6 p y-8 max-w-5xl mx-auto">
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.2 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-5xl font-semibold text-white/90"
          >
            Contact Us
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
