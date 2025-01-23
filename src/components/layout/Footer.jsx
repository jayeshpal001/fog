import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Funiro.</h2>
          <address className="mt-4 text-gray-600 not-italic">
            400 University Drive Suite 200<br />
            Coral Gables, FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">Shop</li>
            <li className="hover:text-gray-800 cursor-pointer">About</li>
            <li className="hover:text-gray-800 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Payment Options</li>
            <li className="hover:text-gray-800 cursor-pointer">Returns</li>
            <li className="hover:text-gray-800 cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 border border-gray-300 rounded px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-600">
        2023 Funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
