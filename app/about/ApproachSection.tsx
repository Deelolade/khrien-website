'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiPlus, FiX } from 'react-icons/fi';

type ApproachItem = {
  number: string;
  title: string;
  description: string;
};

const ApproachSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const approaches: ApproachItem[] = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your unique needs and goals.',
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'Developing a comprehensive plan tailored to your business objectives and market position.',
    },
    {
      number: '03',
      title: 'Execution',
      description:
        'Bringing the strategy to life with precision, creativity, and cutting-edge technology.',
    },
    {
      number: '04',
      title: 'Support',
      description:
        'Providing ongoing assistance and optimization to ensure long-term success.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="max-w-360 mx-auto my-6 rounded-3xl p-6 md:p-16"
    >
      <h2 className="text-4xl md:text-6xl font-black mb-12">
        <span className="text-white">Our </span>
        <span className="text-brandYellow">Approach</span>
      </h2>

      <div className="space-y-4">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className="border-b border-zinc-800 pb-4"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-brandYellow">
                {approach.number}. {approach.title}
              </h3>
              <span className="text-white text-2xl transition-transform duration-300">
                {openIndex === index ? <FiX /> : <FiPlus />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 text-lg pb-4">
                    {approach.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ApproachSection;
