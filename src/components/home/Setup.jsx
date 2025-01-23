import React from "react";

const Setup = () => {
  const images = [
    "https://via.placeholder.com/150", // Replace with actual image URLs
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        Share your setup with{" "}
        <span className="text-indigo-600">#FuniroFurniture</span>
      </h1>

      {/* Image Grid */}
      <div class="px-4 w-full  md:px-8 xl:px-22  columns-1 sm:columns-2 lg:columns-3 gap-5">
        <div class="break-inside-avoid mb-6">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031162.jpg"
            alt="Gallery image"
          />
        </div>
        <div class="break-inside-avoid mb-6">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031232.jpg"
            alt="Gallery image"
          />
        </div>
        <div class="break-inside-avoid mb-6">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031357.jpg"
            alt="Gallery image"
          />
        </div>
        <div class="break-inside-avoid mb-6">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031375.jpg"
            alt="Gallery image"
          />
        </div>
        <div class="break-inside-avoid mb-6">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031396.jpg"
            alt="Gallery image"
          />
        </div>
        <div class="break-inside-avoid mb-6">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031414.png"
            alt="Gallery image"
          />
        </div>
      </div>
    </div>
  );
};

export default Setup;
