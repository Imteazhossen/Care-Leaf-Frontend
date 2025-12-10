import React from "react";
import { Link, NavLink } from "react-router";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar rounded-b-full   mx-auto sticky top-0 z-50 bg-gradient-to-r from-green-100 via-green-50 to-green-100 shadow-md px-5 md:px-20 backdrop-blur-md">
      {/* Left - Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-green-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h8"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-green-700"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "text-green-600" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "text-green-600" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/research"
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "text-green-600" : ""}`
                }
              >
                Research
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "text-green-600" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2  text-green-700 font-bold text-xl md:text-2xl"
        >

          <span className="flex items-center rounded-full border-2 border-green-300  bg-white p-2  gap-1">

            <FaLeaf className="text-green-500 bg-white rounded-full w-10 h-10 animate-pulse" />
            CareLeaf
          </span>
        </Link>
      </div>

      {/* Center - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu bg-white rounded-full p-2 menu-horizontal px-1 space-x-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 border-2 border-green-300 rounded-full transition-all duration-300 ${isActive
                  ? "bg-green-500 text-white shadow-md"
                  : "text-green-700 hover:bg-green-200"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full border-2 border-green-300 transition-all duration-300 ${isActive
                  ? "bg-green-500 text-white shadow-md"
                  : "text-green-700 hover:bg-green-200"
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full border-2 border-green-300  transition-all duration-300 ${isActive
                  ? "bg-green-500 text-white shadow-md"
                  : "text-green-700 hover:bg-green-200"
                }`
              }
            >
              Research
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full border-2 border-green-300  transition-all duration-300 ${isActive
                  ? "bg-green-500 text-white shadow-md"
                  : "text-green-700 hover:bg-green-200"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right - Button */}
      <div className="navbar-end">
        
          <button className="btn bg-green-600 border-2 border-green-300 text-white hover:bg-green-700 rounded-full px-6">
            Powered By BottleGourdNet
          </button>
        

      </div>
    </nav>
  );
};

export default Navbar;
