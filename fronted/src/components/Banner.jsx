import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <motion.div 
            className='flex bg-gray-500 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-16 md:mx-10 min-h-[320px]'
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
        >
            {/* ------- Left Side ------- */}
            <div className='flex-1 py-6 sm:py-6 md:py-10 lg:py-12'>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white'
                >
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Doctors</p>
                </motion.div>
                <motion.button
                    onClick={() => { navigate('/login'); scrollTo(0, 0); }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className='bg-white text-sm sm:text-base text-gray-650 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'
                >
                    Create account
                </motion.button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[330px] relative'>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='w-full absolute bottom-0 right-0 max-w-md' 
                    src={assets.appointment_img} 
                    alt="Appointment"
                />
            </div>
        </motion.div>
    );
}

export default Banner;
