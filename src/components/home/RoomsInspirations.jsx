import React from "react";

function RoomsInspirations() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#fef8f3] p-8 lg:p-16">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-gray-800">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="mt-4 text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600">
          Explore More
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 relative flex items-center">
        {/* Main Card */}
        <div className="relative w-2/3 h-96 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6hmqsbvVEI8Z8S5c9vDXSMeN~pKf8syqmMXdB0Ez5B0IE8g0bVZ58skFViuQ~2GbXhhpsCAWodO8e6e~DJvMQiiy8l7DrsVNCr6EceFIjUSoYTQZ6Ktvqdzb~qsg1oDInOXSA8d~3tk2-G~55Dvpirfyp5HRBPdwAET~Dy-HQIs3FcST95jc8r1LO33ZWa4MYC73eGfb29UQtfDGmzE~hK3Da10ZvpT-0SD3Ud2~kfxOCYzRIcXrYE9Gy4~FFpZW1J7Fcsag6SpgwX6G8VVZULi~x0YGKJYuMFNQhpcHlfDIMu05A1s~oRm9FpRodsX473wh1TMJKo12ol63TVUJA__"
            alt="Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
            <p className="text-sm text-gray-500">01 — Bed Room</p>
            <h3 className="text-xl font-bold text-gray-800">Inner Peace</h3>
            <button className="mt-2 text-yellow-500 hover:text-yellow-600">
              →
            </button>
          </div>
        </div>

        {/* Secondary Images */}
        <div className="absolute right-0 top-0 flex flex-col gap-4">
          <div className="w-32 h-40 shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/200x300"
              alt="Secondary Room 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-40 shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/200x300"
              alt="Secondary Room 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default RoomsInspirations;
