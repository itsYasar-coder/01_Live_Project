import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#040410] py-24 text-center px-6">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Ready to Scale?
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Join the elite companies trusting Recruit Kings.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
          Hire Talent
        </button>

        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
          Join Network
        </button>
      </div>

      <p className="text-gray-500 text-sm mt-16">
        © 2026 Recruit Kings. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;