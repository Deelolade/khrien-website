'use client';

import { motion } from 'motion/react';

const ProcessSection = () => {
    const steps = [
        {
            title: 'Discovery',
            description: 'We understand your business, users, challenges, and goals before a single line of code is written.',
            number: '01',
            color: 'bg-brandYellow',
        },
        {
            title: 'UX & Product Design',
            description: 'We design intuitive user experiences and system flows that are simple, scalable, and human-centered.',
            number: '02',
            color: 'bg-brandGreen',
        },
        {
            title: 'Engineering',
            description: 'Clean, secure, and scalable code — built with performance, reliability, and future growth in mind.',
            number: '03',
            color: 'bg-brandPurple',
            textColor: 'text-white',
        },
        {
            title: 'Launch',
            description: 'Thorough testing, deployment, and onboarding to ensure a smooth and confident release.',
            number: '04',
            color: 'bg-brandYellow',
        },
        {
            title: 'Support & Growth',
            description: 'Ongoing support, updates, and improvements as your product and business evolve.',
            number: '05',
            color: 'bg-brandGreen',
        },
    ];

    return (
        <section className="max-w-360 mx-auto my-24 px-4 md:px-0">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
                    How We <span className="text-brandGreen">Build</span>
                </h2>
                <p className="text-xl md:text-3xl font-bold">A Clear Process. No Guesswork.</p>
                <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                    We follow a structured, collaborative process that ensures clarity from day one and stability long after launch.
                </p>
            </div>

            <div className="space-y-8">
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border-5 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${step.color} ${step.textColor || 'text-black'}`}
                    >
                        <div className="text-6xl md:text-8xl font-black opacity-30 italic shrink-0">
                            {step.number}
                        </div>
                        <div className="grow">
                            <h3 className="text-2xl md:text-4xl font-black uppercase italic mb-2">
                                {step.title}
                            </h3>
                            <p className="text-lg md:text-2xl font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;
