'use client';

import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';

const PromiseSection = () => {
    const promises = [
        {
            label: 'DIRECTION',
            title: 'Instead of noise',
            description: 'We cut through the distractions to provide a clear path forward.',
            color: 'text-brandYellow',
        },
        {
            label: 'SYSTEMS',
            title: 'Instead of guesswork',
            description: 'Proven frameworks that eliminate the "what now?" factor.',
            color: 'text-brandGreen',
        },
        {
            label: 'TOOLS',
            title: 'Instead of theory',
            description: 'Practical, proprietary assets that you can actually use.',
            color: 'text-brandPurple',
        },
    ];

    return (
        <section className="max-w-360 mx-auto my-24 px-4 lg:px-0 relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute -left-10 top-0 text-[15rem] font-black opacity-[0.03] select-none pointer-events-none uppercase italic leading-none">
                Promise
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">
                <div className="lg:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none text-white">
                            The House <br />
                            <span className="text-brandPurple">Promise</span>
                        </h2>
                        <div className="h-2 w-24 bg-brandYellow"></div>
                        <p className="text-xl md:text-2xl text-white font-semibold leading-tight">
                            A Clear Path From Idea to Infrastructure.
                        </p>
                        <p className="text-lg text-black/60">
                            The House exists to help business owners move forward — not in isolation, but within a structured environment.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:w-2/3 w-full">
                    <div className="grid grid-cols-1 gap-px bg-black/5">
                        {promises.map((promise, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white group py-12 md:px-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 hover:bg-brandGray/30 transition-colors"
                            >
                                <div className={`text-sm font-black tracking-widest ${promise.color} w-24 shrink-0`}>
                                    {promise.label}
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-3xl font-black uppercase italic text-black group-hover:translate-x-2 transition-transform duration-300">
                                        {promise.title}
                                    </h3>
                                    <p className="text-lg text-black/60 max-w-xl">
                                        {promise.description}
                                    </p>
                                </div>
                                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <FiArrowRight className="text-3xl text-brandPurple" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromiseSection;
