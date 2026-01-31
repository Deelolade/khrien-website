'use client';

import { motion } from 'motion/react';
import { FiShield, FiZap, FiTarget } from 'react-icons/fi';

const JoinSection = () => {
    const criteria = [
        { text: 'Want structure, not shortcuts', icon: <FiShield className="text-brandGreen" /> },
        { text: 'Value systems over hype', icon: <FiZap className="text-brandYellow" /> },
        { text: 'Ready to build with clarity', icon: <FiTarget className="text-brandPurple" /> },
    ];

    return (
        <section className="max-w-360 mx-auto my-32 px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-none text-black">
                            Why <br />
                            <span className="text-brandYellow italic">Join?</span>
                        </h2>
                        <p className="text-2xl md:text-3xl font-black uppercase leading-tight text-black max-w-md">
                            Growth Should Be <span className="text-brandPurple underline decoration-4 underline-offset-8">Intentional</span>
                        </p>
                        <p className="text-xl text-black/60 font-medium max-w-xl">
                            The House isn’t just a membership; it’s an operating environment for those ready to stop guessing and start building infrastructure for longevity.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:w-1/2 w-full grid grid-cols-1 gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30 mb-2">Ideal Member Profile</p>
                    {criteria.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-brandGray/30 rounded-2xl flex items-center justify-between group hover:bg-black hover:text-white transition-all duration-300"
                        >
                            <span className="text-2xl font-black uppercase italic">{item.text}</span>
                            <div className="text-3xl group-hover:scale-125 transition-transform">
                                {item.icon}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 p-8 border-2 border-dashed border-black/10 rounded-3xl text-center italic text-black/50 font-medium"
                    >
                        "This is not an open group. It’s a curated environment for builders serious about longevity."
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
