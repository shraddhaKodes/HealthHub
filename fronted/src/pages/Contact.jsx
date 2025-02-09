import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-100">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold text-gray-800"
      >
        <h2>CONTACT <span className="text-gray-600">HEALTHHUB</span></h2>
      </motion.div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
        
        {/* Image */}
        <motion.img 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          className="w-full md:max-w-md rounded-lg "
          src={assets.contact_image} 
          alt="Contact HealthHub" 
        />

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          className="flex flex-col gap-6 text-gray-700 text-lg leading-relaxed"
        >
          <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
          <p className="text-gray-600">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>
          <p className="text-gray-600">
            <span className="font-semibold">Tel:</span> (415) 555-0132 <br />
            <span className="font-semibold">Email:</span> support@healthhub.com
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Careers at HealthHub</h3>
          <p className="text-gray-600">
            Join our mission to revolutionize healthcare. Explore our job openings today!
          </p>

          {/* Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="border border-gray-600 text-gray-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            Explore Careers
          </motion.button>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
