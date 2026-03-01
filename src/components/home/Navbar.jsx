import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center px-4 mt-6">
      <div className="w-full max-w-7xl 
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-full px-6 py-3 flex items-center justify-between shadow-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 rounded-lg">
            <i className="ri-award-fill text-white text-lg"></i>
          </div>
          <h2 className="font-bold text-white text-lg">
            Recruit Kings
          </h2>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/careers">CAREERS</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/letsgo"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Let's Go
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-white">
          <Menu size={24} />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;