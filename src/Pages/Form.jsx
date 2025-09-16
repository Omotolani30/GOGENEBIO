import React, { useState } from "react";

const Form = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const countryLinks = {
      nigeria: "https://nkiri.com/",
      ghana: "https://web.whatsapp.com/",
      kenya:
        "https://music.youtube.com/watch?v=hHYlu8G3Jhc&list=RDAMVMuiK5NT9yQBQ",
      "south-africa": "https://wa.me/27XXXXXXXXXX",
    };

    if (countryLinks[selectedCountry]) {
      window.location.href = countryLinks[selectedCountry];
    } else {
      alert("Please select a valid country.");
    }
  };

  return (
    <div className="py-10 px-5 md:px-24 dark:bg-[#040404] dark:text-white transition duration-400">
      <h2 className="font-semibold text-2xl md:text-4xl text-center mb-10">
        Application Form
      </h2>

      <form className="flex flex-col gap-10 md:gap-20" onSubmit={handleSubmit}>
        <div className="grid gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm md:text-lg">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Full Name</label>
              <input
                className="border border-[#DFDFDFDF] p-2 rounded-lg placeholder:text-xs md:placeholder:text-sm focus:outline-none"
                type="text"
                required
                placeholder="Type your first name"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Phone Number</label>
              <input
                className="border border-[#DFDFDFDF] p-2 rounded-lg placeholder:text-xs md:placeholder:text-sm focus:outline-none"
                type="number"
                required
                placeholder="Preferably WhatsApp number"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Email</label>
              <input
                className="border border-[#DFDFDFDF] p-2 rounded-lg placeholder:text-xs md:placeholder:text-sm focus:outline-none"
                type="email"
                required
                placeholder="Type your mail"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Country</label>
              <select
                aria-label="Country"
                name="country"
                id="country"
                className="border border-[#DFDFDFDF] p-2.5 rounded-lg focus:outline-none dark:bg-[#040404] dark:text-white"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="">Select your country of residence</option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
                <option value="kenya">Kenya</option>
                <option value="south-africa">South Africa</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-sm md:text-lg">
            <div className="flex flex-col gap-2">
              <label className="font-medium">
                Have you heard about Genomics and Bioinformatics before{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="border border-[#DFDFDFDF] p-2 rounded-lg placeholder:text-xs md:placeholder:text-sm h-32"
                required
                placeholder="Type here..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">
                How would you rate your experience{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="experience"
                className="border border-[#DFDFDFDF] p-2 rounded-lg dark:bg-[#040404] dark:text-white"
                required
              >
                <option value="">Choose</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-r from-[#511E8C] to-[#9D3CA7] rounded-full p-2 text-sm md:text-lg text-white cursor-pointer">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Form;
