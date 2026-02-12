import React from 'react';
import HeroSection from './HeroSection';
import TextMarquee from './TextMarquee';
import AboutContent from './AboutContent';
import ValuesSection from './ValuesSection';
import ApproachSection from './ApproachSection';
import TrustSection from '@/components/TrustSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Our Mission and Values',
  description: "Learn about Khrien's approach to creative excellence, our core values, and how we help business owners build smarter solutions.",
};

const AboutPage = () => {
  return (
    <main className="px-4 lg:px-9 min-h-screen">
      <HeroSection />
      <TextMarquee />
      <AboutContent />
      <ValuesSection />
      <ApproachSection />
      <TrustSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
