import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-100">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold text-gray-800"
      >
        <h2>ABOUT <span className="text-gray-600">HEALTHHUB</span></h2>
      </motion.div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
        {/* Image */}
        <motion.img 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          className="w-full md:max-w-md rounded-lg "
          src={assets.about_image} 
          alt="About HealthHub" 
        />

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          className="flex flex-col gap-6 text-gray-700 text-lg leading-relaxed"
        >
          <p><span className="font-semibold text-gray-700">HealthHub</span> is your all-in-one digital healthcare companion, designed to simplify the way you connect with trusted medical professionals.</p>
          <p>From hassle-free appointment booking to seamless health record management, we ensure that quality healthcare is always within your reach.</p>

          <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
          <p>To empower individuals with easy access to healthcare solutions, ensuring a healthier and more connected world.</p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16 text-2xl font-bold text-gray-800"
      >
        <h2>WHY <span className="text-gray-600">CHOOSE HEALTHHUB?</span></h2>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          { title: "SMART APPOINTMENTS", text: "Effortless booking with real-time availability of top doctors." },
          { title: "ACCESS ANYTIME", text: "24/7 healthcare access from anywhere, at your convenience." },
          { title: "PERSONALIZED CARE", text: "Tailored health insights & reminders for proactive well-being." }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="border border-gray-300 p-6 sm:p-10 rounded-lg text-center text-gray-800 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
