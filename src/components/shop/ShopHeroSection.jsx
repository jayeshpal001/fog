import React from "react";
import heroBg from "../../assets/shop/shop-bg.jpeg"; // Correctly import the image

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-48 border-2 border-purple-300 bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }} // Use the imported image here
    >
      <div className="w-full h-full bg-white/70 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-black">Shop</h1>
        <p className="text-gray-600">Home &gt; Shop</p>
      </div>
    </div>
  );
};

export default HeroSection;
