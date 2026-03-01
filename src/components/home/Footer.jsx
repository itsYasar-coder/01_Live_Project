import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050515] text-white py-24 px-6 text-center">

      <h1 className="text-3xl sm:text-5xl font-bold mb-6">
        Ready to Scale?
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Join the elite network that trusts Recruit Kings.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
          Hire Top Talent
        </button>
        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
          Join Network
        </button>
      </div>

      <p className="text-gray-500 text-sm">
        © 2026 RECRUIT KINGS. ENGINEERED EXCELLENCE.
      </p>

    </footer>
  );
};

export default Footer;