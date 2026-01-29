'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';
import houseImage from '@/public/house-image.jpg';

const HouseCta = () => {
    return (
        <section className="max-w-360 mx-auto my-12 px-4 md:px-0 mb-24">
            <div className="relative h-[600px] rounded-3xl overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <Image
                    src={houseImage}
                    fill
                    className="object-cover"
                    alt="House Infrastructure"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                <div className="relative z-10 text-center max-w-4xl px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black uppercase italic text-white leading-tight mb-6"
                    >
                        Step Into the House
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-white/80 mb-12"
                    >
                        If you’re ready to build smarter, grow with intention, and operate within a structured ecosystem, The House is open.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        {/* <BrandButton
                            buttonPosition="center"
                            button="Join the House"
                            navigateTo="#"
                            backgroundColor="brandGreen"
                        /> */}
                        <BrandButton
                            buttonPosition="center"
                            button="Apply for Membership"
                            navigateTo="#"
                            backgroundColor="brandYellow"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HouseCta;
