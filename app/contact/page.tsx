import React from 'react';
import HeroSection from './HeroSection';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
const page = () => {
  return (
    <div>
      <HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default page;
