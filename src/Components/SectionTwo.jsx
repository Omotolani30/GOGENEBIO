import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex justify-around items-center bg-[#4b066219] dark:bg-[#181818] px-10 md:px-20 py-10 md:flex-row flex-col gap-10">
      <div>
        <h1 className="font-bold text-4xl text-orange-600">100k+</h1>
        <p>Trained Bioinformaticians and Practicing Professionals Globally.</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-[#3d168b]">120+</h1>
        <p>Countries Impacted: Making a Difference Worldwide.</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-orange-600">1000+</h1>
        <p>Research publications, Scholarships, Grants, and Jobs by our Participations.</p>
      </div>
    </div>
  );
};

export default SectionTwo;
