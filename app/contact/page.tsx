import React from 'react';
import HeroSection from './HeroSection';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  return (
    <div>
      <ToastContainer position="top-right" />
      <HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default page;
