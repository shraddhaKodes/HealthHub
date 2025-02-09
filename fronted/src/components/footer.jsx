import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-15  mt-17 text-sm">
        <div>
          {/* Logo */}
          <div className="flex items-center">
            <img src={assets.logo} alt="Logo" className="w-12 h-12" />
            <span className="text-xl font-bold text-blue-900">HealthHub</span>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            HealthHub is your trusted source for health and wellness
            information, providing expert advice, tips, and resources to help
            you lead a healthier life. Explore our comprehensive guides, product
            recommendations, and personalized health tips.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>HealthHub#19@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ HealthHub.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
