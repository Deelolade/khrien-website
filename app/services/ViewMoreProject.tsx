import React from 'react'
import { motion } from 'motion/react'
import { FaBehance } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const ViewMoreProject = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-360 mx-auto bg-brandGray my-12 rounded-3xl p-8 md:p-16 lg:p-20"
        >
            <div className="flex flex-col items-center">
                <h1 className='text-3xl md:text-5xl lg:text-7xl font-black text-black uppercase mb-10 leading-none'>View More projects</h1>
                <p className='text-lg md:text-xl font-bold text-black/80 leading-tight'>View more of our projects</p>
                <div className="flex flex-row justify-center items-center gap-4 mt-6">
                    <a href="https://www.behance.net/jakeayodeji" target="_blank" rel="noopener noreferrer" className='text-lg lg:text-xl text-white bg-brandPurple font-bold whitespace-nowrap border-5 rounded-full border-r border-t border-black px-5 lg:px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-400 ease-in-out flex justify-center items-center gap-2'> <span><FaBehance /></span>View on Behance</a>
                    <a href="https://pin.it/6cl4xHG1h" target="_blank" rel="noopener noreferrer" className='text-lg lg:text-xl text-white bg-brandGreen font-bold whitespace-nowrap border-5 rounded-full border-r border-t border-black px-5 lg:px-10 lg:py-3 hover:bg-brandGreen hover:text-white transition-all duration-400 ease-in-out  flex justify-center items-center gap-2'> <span><FaPinterestP /></span>View on Pinterest</a>
                </div>
            </div>
        </motion.section>
    )
}

export default ViewMoreProject