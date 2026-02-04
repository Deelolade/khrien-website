"use client"
import React from 'react';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';

const Services = () => {
  const products = [
    {
      id: 1,
      title: 'Branding & Identity',
      subtitle: 'Khrien Service',
      description: 'Strategy-led brand development focused on clarity, credibility, and consistency across digital platforms.',
      backgroundColor: 'bg-brandYellow',
      buttonColor: 'brandPurple',
      navigateTo: 'branding-and-identity'
    },
    {
      id: 2,
      title: 'Graphics Design',
      subtitle: 'Khrien Service',
      description: 'Visual design for digital and print materials that support campaigns, products, and brand communication.',
      backgroundColor: 'bg-brandGreen',
      buttonColor: 'brandYellow',
      navigateTo: 'graphics-design',
    },
    {
      id: 3,
      title: 'Social Media Management',
      subtitle: 'Khrien Service',
      description: 'Strategy-driven content planning and execution for brands building visibility and authority online.',
      backgroundColor: 'bg-brandPurple',
      buttonColor: 'brandYellow',
      navigateTo: 'social-media-management'
    },
    {
      id: 4,
      title: 'Content Creation',
      subtitle: 'Khrien Service',
      description: 'Purpose-built written, visual, and multimedia content aligned with product and brand goals.',
      backgroundColor: 'bg-brandPurple',
      buttonColor: 'brandYellow',
      navigateTo: 'content-creation'
    },
    {
      id: 5,
      title: 'Motion Graphics & Video Production',
      subtitle: 'Khrien Service',
      description: 'Story-driven motion and video content designed to explain, promote, and engage.',
      backgroundColor: 'bg-brandYellow',
      buttonColor: 'brandPurple',
      navigateTo: 'motion-graphics-and-video-production'
    },
    {
      id: 6,
      title: 'UI/UX & Web Solutions',
      subtitle: 'Khrien Service',
      description: 'User-focused design and development for web platforms and digital products.',
      backgroundColor: 'bg-brandGreen',
      buttonColor: 'brandYellow',
      navigateTo: 'ui-ux-and-web-solutions'
    }
  ];

  return (
    <section className="max-w-360 mx-auto px-4 md:px-6 lg:py-12 my-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Discover our suite of innovative services designed to transform the way you work
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col justify-between min-h-96`}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 uppercase">
                  {product.title}
                </h3>
              </div>
              <p className="text-white/60 text-lg">
                {product.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <BrandButton
                buttonPosition="start"
                button="Learn More"
                navigateTo={`services/${product.navigateTo}`}
                backgroundColor={product.buttonColor}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services