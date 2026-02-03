'use client';

import { motion } from 'motion/react';
import {
    FiMonitor,
    FiSmartphone,
    FiTrello,
    FiSettings,
    FiPackage,
    FiLayers
} from 'react-icons/fi';

const WhatWeBuild = () => {
    const solutions = [
        {
            title: 'Custom web applications',
            icon: <FiMonitor />,
            color: 'bg-brandYellow',
        },
        {
            title: 'Mobile apps (iOS & Android)',
            icon: <FiSmartphone />,
            color: 'bg-brandGreen',
        },
        {
            title: 'Internal business tools & dashboards',
            icon: <FiTrello />,
            color: 'bg-brandPurple',
            textColor: 'text-white',
        },
        {
            title: 'Workflow automation systems',
            icon: <FiSettings />,
            color: 'bg-brandYellow',
        },
        {
            title: 'SaaS products & platforms',
            icon: <FiPackage />,
            color: 'bg-brandGreen',
        },
        {
            title: 'Enterprise software solutions',
            icon: <FiLayers />,
            color: 'bg-brandPurple',
            textColor: 'text-white',
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="max-w-360 mx-auto my-12 px-4 md:px-0">
            <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
                    What We <span className="text-brandYellow">Build</span>
                </h2>
                <p className="text-xl md:text-3xl font-bold max-w-3xl leading-tight">
                    Apps. Platforms. Tools. Built to Fit Your Reality.
                </p>
                <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl">
                    We build purpose-driven digital products tailored to your workflow, users, and long-term goals.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {solutions.map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors`}
                    >
                        <div className="text-3xl mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            {item.title}
                        </h3>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WhatWeBuild;
