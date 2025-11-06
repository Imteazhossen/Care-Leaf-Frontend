import React from "react";
import { NavLink } from "react-router"; // ✅ fixed import


// ✅ Correct icon imports (compatible with latest react-icons)
import { FaInstagram, FaFacebook, FaSnapchatGhost, FaLinkedin } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-green-100 text-green-800 pt-10 pb-6 mt-16 border-t border-green-200 shadow-inner">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-bold text-green-700">
          
          <span className="flex items-center gap-1">
            <FaLeaf className="text-green-500 animate-pulse" />
            Care Leaf
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-green-700 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "hover:text-green-500"
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
                `transition-all duration-300 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "hover:text-green-500"
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
                `transition-all duration-300 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "hover:text-green-500"
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
                `transition-all duration-300 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "hover:text-green-500"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-6 border-t border-green-200 pt-6">
          <a
            href="https://www.instagram.com/_imteaz_hossen_?igsh=MWRpc2s5OWZqdmc0Mw=="
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/share/1Bhu5DbyDT/"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.snapchat.com/add/imteazhossain81?share_id=z58LevyEMQg&locale=en-US"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
          >
            <FaSnapchatGhost size={28} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-green-700 mt-4">
          © {new Date().getFullYear()} <span className="font-semibold">CareLeaf</span>. 
          All rights reserved. <br /> Developed By Md Imteaz Hossen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
