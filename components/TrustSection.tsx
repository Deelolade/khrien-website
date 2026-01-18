"use client"
import { motion } from "motion/react";
import LogoMarquee from "./LogoMarquee";

const TrustSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className=" relative max-w-360 mx-auto bg-brandGreen my-6 shadow-sm rounded-3xl p-8 md:p-20 text-center overflow-hidden"
        >
            <div className="text-2xl font-black text-center">
                <p className='capitalize'>TRUSTED BY INDUSTRY LEADERS</p>
            </div>
            <h1 className="text-6xl font-black leading-none text-black">
                Proven Track Record of Strategic Excellence
            </h1>
            <p className="text-2xl mt-4">
                We've empowered diverse businesses with tools and services that drive real growth.
            </p>

            <LogoMarquee />
        </motion.section>
    );
};
export default TrustSection;