import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-4 pt-6">
      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-full py-3 px-5 flex justify-between items-center shadow-lg">

        <h2 className="text-lg font-bold text-white">
          Recruit Kings
        </h2>

        <div className="flex gap-4 text-sm text-gray-200">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/careers">CAREERS</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;