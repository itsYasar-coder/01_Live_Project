import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center pt-6 px-4">
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg">
            <i className="ri-award-fill text-white text-lg"></i>
          </div>
          <h2 className="font-bold text-white text-lg">
            Recruit Kings
          </h2>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300 font-medium">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/careers">CAREERS</Link>
        </div>

        {/* Button */}
        <Link
          to="/letsgo"
          className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Let's Go
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;