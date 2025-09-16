import React from "react";
import { keyFeatures } from "../../keyFeatures";

const Features = () => {
  const features = keyFeatures.map((feature) => (
    <div
      key={feature.description}
      className="bg-[#F9FAFB] dark:bg-[#1E1E1E] text-black dark:text-white p-10 w-full sm:w-[45%] lg:w-[30%] h-[250px] flex flex-col justify-center items-center gap-3 rounded-lg shadow-md"
    >
      <img src={feature.icon} className="w-10" alt="Feature Icon" />
      <div className="text-center font-semibold">{feature.feature}</div>
      <div className="text-center text-[13px] text-gray-600 dark:text-gray-400">
        {feature.description}
      </div>
    </div>
  ));

  return (
    <div className="bg-[#F3F4F6] dark:bg-[#181818] p-15 flex justify-center items-center flex-col">
      <div className="flex bg-[#E5E7EB] dark:bg-[#1A1A1A] justify-between items-center py-2 px-4 rounded-3xl">
        <p className="font-semibold text-[14px] text-[#9D3CA7]">
          Our Key Features
        </p>
        <p className="ml-2">🔥</p>
      </div>

      <div className="w-full p-5 mt-10 flex gap-5 flex-wrap justify-center items-center">
        {features}
      </div>
    </div>
  );
};

export default Features;
