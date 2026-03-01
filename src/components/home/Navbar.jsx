import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 mt-6">
      <div className="relative w-full max-w-6xl flex items-center justify-between py-3 px-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 px-2 py-1 rounded-lg flex items-center justify-center">
            <i className="ri-award-fill text-white text-xl"></i>
          </div>
          <h2 className="font-bold text-white text-lg">
            Recruit Kings
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/careers">CAREERS</a>
        </div>

        {/* Desktop Button */}
        <a
          href="/letsgo"
          className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 duration-200"
        >
          Let's Go
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-24 w-[90%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-6 flex flex-col items-center gap-6 text-white md:hidden">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/careers">CAREERS</a>
          <a
            href="/letsgo"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold"
          >
            Let's Go
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;