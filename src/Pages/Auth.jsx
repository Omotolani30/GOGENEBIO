import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("registrations")
      .select("id")
      .eq("email", email)
      .single();

    setLoading(false);

    if (error || !data) {
      setMessage("Email not found — certificate cannot be generated.");
      return;
    }

    const certificateWebsiteURL =
      "https://genomac-certificate-generator.vercel.app/login";
    window.location.href = certificateWebsiteURL;
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="py-10 px-20 max-w-md mx-auto text-center bg-[#511E8C]/10 rounded-3xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Verify Email</h2>
        <p className="mb-6">Enter the email you used to register.</p>

        <form onSubmit={handleVerify} className="flex flex-col gap-4">
          <input
            type="email"
            className="border rounded-lg p-3 w-full"
            placeholder="Registered email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            className="bg-gradient-to-r from-[#511E8C] to-[#9D3CA7] rounded-full p-2 px-2.5 text-white cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? "Checking..." : "Verify & Continue"}
          </button>
        </form>

        {message && <p className="mt-4 text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default Auth;
