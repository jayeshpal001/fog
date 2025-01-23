import React from "react";
import HomeBg from '../../assets/home/home-bg.jpeg'
function HomeHeroSection() {
  return (
    <div className="relative flex items-center bg-white ">
      {/* Left Section (Image) */}
      <div className="flex-1">
        <img
          src={HomeBg}// Replace with your image URL
          alt="New Collection"
          className="w-full h-[80vh] rounded-lg shadow-md"
        />
      </div>

      {/* Right Section (Content) */}
      <div className="absolute w- bg-[#f9f4ef] right-10 p-8 rounded-lg shadow-lg max-w-sm">
        <p className="text-sm text-gray-500 font-medium">New Arrival</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Discover Our New Collection
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 bg-[#b5893d] text-white font-semibold px-6 py-2 rounded-lg shadow-sm hover:bg-[#a57d35] transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default HomeHeroSection;
