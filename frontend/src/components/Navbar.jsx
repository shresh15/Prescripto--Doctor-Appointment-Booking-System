import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 border-b border-gray-400">
      {/* Logo on the Left */}
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

      {/* Centered Navigation Links */}
      <ul className="flex-1 flex justify-center gap-8 font-medium">
        <NavLink to="/" className="flex flex-col items-center">
          <li className="py-1">Home</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/ m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors" className="flex flex-col items-center">
          <li className="py-1">All Doctors</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <li className="py-1">About</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <li className="py-1">Contact</li>
          <hr className="h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* Button on the Right */}

      <div>
        {token ? (
          <div className="flex items-center  gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer "
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("my-appointment")}
                  className="hover:text-black cursor-pointer "
                >
                  My Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer "
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-[#5f6FFF] text-white rounded-md cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
