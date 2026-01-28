'use client';

import BrandButton from '@/components/ui/BrandButton';
import { motion } from 'motion/react';

const SolutionsCta = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-360 mx-auto bg-brandGreen my-24 rounded-3xl p-8 md:p-20 border-5 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
            <div className="flex flex-col justify-center items-center text-black max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-7xl font-black uppercase italic leading-none mb-6">
                    Let’s Build the Right Solution Together
                </h2>
                <p className="text-xl md:text-3xl font-bold mb-10 max-w-2xl">
                    Whether you’re starting from scratch or improving an existing system, we help you turn ideas into reliable digital products.
                </p>
                <BrandButton
                    buttonPosition="center"
                    button="Start a Discovery Call"
                    navigateTo="#"
                    backgroundColor="brandYellow"
                />
            </div>
        </motion.section>
    );
};

export default SolutionsCta;
