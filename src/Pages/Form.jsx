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

  const regions = [
    {
      name: "Tunis (Tunisia)",
      link: "https://chat.whatsapp.com/Ef7AXBo1wxlLQNSthWZ3dh",
    },
    {
      name: "Ibadan (Nigeria)",
      link: "https://chat.whatsapp.com/Jw7SDFw0bnN7qgC4jzhFBl",
    },
    {
      name: "Lagos (Nigeria)",
      link: "https://chat.whatsapp.com/H6GOrIL4hY8DdWgRsrosBT",
    },
    {
      name: "Ogun (Nigeria)",
      link: "https://chat.whatsapp.com/J0JOxIMtgamGFwDIFoZ7Nw",
    },
    {
      name: "Rawalpindi (Pakistan)",
      link: "https://chat.whatsapp.com/LJJprHXAVXnE53VjgXtK0w",
    },
    {
      name: "Ekiti (Nigeria)",
      link: "https://chat.whatsapp.com/Cglpzmmh6pbBTIryN4Ux6L",
    },
    {
      name: "Ekpoma (Nigeria)",
      link: "https://chat.whatsapp.com/FkFyhmLMpNo3UUeL666kM9",
    },
    {
      name: "Ogbomosho (Nigeria)",
      link: "https://chat.whatsapp.com/CkLORp3hpY9GpTZqbF8wKF",
    },
    {
      name: "Abuja (Nigeria)",
      link: "https://chat.whatsapp.com/IpzdTLTVCqYBR0DgmuPDAM",
    },
    {
      name: "Jos (Nigeria)",
      link: "https://chat.whatsapp.com/HaVKsQ4pDslE3lgmG95haN",
    },
    {
      name: "Dutse (Nigeria)",
      link: "https://chat.whatsapp.com/Et24mvLQyDGJRDg4dDFOhY",
    },
    {
      name: "Los Baños (Philippines)",
      link: "https://chat.whatsapp.com/F64M5z1jE7VKCqRoBcCSv0",
    },
    {
      name: "Abeokuta (Nigeria)",
      link: "https://chat.whatsapp.com/BI8Zq2sTLoJGLOISIJzPJv",
    },
    {
      name: "Calabar (Nigeria)",
      link: "https://chat.whatsapp.com/HQVXqHxPRbsDvadFON3C6O",
    },
    {
      name: "Osogbo (Nigeria)",
      link: "https://chat.whatsapp.com/G4pvLWMxnXuDxZxOlljFrj",
    },
    {
      name: "Sokoto (Nigeria)",
      link: "https://chat.whatsapp.com/G11txorkFUb1e9MQheryKx",
    },
    {
      name: "Bwari (Nigeria)",
      link: "https://chat.whatsapp.com/Gafk8D32GrE0P6gEktE0mV",
    },
    {
      name: "Port Harcourt (Nigeria)",
      link: "https://chat.whatsapp.com/KE7KDrnhIQlGgPIiK9xG84",
    },
    {
      name: "Enugu (Nigeria)",
      link: "https://chat.whatsapp.com/HrrYYIEaHRS0EFbf2yIWyK",
    },
    {
      name: "Nairobi (Kenya)",
      link: "https://chat.whatsapp.com/GzAmbYyem4a4eobOz603a6",
    },
    {
      name: "Ndola (Zambia)",
      link: "https://chat.whatsapp.com/EwoUnczJdHE0zM6vC2406s",
    },
    {
      name: "Bode-Saadu (Nigeria)",
      link: "https://chat.whatsapp.com/HrrYYIEaHRS0EFbf2yIWyK",
    },
    {
      name: "Ado (Nigeria)",
      link: "https://chat.whatsapp.com/KmU8oIPkjWXD7fyxhmjkFZ",
    },
    {
      name: "Surulere (Nigeria)",
      link: "https://chat.whatsapp.com/JbtE8Ct3pVgG3eGnGMCjfx",
    },
    {
      name: "Ijagun (Nigeria)",
      link: "https://chat.whatsapp.com/KfE1IOz4svD4xR4hMxEDEI",
    },
    {
      name: "Delta (Nigeria)",
      link: "https://chat.whatsapp.com/GzJI9GS6pgA1d0nehhwAMU",
    },
    {
      name: "Wukari (Nigeria)",
      link: "https://chat.whatsapp.com/Ic8SSFyxdIsGLkjqxaz1P8",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("registrations").insert([formData]);

    if (error) {
      setMessage("Something went wrong: " + error.message);
      setLoading(false);
      return;
    }

    const selectedRegion = regions.find((r) => r.name === formData.region);

    if (selectedRegion) {
      window.location.href = selectedRegion.link;
    } else {
      setMessage("Saved, but region link not found.");
    }

    setLoading(false);
  };

  return (
    <div className="py-10 px-5 md:px-24">
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
                className="border border-[#DFDFDFDF] p-2.5 rounded-lg focus:outline-none"
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="">Choose your region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
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
                className="border border-[#DFDFDFDF] p-2 rounded-lg"
                required
              >
                <option value="">Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">
                How would you rate your experience?
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="border border-[#DFDFDFDF] p-2 rounded-lg"
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
