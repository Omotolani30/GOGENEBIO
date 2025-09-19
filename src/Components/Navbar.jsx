import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import logo_black from "../assets/logo_edit.png";

const Navbar = ({ darkMode, switchTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-2 px-5 text-sm md:px-10 lg:px-20 relative z-50 dark:bg-[#040404] dark:text-white transition-all duration-400">
      {/* Logo */}
      <div className="flex items-center">
        {darkMode ? (
          <img src={logo_black} className="h-10" alt="Logo" />
        ) : (
          <img src={logo} className="h-10" alt="Logo" />
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="flex gap-8 font-semibold">
          <li>
            <Link
              to="/"
              className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
            >
              Partnership
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center gap-4">
        <button onClick={toggleMobileMenu} className="text-2xl text-[#9D3CA7]">
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        <button
          onClick={switchTheme}
          className="text-2xl text-[#9D3CA7] cursor-pointer transition duration-300"
        >
          {darkMode ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#040404] dark:text-white shadow-md z-50">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/research"
                className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/partnership"
                className="cursor-pointer hover:text-[#9D3CA7] transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Partnership
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Contact and Theme Toggle */}
      <div className="hidden lg:flex gap-6">
        <Link
          to="/contact"
          className="bg-[#9D3CA7] text-white px-3 py-1 rounded-lg hover:bg-[#7b2b8a] transition-all duration-300"
        >
          Contact Us
        </Link>
        <button
          onClick={switchTheme}
          className="text-2xl text-[#9D3CA7] cursor-pointer transition duration-300"
        >
          {darkMode ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
