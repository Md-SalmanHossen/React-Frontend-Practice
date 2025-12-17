import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navaLinks = (
    <>
      <li>
         <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "text-pink-500" : "text-white")}
         >
            Home
         </NavLink>
      </li>
      <li>
         <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-pink-500" : "text-white")}
         >
            About
         </NavLink>
      </li>
      <li>
         <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-pink-500" : "text-white")}
         >
            Contact
         </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#1d1c22] shadow-sm mt-4 max-w-screen-2xl mx-auto px-4 rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 text-secondary w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#1d1c22] rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navaLinks}
          </ul>
        </div>
        <a className="text-white text-2xl">Salman</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navaLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
