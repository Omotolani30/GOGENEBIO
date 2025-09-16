import React from "react";
import collage from "../assets/genomics.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#511E8C] to-[#9D3CA7] p-5 md:p-10 lg:p-15 flex flex-col md:flex-row items-center md:items-start dark:bg-[#040404] text-white transition duration-400">
      <div className="w-full md:w-[60%] lg:w-[70%] md:mr-[-10rem] lg:mr-[-15rem] text-center md:text-left">
        {/* <button className="flex border bg-[#7639a9] justify-center md:justify-between items-center p-2 rounded-3xl mx-auto md:mx-0 font-semibold border-none text-xs text-white"></button> */}
        <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-0">
          <span class="text-sm font-medium">
            ✨ GOGeneBio — Your Bioinformatics Launchpad
          </span>
        </div>
        <p className="font-bold text-[28px] md:text-[36px] lg:text-[48px] mt-5">
          Learn Bioinformatics & Genomics From Scratch — No Experience Needed
        </p>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] w-full md:w-[70%] lg:w-[50%] mt-4">
          Are you curious about genomics & bioinformatics but don't know where
          to start? GOGeneBio is designed just for people like you. No prior
          experience needed. You'll gain real skills, not just theory.
        </p>
        <div className="flex w-full md:w-[70%] lg:w-[50%] mt-7 mx-auto md:mx-0 gap-4 md:gap-5 justify-center md:justify-start">
          <button className="bg-[#9D3CA7] text-white px-4 py-2 md:px-6 md:py-3 rounded-4xl cursor-pointer">
            Contact Us
          </button>

          <Link to={"/form"}>
            <button className="border border-[#9D3CA7] text-white px-4 py-2 md:px-6 md:py-3 rounded-4xl cursor-pointer">
              Register Now
            </button>
          </Link>
        </div>
      </div>
      

      <div className="w-full md:w-[30%] lg:w-auto mt-10 md:mt-0 ml-0 md:ml-[100px]">
        <img
          className="w-full md:w-auto z-0"
          src={collage}
          alt="Genomics Collage"
        />
      </div>
    </div>
  );
};

export default Hero;
