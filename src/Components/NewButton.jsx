

import React from 'react';
import { Link } from 'react-router';

// Define the button component
const NewButton = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="relative inline-block px-10 py-3 mb-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out transform bg-gradient-to-r from-green-500 to-lime-400 rounded-full shadow-lg hover:scale-105 hover:from-green-400 hover:to-lime-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
    >
      {/* Gradient overlay effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-lime-400 opacity-30"></span>
      
      {/* Button text */}
      <span className="relative z-10">{label}</span>

      {/* Hover effect arrow */}
      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 text-green-500 group-hover:text-lime-200 transition duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
};

export default NewButton;
