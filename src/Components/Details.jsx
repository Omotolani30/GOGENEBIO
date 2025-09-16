import React from "react";
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaComments,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const Details = () => {
  return (
    <div className="p-5 md:p-10 lg:p-15 flex flex-col justify-center items-center dark:bg-[#040404] dark:text-white transition duration-400">
      <div className="flex bg-[#E5E7EB] dark:bg-[#1A1A1A] justify-between items-center p-2 px-4 rounded-3xl">
        <p className="font-semibold text-[14px] text-[#9D3CA7]">
          What you need to know about the Program
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Core Global Sessions */}
        <div className="col-span-1 p-6 md:p-8 lg:p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
          <div className="flex justify-center mb-4">
            <FaChalkboardTeacher className="text-[#9D3CA7] text-4xl" />
          </div>
          <h4 className="font-medium text-lg text-center">
            Core Global Sessions
          </h4>
          <p className="text-center text-sm mt-2">
            Online lectures from experts starting from the fundamentals.
          </p>
        </div>

        {/* Hands-On Mini-Project */}
        <div className="col-span-1 lg:col-span-2 p-6 md:p-8 lg:p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
          <div className="flex justify-center mb-4">
            <FaProjectDiagram className="text-[#9D3CA7] text-4xl" />
          </div>
          <h4 className="font-medium text-lg text-center">
            Hands-On Mini-Project
          </h4>
          <p className="text-center text-sm mt-2">
            Apply what you learn to a small real dataset: from raw data →
            annotated results.
          </p>
        </div>

        {/* Interactive Q&A & Discussion */}
        <div className="col-span-1 p-6 md:p-8 lg:p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
          <div className="flex justify-center mb-4">
            <FaComments className="text-[#9D3CA7] text-4xl" />
          </div>
          <h4 className="font-medium text-lg text-center">
            Interactive Q&A & Discussion
          </h4>
          <p className="text-center text-sm mt-2">
            Ask questions live or in local hubs; discuss challenges and
            solutions.
          </p>
        </div>

        {/* Peer & Mentor Support */}
        <div className="col-span-1 p-6 md:p-8 lg:p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
          <div className="flex justify-center mb-4">
            <FaUsers className="text-[#9D3CA7] text-4xl" />
          </div>
          <h4 className="font-medium text-lg text-center">
            Peer & Mentor Support
          </h4>
          <p className="text-center text-sm mt-2">
            WhatsApp/Telegram group, local hosts, feedback on your work.
          </p>
        </div>

        {/* Certification & Next Steps */}
        <div className="col-span-1 p-6 md:p-8 lg:p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
          <div className="flex justify-center mb-4">
            <FaCertificate className="text-[#9D3CA7] text-4xl" />
          </div>
          <h4 className="font-medium text-lg text-center">
            Certification & Next Steps
          </h4>
          <p className="text-center text-sm mt-2">
            Receive certificate on completion; guidance on continuing in
            research or jobs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
