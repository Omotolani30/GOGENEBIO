import React from "react";
import { Link } from "react-router-dom";
import { keyFeatures } from "../../keyFeatures";

const Features = () => {
  return (
    <div className="w-full p-15 bg-[#b241b7]/5 lg:bg-white flex justify-center items-center flex-col relative">
      {/* <div className="hidden lg:block">
        <div className="absolute bg-[#3d168b]/5 -left-0 top-0 w-100 h-120 blur-lg rounded-full z-30"></div>
        <div className="absolute bg-[#66ff00]/2 left-70 top-0 w-150 h-150 blur-lg rounded-full z-30"></div>
        <div className="absolute bg-[#b241b7]/5 -right-0 top-0 w-100 h-120 blur-lg rounded-full z-30"></div>
      </div> */}
      <div className="bg-[#b241b7]/10 py-2 px-4 rounded-3xl">
        <p className="font-semibold text-sm text-[#b241b7]">Our Key Features</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[100vw] px-8 lg:w-full lg:px-5 mt-10 z-50">
        {/* {features} */}
        {keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="border transition duration-300 hover:shadow-md overflow-hidden [border-image:linear-gradient(to_bottom,#66ff00,#b241b7)_1] px-4 py-6 bg-white flex flex-col gap-4"
          >
            <h1 className="text-base font-semibold">{feature.feature}</h1>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <Link to="/form">
        <button className=" w-full text-white py-2 px-3 font-medium bg-linear-to-r from-[#b241b7] to-[#3d168b] rounded-full text-sm mt-10 animate-bounce">
          Register Now &rarr;
        </button>
      </Link>
    </div>
  );
};

export default Features;
