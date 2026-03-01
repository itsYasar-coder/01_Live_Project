import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-[#040410] px-6 py-20 text-center">

      {/* Glow */}
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 
      w-[200px] h-[200px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <h2 className="text-3xl font-bold text-white">
          Ready to Scale?
        </h2>

        <p className="text-gray-400 text-sm mt-6 max-w-xs mx-auto leading-relaxed">
          Partner with Recruit Kings to architect your next generation of leadership.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full 
        bg-gradient-to-r from-purple-600 to-blue-500 
        text-white font-semibold shadow-lg">
          Get Started
        </button>

        <div className="flex justify-center gap-8 mt-12 text-gray-400 text-sm">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>

        <p className="mt-10 text-gray-600 text-xs tracking-widest">
          © 2026 RECRUIT KINGS
        </p>

      </div>
    </footer>
  );
};

export default Footer;