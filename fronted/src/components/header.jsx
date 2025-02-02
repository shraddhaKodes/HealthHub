import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className='flex flex-col md:flex-row flex-wrap bg-gray-500 rounded-lg px-6 md:px-10 lg:px-20 py-6 md:py-[6vw]'
        >
            {/* Header Left */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 text-white py-10 m-auto md:py-[5w] md:mb-[-30px]'>
                <motion.p 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight'
                >
                    Book Appointment <br /> With Trusted Doctors
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='flex flex-col md:flex-row items-center gap-3 text-sm font-light'
                >
                    <img className='w-28' src={assets.group_profiles} alt="group profiles" />
                    <p>
                        Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                        schedule your appointment hassle-free.
                    </p>
                </motion.div>
                <motion.a 
                    href='#speciality' 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 shadow-lg hover:shadow-xl transition-all'
                >
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="arrow" />
                </motion.a>
            </div>

            {/* Header Right */}
            <div className='md:w-1/2  relative flex justify-center'>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='w-full  md:absolute bottom-0 h-auto rounded-lg ' 
                    src={assets.header_img} 
                    alt="header" 
                />
            </div>
        </motion.div>
    );
};

export default Header;
