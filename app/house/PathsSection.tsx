'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import purplePattern from '@/public/brandPurplePatterns.png';
import yellowPattern from '@/public/brandYellowPatterns.png';

const PathsSection = () => {
    const paths = [
        {
            id: '01',
            title: 'Foundation',
            subtitle: 'Builders Just Starting Out',
            description: 'Designed for owners at the beginning — those with ideas, skills, or early traction but no clear structure yet.',
            focus: ['Clarity & direction', 'Operations & workflows', 'Offer definition'],
            outcome: 'A stable foundation ready to support real growth.',
            color: 'brandPurple',
            pattern: purplePattern,
        },
        {
            id: '02',
            title: 'Structure',
            subtitle: 'Businesses Ready to Scale',
            description: 'For founders already operating but needing better systems, processes, and visibility.',
            focus: ['Operational structure', 'Team workflows', 'Automation', 'Growth systems'],
            outcome: 'A business that runs with clarity and consistency.',
            color: 'brandYellow',
            pattern: yellowPattern,
        },
        {
            id: '03',
            title: 'Occupancy',
            subtitle: 'Mature Businesses Seeking Renewal',
            description: 'For established businesses looking to evolve, optimize, or reposition for the future.',
            focus: ['Process optimization', 'Innovation & renewal', 'Sustainability'],
            outcome: 'A business that remains relevant and future-ready.',
            color: 'brandGray',
            pattern: null,
        },
    ];

    return (
        <section className="max-w-360 mx-auto my-32 px-4 lg:px-0">
            <div className="flex flex-col md:flex-row justify-center items-center mb-20 gap-8">
                <div className="bg-red-300">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black uppercase italic leading-none text-white"
                    >
                        <span className="text-brandPurple">Paths</span>
                    </motion.h2>
                    <p className="text-lg md:text-xl font-medium max-w-lg mb-6 md:mb-0">
                        Every member enters at their level and grows through clearly defined paths.
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:w-1/3 text-right"
                >
                    <p className="text-lg md:text-xl text-black/60 font-medium italic">
                        Just like a real building, strong businesses are built in stages. These paths represent phases of growth — not a hierarchy.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {paths.map((path, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                        className="relative group h-full"
                    >
                        <div className={`h-full rounded-3xl overflow-hidden flex flex-col border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 bg-white`}>
                            {/* Pattern Header */}
                            <div className={`h-40 relative flex items-center justify-center overflow-hidden ${path.color === 'brandPurple' ? 'bg-brandPurple' : path.color === 'brandYellow' ? 'bg-brandYellow' : 'bg-brandGreen'}`}>
                                {path.pattern && (
                                    <Image src={path.pattern} fill className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="" />
                                )}
                                <span className="relative z-10 text-8xl font-black italic opacity-20 text-white group-hover:opacity-40 transition-opacity">
                                    {path.id}
                                </span>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-black uppercase italic mb-1 text-black">{path.title}</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest text-brandPurple/60">{path.subtitle}</p>
                                </div>

                                <p className="text-lg text-black/70 mb-8 flex-1">
                                    {path.description}
                                </p>

                                <div className="space-y-6">
                                    <div className="pt-6 border-t border-black/5">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-4">Core Focus Areas</p>
                                        <ul className="flex flex-wrap gap-2">
                                            {path.focus.map((item, i) => (
                                                <li key={i} className="px-3 py-1 bg-brandGray/50 rounded-full text-xs font-bold text-black uppercase">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={`p-6 rounded-2xl ${path.color === 'brandPurple' ? 'bg-brandPurple text-white' : path.color === 'brandYellow' ? 'bg-brandYellow text-black' : 'bg-brandGreen text-white'}`}>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-2">Outcome</p>
                                        <p className="text-lg font-black uppercase italic leading-tight">
                                            {path.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PathsSection;
