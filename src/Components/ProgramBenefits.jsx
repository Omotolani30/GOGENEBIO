import React from "react";
import { FaCheckCircle } from "react-icons/fa";

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
    "Confidence to handle basic bioinformatics tasks",
  ];

  return (
    <div className="p-5 md:p-10 lg:p-15 bg-[#F3F4F6] dark:bg-[#181818] dark:text-white transition duration-400">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#9D3CA7]">
          What You'll Get
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
          By the end of this program, you'll be able to:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#FFFFFF] dark:bg-[#1E1E1E] p-5 rounded-lg shadow-md"
          >
            {/* <FaCheckCircle className="text-[#9D3CA7] text-xl" /> */}
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramBenefits;
