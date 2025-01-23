import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-yellow-600 font-bold text-lg">▲</div>
        <span className="text-xl font-semibold text-gray-800">Furniro</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li className="hover:text-gray-800 cursor-pointer">Home</li>
        <li className="hover:text-gray-800 cursor-pointer">Shop</li>
        <li className="hover:text-gray-800 cursor-pointer">About</li>
        <li className="hover:text-gray-800 cursor-pointer">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <i className="fas fa-user"></i>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <i className="fas fa-search"></i>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <i className="fas fa-heart"></i>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
