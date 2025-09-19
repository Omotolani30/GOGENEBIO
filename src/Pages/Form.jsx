import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

const Form = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    region: "",
    heard_before: "",
    experience: "",
  });

  // const [selectedCountry, setSelectedCountry] = useState("");


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    // setSelectedCountry(e.target.value);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("registrations")
      .insert([formData]);

    if (error) {
      setMessage("Something went wrong: " + error.message);
      setLoading(false);
      return;
    }

    const countryLinks = {
      nigeria: "https://nkiri.com/",
      ghana: "https://web.whatsapp.com/",
      kenya: "https://music.youtube.com/watch?v=hHYlu8G3Jhc&list=RDAMVMuiK5NT9yQBQ",
      "south-africa": "https://wa.me/27XXXXXXXXXX",
    };

    if (countryLinks[formData.region]) {
      window.location.href = countryLinks[formData.region];
    } else {
      setMessage("✅ Saved, but region link not found!");
    }

    setLoading(false);
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
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                placeholder="Type your first name"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Phone Number</label>
              <input
                className="border border-[#DFDFDFDF] p-2 rounded-lg placeholder:text-xs md:placeholder:text-sm focus:outline-none"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Type your mail"
              />
            </div>

            {/* Region */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Region</label>
              <select
                name="region"
                className="border border-[#DFDFDFDF] p-2.5 rounded-lg focus:outline-none dark:bg-[#040404] dark:text-white"
                value={formData.region}
                onChange={handleChange}
                required
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
            {/* Heard Before */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">
                Have you heard about Genomics and Bioinformatics before?
              </label>
              <select
                name="heard_before"
                value={formData.heard_before}
                onChange={handleChange}
                className="border border-[#DFDFDFDF] p-2 rounded-lg dark:bg-[#040404] dark:text-white"
                required
              >
                <option value="">Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">How would you rate your experience?</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
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

        <button
          className="bg-gradient-to-r from-[#511E8C] to-[#9D3CA7] rounded-full p-2 text-sm md:text-lg text-white cursor-pointer"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {message && <p className="mt-5 text-center">{message}</p>}
    </div>
  );
};

export default Form;
// Note: Remember to replace the placeholder Supabase URL and Key with your actual project details in supabaseClient.js