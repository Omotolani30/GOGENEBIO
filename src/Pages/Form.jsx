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
      name: "Abuja (Emmauel Ogechi)",
      link: "https://chat.whatsapp.com/Gz7H9PstDKdLcYxN3yw4Zu",
    },
    {
      name: "Abuja (Kolawole Nathaniel)",
      link: "https://chat.whatsapp.com/IpzdTLTVCqYBR0DgmuPDAM",
    },
    {
      name: "Abuja (Okwuchi Flora)",
      link: "https://chat.whatsapp.com/Gafk8D32GrE0P6gEktE0mV",
    },
    {
      name: "Ado-Ekiti",
      link: "https://chat.whatsapp.com/KmU8oIPkjWXD7fyxhmjkFZ",
    },
    {
      name: "Bode-Saadu (Kwara)",
      link: "https://chat.whatsapp.com/HrrYYIEaHRS0EFbf2yIWyK",
    },
    {
      name: "Calabar",
      link: "https://chat.whatsapp.com/HQVXqHxPRbsDvadFON3C6O",
    },
    {
      name: "Delta",
      link: "https://chat.whatsapp.com/GzJI9GS6pgA1d0nehhwAMU",
    },
    {
      name: "Dutse",
      link: "https://chat.whatsapp.com/Et24mvLQyDGJRDg4dDFOhY",
    },
    {
      name: "Ekiti",
      link: "https://chat.whatsapp.com/Cglpzmmh6pbBTIryN4Ux6L",
    },
    {
      name: "Ekpoma",
      link: "https://chat.whatsapp.com/FkFyhmLMpNo3UUeL666kM9",
    },
    {
      name: "Enugu",
      link: "https://chat.whatsapp.com/HrrYYIEaHRS0EFbf2yIWyK",
    },
    {
      name: "Ibadan (Abdullahi Babatunde)",
      link: "https://chat.whatsapp.com/CaKIwXXzKgiAMY7H6F9kbk",
    },
    {
      name: "Ibadan (Oyeniyi Blessing)",
      link: "https://chat.whatsapp.com/Jw7SDFw0bnN7qgC4jzhFBl",
    },
    {
      name: "Jos (Akanni Sherifdeen)",
      link: "https://chat.whatsapp.com/Jkaz6VufPa2DtjFxrl509G",
    },
    {
      name: "Jos (Fancy Ishaku)",
      link: "https://chat.whatsapp.com/HaVKsQ4pDslE3lgmG95haN",
    },
    {
      name: "Lagos (Ashimolowo Agape)",
      link: "https://chat.whatsapp.com/H6GOrIL4hY8DdWgRsrosBT",
    },
    {
      name: "Lagos (John Chidozie)",
      link: "https://chat.whatsapp.com/JbtE8Ct3pVgG3eGnGMCjfx",
    },
    {
      name: "Los Baños",
      link: "https://chat.whatsapp.com/F64M5z1jE7VKCqRoBcCSv0",
    },
    {
      name: "Nairobi",
      link: "https://chat.whatsapp.com/GzAmbYyem4a4eobOz603a6",
    },
    {
      name: "Ndola",
      link: "https://chat.whatsapp.com/EwoUnczJdHE0zM6vC2406s",
    },
    {
      name: "Ogbomosho (Afolabi Sofiat)",
      link: "https://chat.whatsapp.com/F25rCb10oRJ0CNBsyDwxOh",
    },
    {
      name: "Ogbomosho (Emmanuel Oyelayo)",
      link: "https://chat.whatsapp.com/CkLORp3hpY9GpTZqbF8wKF",
    },
    {
      name: "Ogun (Faniyi Olakunle)",
      link: "https://chat.whatsapp.com/BI8Zq2sTLoJGLOISIJzPJv",
    },
    {
      name: "Ogun (Lugard Damilola)",
      link: "https://chat.whatsapp.com/J0JOxIMtgamGFwDIFoZ7Nw",
    },
    {
      name: "Osogbo",
      link: "https://chat.whatsapp.com/G4pvLWMxnXuDxZxOlljFrj",
    },
    {
      name: "Port Harcourt",
      link: "https://chat.whatsapp.com/KE7KDrnhIQlGgPIiK9xG84",
    },
    {
      name: "Rawalpindi (Pakistan)",
      link: "https://chat.whatsapp.com/LJJprHXAVXnE53VjgXtK0w",
    },
    {
      name: "Sokoto",
      link: "https://chat.whatsapp.com/G11txorkFUb1e9MQheryKx",
    },
    {
      name: "TASUED",
      link: "https://chat.whatsapp.com/KfE1IOz4svD4xR4hMxEDEI",
    },
    {
      name: "Taraba",
      link: "https://chat.whatsapp.com/Ic8SSFyxdIsGLkjqxaz1P8",
    },
    {
      name: "Tunis",
      link: "https://chat.whatsapp.com/Ef7AXBo1wxlLQNSthWZ3dh",
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
