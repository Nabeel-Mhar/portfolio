import React from "react";
import img from "./images/Nabeel.jpeg";
import { FaRegFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-blue-950 px-6 py-16 md:px-12 lg:px-20 text-white overflow-hidden">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          About Me
        </h2>
        <div className="flex justify-center mt-3">
          <div className="bg-white h-1.5 w-24 md:w-32 rounded-2xl"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        {/* Image Wrapper */}
        <div className="w-full max-w-sm lg:max-w-md">
          <img
            className="w-full h-auto rounded-2xl shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-300"
            src={img}
            alt="Muhammad Nabeel Asghar"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400">
            Hello, I'm Muhammad Nabeel Asghar!
          </h1>

          <div className="space-y-4 text-blue-100 text-base md:text-lg leading-relaxed">
            <p>
              I am writing to express my interest in Web development. I am eager
              to gain hands-on experience and believe my background in Frontend
              Web development makes me a strong fit for the intern role.
            </p>
            <p>
              I specialize in delivering complete end-to-end solutions — from
              intuitive frontend interfaces to robust, optimized logic — focused
              on performance, security, and maintainability.
            </p>
          </div>

          <div className="pt-4">
            <button className="bg-blue-600 flex items-center space-x-2 hover:bg-blue-500 text-white text-lg md:text-xl px-8 py-4 rounded-full cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] font-semibold active:scale-95">
              <FaRegFileAlt size={25} />
              <p>Download Resume</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
