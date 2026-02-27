import React, { useState } from "react";
// Run 'npm install react-icons' if you don't have it
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "skill",
    "education",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <nav className="bg-blue-950 text-white sticky top-0 z-50 shadow-md">
      {/* Container */}
      <div className="flex justify-between items-center py-5 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold hover:text-cyan-400 cursor-pointer transition-colors">
          NA
        </h2>

        {/* Desktop Links (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 font-bold">
          {navItems.map((item) => (
            <li className="hover:text-cyan-400 transition-colors capitalize" key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Visible on mobile only) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-3xl focus:outline-none transition-transform active:scale-90"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-blue-900 transition-all duration-300 ease-in-out ${
          isOpen ? "top-18 opacity-100 visible" : "-top-125 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center py-8 space-y-6 font-bold shadow-xl">
          {navItems.map((item) => (
            <li className="hover:text-cyan-400 transition-colors capitalize text-lg" key={item}>
              <a 
                href={`#${item}`} 
                onClick={() => setIsOpen(false)} // Close menu when link is clicked
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;