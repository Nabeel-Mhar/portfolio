import React from "react";
import { MdContactPhone, MdMarkEmailUnread } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      icon: <MdMarkEmailUnread className="text-3xl" />,
      text: "nabeelmehar7862@gmail.com",
      link: "mailto:nabeelmehar7862@gmail.com",
    },
    {
      icon: <MdContactPhone className="text-3xl" />,
      text: "+92 3216141320",
      link: "tel:+923216141320",
    },
    {
      icon: <CiLocationOn className="text-3xl" />,
      text: "Gulberg, Lahore, Pakistan",
      link: "#",
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      text: "Nabeel Mehar",
      link: "https://www.linkedin.com/in/mehar-nabeel-66150a378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  return (
    <div className="bg-blue-800 px-6 py-16 md:px-20 lg:px-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-center text-white text-3xl md:text-4xl font-extrabold">
            Get In Touch
          </h2>
          <div className="flex justify-center mt-3">
            <div className="bg-white h-1.5 w-16 md:w-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {contactDetails.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-950 hover:bg-blue-900 transition-colors duration-300 rounded-2xl text-white flex items-center space-x-4 p-6 md:p-10 shadow-lg"
            >
              <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-sm md:text-lg font-medium break-all">
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
