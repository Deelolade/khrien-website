'use client';

import { motion } from 'motion/react';
import { FiTarget, FiActivity, FiEye, FiUsers, FiBarChart } from 'react-icons/fi';

const WhyChooseUs = () => {
    const advantages = [
        {
            title: 'Deep technical expertise',
            icon: <FiTarget />,
        },
        {
            title: 'Strong product and UX thinking',
            icon: <FiActivity />,
        },
        {
            title: 'Creative insight from branding and storytelling',
            icon: <FiEye />,
        },
        {
            title: 'Long-term partnership mindset',
            icon: <FiUsers />,
        },
        {
            title: 'Solutions built for scale, not shortcuts',
            icon: <FiBarChart />,
        },
    ];

    return (
        <section className="max-w-360 mx-auto my-24 bg-zinc-900 text-white p-8 md:p-20 rounded-3xl overflow-hidden relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-brandPurple/20 to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
                        Why <span className="text-brandYellow">Choose</span> Us
                    </h2>
                    <p className="text-xl md:text-2xl font-bold mb-8 italic">
                        Where Technology Meets Creative Thinking
                    </p>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                        We’re not just developers — we think in systems, brands, and experiences.
                        This combination allows us to build software that doesn’t just work — it makes sense.
                    </p>
                </div>

                <div className="space-y-4">
                    {advantages.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-center gap-4 p-5 bg-zinc-800/50 rounded-2xl border border-zinc-700 hover:bg-brandYellow transition-colors group"
                        >
                            <div className="text-brandYellow group-hover:text-white text-2xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <p className="text-lg md:text-xl font-semibold">
                                {item.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
