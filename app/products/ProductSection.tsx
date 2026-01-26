"use client"
import React from 'react';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: 'Productivity',
      subtitle: 'Quest',
      description: 'Streamline your workflow and boost team productivity with intelligent task management and collaboration tools.',
      backgroundColor: 'bg-brandYellow',
      buttonColor: 'brandPurple',
      navigateTo: 'productivity'
    },
    {
      id: 2,
      title: 'Legal Technology',
      subtitle: 'Firm Desk',
      description: 'Comprehensive legal practice management software designed to help law firms manage cases, clients, and documents efficiently.',
      backgroundColor: 'bg-brandGreen',
      buttonColor: 'brandYellow',
      navigateTo: 'legal-technology',
    },
    {
      id: 3,
      title: 'AI & Creative Technology',
      subtitle: 'Khrien Flow',
      description: 'Harness the power of AI to enhance your creative workflow with intelligent automation and smart design tools.',
      backgroundColor: 'bg-brandPurple',
      buttonColor: 'brandYellow',
      navigateTo: '#'
    },
  ];

  return (
    <section className="max-w-360 mx-auto my-12 px-4 md:px-6 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
          Our Products
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Discover our suite of innovative products designed to transform the way you work
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
            className={`${product.backgroundColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-96`}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-black uppercase">
                  {product.title}
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-black/80 mt-2">
                  {product.subtitle}
                </h4>
              </div>
              <p className="text-base md:text-lg text-black/70 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="mt-8 flex flex-col gap-3">
              <BrandButton
                buttonPosition="start"
                button="Learn More"
                naviagateTo={`products/${product.navigateTo}`}
                backgroundColor={product.buttonColor}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
