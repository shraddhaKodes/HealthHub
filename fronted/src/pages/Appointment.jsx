import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { motion } from 'framer-motion';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState('');

  const navigate = useNavigate();
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  useEffect(() => {
    const fetchDocInfo = () => {
      const doc = doctors.find((d) => d._id === docId);
      setDocInfo(doc || null);
    };
    if (doctors.length > 0) fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) generateAvailableSlots();
  }, [docInfo]);

  const generateAvailableSlots = () => {
    let today = new Date();
    let slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let startTime = new Date(currentDate);
      startTime.setHours(10, 0, 0, 0);
      let endTime = new Date(currentDate);
      endTime.setHours(18, 0, 0, 0);

      let timeSlots = [];

      while (startTime < endTime) {
        let formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({ datetime: new Date(startTime), time: formattedTime });
        startTime.setMinutes(startTime.getMinutes() + 30);
      }

      slots.push(timeSlots);
    }
    setDocSlots(slots);
  };

  const bookAppointment = () => {
    if (!selectedTime) {
      alert('Please select a time slot before booking.');
      return;
    }
    alert(`Appointment booked with ${docInfo.name} on ${docSlots[selectedDateIndex][0].datetime.toDateString()} at ${selectedTime}`);
  };

  return docInfo ? (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-100 text-gray-800">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900">Book an Appointment</h1>
        <p className="text-gray-600 text-sm mt-2">Get personalized healthcare from top-rated professionals.</p>
      </motion.div>

      {/* Doctor Info Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
      >
        {/* Doctor Image */}
        <div className="w-full sm:w-1/3">
          <img className="w-full h-full object-cover" src={docInfo.image} alt={docInfo.name} />
        </div>

        {/* Doctor Details */}
        <div className="p-6 sm:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-900">{docInfo.name} 
            <img className="w-5 inline-block ml-1" src={assets.verified_icon} alt="Verified" />
          </h2>
          <p className="text-gray-600 mt-1">{docInfo.degree} - {docInfo.speciality}</p>
          <p className="text-sm text-gray-500 mt-2">{docInfo.about}</p>
          
          <div className="flex items-center justify-between mt-5">
            <p className="text-gray-700 font-semibold">
              Appointment Fee: <span className="text-blue-600">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Booking Slots */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800">Available Time Slots</h3>
        <p className="text-gray-500 text-sm">Select a date and time for your appointment</p>

        {/* Date Selection */}
        <div className="flex gap-3 overflow-x-scroll mt-4">
          {docSlots.map((slots, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedDateIndex(index)}
              className={`py-4 px-5 min-w-[70px] text-center rounded-lg cursor-pointer transition ${
                selectedDateIndex === index ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              <p className="text-sm font-semibold">{daysOfWeek[slots[0].datetime.getDay()]}</p>
              <p className="text-lg font-bold">{slots[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time Slot Selection */}
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots[selectedDateIndex]?.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(slot.time)}
              className={`px-4 py-2 text-sm rounded-md transition ${
                selectedTime === slot.time ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>

        {/* Book Appointment Button */}
        <button 
          onClick={bookAppointment} 
          className="mt-6 px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
        >
          Book Appointment
        </button>
      </div>

      {/* Related Doctors Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12"
      >
        <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
      </motion.div>
    </div>
  ) : (
    <p className="text-center text-gray-600">Loading doctor details...</p>
  );
};

export default Appointment;
