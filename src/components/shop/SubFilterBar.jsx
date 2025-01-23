import React from "react";

const SubFilterBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2  border border-gray-300 bg-[#f6ff7f]">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Filter */}
        <button className="flex items-center text-gray-600">
          <span className="material-icons">filter_list</span>
          <span className="ml-1">Filter</span>
        </button>

        {/* Grid/List View Icons */}
        <button className="text-gray-600">
          <span className="material-icons">grid_view</span>
        </button>
        <button className="text-gray-600">
          <span className="material-icons">view_list</span>
        </button>

        {/* Results Count */}
        <span className="text-gray-600">Showing 1–16 of 32 results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Show Results Input */}
        <label className="flex items-center">
          <span className="text-gray-600 mr-2">Show</span>
          <input
            type="number"
            className="w-12 p-1 border border-gray-300 rounded text-center"
            defaultValue={16}
          />
        </label>

        {/* Sort By Dropdown */}
        <label className="flex items-center">
          <span className="text-gray-600 mr-2">Short by</span>
          <select
            className="p-1 border border-gray-300 rounded bg-white"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SubFilterBar;
