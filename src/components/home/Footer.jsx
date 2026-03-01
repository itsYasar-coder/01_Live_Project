import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040410] py-12 px-4 text-center text-sm text-gray-400">

      <p className="text-white text-xl font-bold mb-4">Ready to Scale?</p>

      <p className="leading-relaxed">
        Join the elite companies that trust Recruit Kings for recruitment excellence.
      </p>

      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="hover:text-white">LinkedIn</a>
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">Instagram</a>
      </div>

      <p className="mt-6 text-gray-500 text-xs">
        © 2026 Recruit Kings. Engineered Excellence.
      </p>

    </footer>
  );
};

export default Footer;