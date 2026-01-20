'use client';

import { motion } from 'motion/react';
import { FaFistRaised, FaLightbulb, FaGem, FaHandshake, FaTrophy } from 'react-icons/fa';
import { IconType } from 'react-icons';

type ValueItem = {
  title: string;
  description: string;
  icon: IconType;
  iconBgColor: string;
  iconColor: string;
  hoverBgColor: string;
};

const ValuesSection = () => {
  const values: ValueItem[] = [
    {
      icon: FaFistRaised,
      title: 'Empowerment',
      description:
        'We empower our clients with the tools, knowledge, and support they need to thrive in a digital-first world',
      iconBgColor: 'bg-brandPurple',
      iconColor: 'text-white',
      hoverBgColor: 'hover:bg-brandPurple',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description:
        'We constantly push the boundaries of creativity and technology to deliver solutions that are ahead of the curve.',
      iconBgColor: 'bg-brandGreen',
      iconColor: 'text-white',
      hoverBgColor: 'hover:bg-brandGreen',
    },
    {
      icon: FaGem,
      title: 'Impact',
      description:
        'We believe in the power of digital to create real, lasting impact on businesses and communities alike.',
      iconBgColor: 'bg-brandPurple',
      iconColor: 'text-white',
      hoverBgColor: 'hover:bg-brandPurple',
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description:
        'Our clients trust us because we always act with integrity, maintaining transparency and honesty in everything we do',
      iconBgColor: 'bg-brandYellow',
      iconColor: 'text-black',
      hoverBgColor: 'hover:bg-brandYellow hover:text-black',
    },
    {
      icon: FaTrophy,
      title: 'Excellence',
      description:
        'Your website is often the first interaction customers have with your brand.',
      iconBgColor: 'bg-brandPurple',
      iconColor: 'text-white',
      hoverBgColor: 'hover:bg-brandPurple',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-360 mx-auto my-12">
      <h1 className="text-4xl md:text-6xl font-black mb-5 md:mb-8">
        Our <span className="text-brandYellow">Core</span> Values
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {/* First row - 3 cards */}
        {values.slice(0, 3).map((value, idx) => (
          <motion.div
            variants={itemVariants}
            className={`bg-zinc-900 border border-zinc-800 text-white p-8 rounded-xl flex flex-col items-start space-y-4 ${value.hoverBgColor} transition-all duration-300 group`}
            key={idx}
          >
            <div
              className={`${value.iconBgColor} size-20 rounded-full flex items-center justify-center`}
            >
              <value.icon className={`size-10 ${value.iconColor}`} />
            </div>
            <h3 className="text-xl md:text-3xl font-bold">{value.title}</h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed group-hover:text-inherit">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Second row - 2 cards centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 mx-auto"
      >
        {values.slice(3).map((value, idx) => (
          <motion.div
            variants={itemVariants}
            className={`bg-zinc-900 border border-zinc-800 text-white p-8 rounded-xl flex flex-col items-start space-y-4 ${value.hoverBgColor} transition-all duration-300 group`}
            key={idx}
          >
            <div
              className={`${value.iconBgColor} size-20 rounded-full flex items-center justify-center`}
            >
              <value.icon className={`size-10 ${value.iconColor}`} />
            </div>
            <h3 className="text-xl md:text-3xl font-bold">{value.title}</h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed group-hover:text-inherit">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ValuesSection;
