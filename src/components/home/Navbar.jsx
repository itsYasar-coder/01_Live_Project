import React from "react";
const Navbar = () => {
  return (
    <div className="relative flex mt-6 ml-73 text-sm w-[57%] py-1 px-6 items-center rounded-full bg-white/1 backdrop-blur-xl border border-white/7 shadow-lg ">

      <div className="flex items-center gap-3">

        <div className="bg-purple-600 px-2 py-1 rounded-lg flex items-center justify-center">

          <i className="ri-award-fill text-white text-xl">

          </i>

        </div>

        <h2 className="font-bold text-white"> Recruit Kings </h2>

      </div>

      <div className="flex gap-5 absolute left-1/2 -translate-x-1/2 text-white">

        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/services">SERVICES</a>
        <a href="/careers">CAREERS</a>
      </div>
      <a className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 duration-200" href="/letsgo" > Let's Go </a>
    </div>

  );
};
export default Navbar;