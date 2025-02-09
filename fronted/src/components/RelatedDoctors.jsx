import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";
import { motion } from "framer-motion";

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const filteredDoctors = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );

      setRelDoc(filteredDoctors);
      setLoading(false);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="container mx-auto px-5 md:px-12 py-10 text-gray-900">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Related Doctors</h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-500 text-center text-lg">Loading doctors...</p>
      ) : relDoc.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {relDoc.slice(0, 8).map((doctor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-300 rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all cursor-pointer"
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
                window.scrollTo(0, 0);
              }}
            >
              <img
                className="w-full h-48 object-cover bg-gray-100"
                src={doctor.image}
                alt={doctor.name}
              />
              <div className="p-4 text-center">
                {/* Availability Status */}
                <p
                  className={`text-sm flex items-center justify-center gap-2 ${
                    doctor.available ?? true ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      doctor.available ?? true ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></span>
                  {doctor.available ?? true ? "Available" : "Not Available"}
                </p>
                <h2 className="text-lg font-semibold mt-2">{doctor.name}</h2>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-gray-500 text-center text-lg">
          No related doctors available.
        </p>
      )}
    </div>
  );
};

export default RelatedDoctors;
