import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-around items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            GeekFoods
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-900 font-semibold hover:text-blue-500">
            Home
          </Link>
          <Link to="/quote" className="text-gray-900 font-semibold hover:text-blue-500">
            Quote
          </Link>
          <Link to="/restaurent" className="text-gray-900 font-semibold hover:text-blue-500">
            Restaurent
          </Link>
          <Link to="/food" className="text-gray-900 font-semibold hover:text-blue-500">
            Food
          </Link>
          <Link to="/contact" className="text-gray-900 font-semibold hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Get Started Button */}
        <div>
          <button className="bg-blue-700 text-white px-2 py-1 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button id="mobile-menu-toggle" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden">
        <Link to="/" className="block text-gray-300 hover:text-white py-2">
          Home
        </Link>
        <Link to="/quote" className="block text-gray-300 hover:text-white py-2">
          Quote
        </Link>
        <Link to="/restaurent" className="block text-gray-300 hover:text-white py-2">
          Restaurent
        </Link>
        <Link to="/food" className="block text-gray-300 hover:text-white py-2">
          Food
        </Link>
        <Link to="/contact" className="block text-gray-300 hover:text-white py-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
