import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-24 px-6 py-20 text-center overflow-hidden
    bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900 rounded-2xl">

      {/* Extra Glow Layer */}
      <div className="absolute top-[-100px] left-[-60px] 
      w-[300px] h-[300px] bg-pink-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-60px] 
      w-[300px] h-[300px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10">

        <h2 className="text-3xl font-bold text-white">
          Ready to Scale?
        </h2>

        <p className="text-gray-300 text-sm mt-6 max-w-xs mx-auto leading-relaxed">
          Partner with Recruit Kings to architect your next generation of leadership.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full 
        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
        text-white font-semibold shadow-xl">
          Get Started
        </button>

        <div className="flex justify-center gap-8 mt-12 text-gray-300 text-sm">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
        </div>

        <p className="mt-10 text-gray-400 text-xs tracking-widest">
          © 2026 RECRUIT KINGS
        </p>

      </div>
    </footer>
  );
};

export default Footer;