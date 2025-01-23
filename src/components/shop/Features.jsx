import React from "react";
import { FEATURES } from "./FEATURES_DATA";

const Features = () => {
  

  return (
    <div className="w-full bg-[#f6ff7f] py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {FEATURES.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
