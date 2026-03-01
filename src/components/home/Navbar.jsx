import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-5 pt-6 relative z-20">

      <div className="flex justify-between items-center">

        <h2 className="text-white text-xl font-bold tracking-wide">
          Recruit <span className="text-blue-400">Kings</span>
        </h2>

        <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl 
        border border-white/10 flex items-center justify-center">
          <Menu size={18} className="text-white" />
        </div>

      </div>

    </nav>
  );
};

export default Navbar;