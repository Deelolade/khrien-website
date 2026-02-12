import React from 'react';
import HeroSection from './HeroSection';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Khrien',
  description: 'Have a project in mind or need a consultation? Reach out to Khrien today and let\'s build something smarter together.',
};

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
