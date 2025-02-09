import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';
import { motion } from 'framer-motion';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // Toggle for filters

  useEffect(() => {
    if (speciality) {
      setFilteredDoctors(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilteredDoctors(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div className='container mx-auto px-5 md:px-12 py-8'>
      {/* Page Title */}
      <h1 className='text-3xl font-bold text-gray-800 text-center mb-6'>
        Find a <span className='text-blue-600'>Specialist</span>
      </h1>

      {/* Filter Toggle Button (Only on Small Screens) */}
      <div className="sm:hidden flex justify-center mb-5">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter Options */}
      <div className={`flex flex-wrap justify-center gap-3 mb-8 ${showFilters ? 'flex' : 'hidden sm:flex'}`}>
        {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec) => (
          <button
            key={spec}
            onClick={() => {
              navigate(speciality === spec ? '/doctors' : `/doctors/${spec}`);
              setShowFilters(false); // Hide filters after selection
            }}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md ${
              speciality === spec
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {spec}
          </button>
        ))}
      </div>

      {/* Doctors List */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
      >
        {filteredDoctors.length > 0 ? (
          filteredDoctors.slice(0, 12).map((doctor) => (
            <motion.div
              key={doctor._id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className='border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all cursor-pointer'
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
                window.scrollTo(0, 0);
              }}
            >
              <img
                className='w-full h-52 object-cover bg-gray-50'
                src={doctor.image}
                alt={doctor.name}
              />
              <div className='p-5 text-center'>
                <p className='text-green-600 text-sm flex items-center justify-center gap-2 mb-2'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span> Available
                </p>
                <h2 className='text-xl font-semibold text-gray-900'>{doctor.name}</h2>
                <p className='text-gray-600 text-sm mt-1'>{doctor.speciality}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className='text-gray-500 text-center col-span-full text-lg'>
            No doctors available for this specialty.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Doctors;
