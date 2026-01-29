'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FiUnlock, FiRepeat, FiSettings, FiGrid } from 'react-icons/fi';

const ToolsSection = () => {
    const points = [
        {
            title: 'Flexible access programs',
            description: 'Scaled to your current path.',
            icon: <FiUnlock />,
        },
        {
            title: 'Ownership paths',
            description: 'Clear routes to full tool ownership.',
            icon: <FiRepeat />,
        },
        {
            title: 'Direct integration',
            description: 'Ongoing support for your systems.',
            icon: <FiSettings />,
        },
    ];

    return (
        <section className="max-w-360 mx-auto my-24 px-4 lg:px-0">
            <div className="bg-black rounded-[3rem] p-8 md:p-20 relative overflow-hidden group">
                {/* Decorative Grid Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 text-brandYellow text-sm font-black uppercase tracking-[0.4em]">
                                <FiGrid /> PROPRIETARY ECOSYSTEM
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] text-white">
                                Tools <br />
                                <span className="text-brandYellow">& Access</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/60 leading-relaxed max-w-md"
                        >
                            Members gain access to a suite of proprietary tools developed by Khrien to support real business operations—provided at no upfront cost.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {points.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="text-2xl text-brandYellow">{point.icon}</div>
                                    <div className="space-y-1">
                                        <h4 className="font-black uppercase text-white tracking-widest text-sm">{point.title}</h4>
                                        <p className="text-white/40 text-sm">{point.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-full min-h-[400px] rounded-3xl bg-white/5 border border-white/10 p-12 flex flex-col justify-between overflow-hidden group-hover:border-brandYellow/30 transition-colors duration-500"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <div className="size-32 rounded-full bg-brandPurple/20 blur-3xl"></div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Deployment Strategy</p>
                                <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white leading-none">
                                    Relevant. <br />
                                    Valuable. <br />
                                    <span className="text-brandPurple">Timely.</span>
                                </h3>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="h-px w-full bg-white/10"></div>
                                <p className="text-xl text-white/80 font-medium">
                                    Tools are introduced based on your specific path—ensuring you only use what creates actual value at your stage.
                                </p>
                                <Link href="/products" className="inline-flex items-center gap-4 text-brandYellow font-black uppercase tracking-widest text-xs">
                                    View Tool Catalog <FiUnlock className="text-lg" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
