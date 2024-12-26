import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 py-6 fixed z-[999] uppercase top-0 left-0 right-0 text-white font-bold">
      <div className="container flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-[2rem]">
          <Link to={"/"}>start framework</Link>
        </h1>

        {/* Hamburger Menu (visible on small screens) */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex gap-4 absolute lg:static bg-slate-800 w-full lg:w-auto left-0 transition-all duration-300 ${
            isOpen ? "top-[100%]" : "top-[-400px]"
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `block p-2 lg:inline-block ${isActive ? "active-link" : ""}`
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block p-2 lg:inline-block ${isActive ? "active-link" : ""}`
              }
              to={"/portfolio"}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block p-2 lg:inline-block ${isActive ? "active-link" : ""}`
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
