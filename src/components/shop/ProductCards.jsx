import React from "react";

function ProductCards() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/300x200" // Replace with your image URL
          alt="Stylish cafe chair"
          className="w-full h-48 object-cover"
        />
        {/* Discount Badge */}
        <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
          -30%
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">Syltherine</h2>
        <p className="text-gray-500 text-sm">Stylish cafe chair</p>

        {/* Price Section */}
        <div className="mt-3 flex items-center">
          <span className="text-lg font-semibold text-gray-800">
            Rp 2.500.000
          </span>
          <span className="text-sm text-gray-400 line-through ml-3">
            Rp 3.500.000
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
