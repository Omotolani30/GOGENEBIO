import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const normalizedEmail = email.trim().toLowerCase();
      const { data: userData, error: emailError } = await supabase
        .from("registrations")
        .select("id,email")
        .ilike("email", normalizedEmail)
        .maybeSingle();

      if (emailError) {
        console.error("Email verification error:", emailError);
        setMessage("Error checking email. Try again later.");
        return;
      }

      if (!userData) {
        setMessage("Email not found, certificate cannot be generated.");
        return;
      }

      if (testimonial.trim()) {
        const { error: testimonialError } = await supabase
          .from("testimonials")
          .insert([
            {
              testimonial: testimonial.trim(),
            },
          ])
          .select();

        if (testimonialError) {
          console.error("Testimonial error:", testimonialError);
          return;
        }
      }

      const certificateWebsiteURL =
        "https://genomac-certificate-generator.vercel.app/certificate/U2FsdGVkX1%2B%2BsgRH%2F5hCPemkQbAkPbGBBOZFNjAqm%2FYiproaoQxq4v23hQJc2qRtrOtoXQdjTaUPuhJ0I9rMCTbjWfMry0mWpv18y7isq%2FjBleM70oAEZDJ42NXhWxycTOTQtu09A%2FGu%2FdnkuFawSGvdrFEb%2FYrSvycDUlov7bYBj1fuy7BTjV5yjrSQV%2F4DpiTKCophcIHhiKbUo1yKpsrhhvXFv2pQgs64iuR9zTqBh%2BHJZ%2Fi2XW5T8%2BFdp5d%2BSwv5z4HRCykorxhPlkNpm4EoqcM7BQ6RH9q9Eb%2Bf2bI%3D";
      window.location.href = certificateWebsiteURL;
    } catch (err) {
      console.error("Verification error:", err);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 transition-colors">
      <div className="w-full max-w-lg bg-[#511E8C]/10 rounded-3xl shadow-md p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Verification
        </h2>

        <form onSubmit={handleVerify} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-medium text-sm">
              Email Address <span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              className="w-full border rounded-lg p-3 focus:outline-none"
              placeholder="Registered email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-medium text-sm">
              Testimonial {""}
              <span className="text-red-500">*</span>
            </span>
            <textarea
              className="w-full border rounded-lg p-3 h-28 focus:outline-none"
              placeholder="We would love to hear from you..."
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
            />
          </label>

          <button
            className="mt-2 w-full md:w-auto mx-auto bg-gradient-to-r from-[#511E8C] to-[#9D3CA7] rounded-full p-3 px-6 text-white disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Checking..." : "Verify & Continue"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Auth;
