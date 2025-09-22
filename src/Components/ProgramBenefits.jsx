import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const ProgramBenefits = () => {
  const benefits = [
    "Understand the basics of DNA, genes, and genomes — what they are, why they matter",
    "Understand how your field of study relates to Genomics and Bioinformatics",
    "Run simple bioinformatics tools: retrieve genome data, clean it, assemble it",
    "Annotate genes & identify basic functions (resistance, virulence, etc.)",
    "Use comparative genomics: spot similarities/differences across organisms",
    "Learn how bioinformatics impacts health, agriculture, environment",
    "Onsite Mentorship (for physical locations)",
    "Connection with learners and experts in your locality",
    "Certificate of attendance",
  ];

  return (
    <div className="p-5 md:p-10 lg:p-15 bg-[#F3F4F6] flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3d168b]">
          What You'll Get
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          By the end of this program, you'll be able to:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#FFFFFF] p-5 rounded-lg shadow-md"
          >
            <div>
              <IoMdCheckboxOutline className="text-[#3d168b] text-xl" />
            </div>
            <p className="text-sm md:text-base text-gray-700">
              {benefit}
            </p>
          </div>
        ))}
      </div>
      <Link to="/form">
        <button className="w-full text-white py-2 px-3 font-medium bg-linear-to-r from-[#b241b7] to-[#3d168b] rounded-full hover:bg-gradient-to-l hover:from-[#3d168b] hover:to-[#b241b7] cursor-pointer hover:translate-x-2 transition duration-300 text-sm mt-10">
          Register Now &rarr;
        </button>
      </Link>
    </div>
  );
};

export default ProgramBenefits;
