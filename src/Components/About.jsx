import React from "react";
import image from "../assets/about.jpg";

const About = () => {
  return (
    <div className="p-5 md:p-10 lg:p-15 flex flex-col lg:flex-row justify-between items-center dark:bg-[#040404] dark:text-white transition duration-400">
      {/* Image Section */}
      <div className="hidden lg:block w-[40%] rounded-xl border border-gray-300 dark:border-gray-700">
        <img className="w-full rounded-xl" src={image} alt="About GOGeneBio" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-[50%]">
        <button className="flex dark:bg-[#1A1A1A] bg-[#E5E7EB] justify-between items-center p-2 px-4 rounded-3xl">
          <p className="font-semibold text-[14px] text-[#9D3CA7]">
            Program Overview
          </p>
        </button>

        <div className="flex flex-col gap-4 mt-6">
          <p className="text-[14px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed">
            Ever wondered how DNA shapes medicine, food, and technology? That's
            exactly what you'll discover at the Global Outreach on Genomics &
            Bioinformatics (GOGeneBio) — happening worldwide this October 2025.
            This is your chance to unlock the basics of bioinformatics and see
            how it's transforming the world — from curing diseases to growing
            better crops.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
