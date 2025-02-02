import React from 'react';
import { motion } from 'framer-motion';
import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import {AppContext} from '../context/context.jsx';
import { useContext } from 'react';
const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col items-center gap-6 my-2 text-black bg-white rounded-lg p-6 md:mx-10'
        >
            <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-3xl font-semibold'
            >
                Top Doctors to Book
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='sm:w-1/3 text-center text-sm'
            >
                Simply browse through our extensive list of trusted doctors.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0'
            >
                {doctors.slice(0, 12).map((item, index) => (
                    <motion.div
                        key={index}
                        onClick={() => {
                            navigate(`/appointment/${item._id}`);
                            window.scrollTo(0, 0);
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className='border border-gray-300 rounded-xl overflow-hidden cursor-pointer shadow-lg bg-gray-100 hover:shadow-xl transition-all duration-300'
                    >
                        <img className='w-full h-48 object-cover bg-gray-50' src={item.image} alt={item.name} />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.button 
                onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className='bg-blue-500 text-white px-12 py-3 rounded-full mt-10 shadow-md hover:shadow-lg transition-all duration-300'
            >
                More
            </motion.button>
        </motion.div>
    );
};

export default TopDoctors;
