import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          
          {/* Copyright Text */}
          <p className="text-white text-sm md:text-base font-medium opacity-90">
            © {new Date().getFullYear()} <span className="text-blue-400">Muhammad Nabeel Asghar</span>. All rights reserved.
          </p>

          {/* Slogan Text */}
          <div className="flex items-center space-x-2 text-blue-200/70 text-xs md:text-sm italic">
            <span className="h-px w-8 bg-blue-800"></span>
            <p>Building the future with AI</p>
            <span className="h-px w-8 bg-blue-800"></span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;