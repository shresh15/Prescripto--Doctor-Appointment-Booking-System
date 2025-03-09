import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 border-b border-gray-400">
      {/* Logo on the Left */}
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

      {/* Centered Navigation Links */}
      <ul className="flex-1 flex justify-center gap-8 font-medium">
        <NavLink to="/" className="flex flex-col items-center">
          <li className="py-1">Home</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/5" />
        </NavLink>
        <NavLink to="/doctors" className="flex flex-col items-center">
          <li className="py-1">All Doctors</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/5" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <li className="py-1">About</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/5" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <li className="py-1">Contact</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/5" />
        </NavLink>
      </ul>

      {/* Button on the Right */}
      <button className="px-5 py-2 bg-[#5f6FFF] text-white rounded-md">
        Create Account
      </button>
    </div>
  );
};

export default Navbar;
