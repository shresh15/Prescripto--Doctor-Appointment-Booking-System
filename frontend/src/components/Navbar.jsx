import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <ul>
        <NavLink>
          <li>HOME</li>
        </NavLink>
        <NavLink>
          <li>All Doctors</li>
        </NavLink>
        <NavLink>
          <li>About</li>
        </NavLink>
        <NavLink>
          <li>Contact</li>
        </NavLink>
        <button>Create account</button>
      </ul>
    </div>
  );
};

export default Navbar;
