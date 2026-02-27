import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Projects = () => {
  const projectData = [
    {
      title: "NEX Shopping Website",
      desc: "Developed an e-commerce web application with user authentication, seller dashboard, product management, cart system, and secure checkout functionality.",
      tech: ["React.js", "Javascript", "Tailwind", "Html"],
    },
    {
      title: "NEX Shopping Website", // Duplicate for placeholder as per your original code
      desc: "Developed an e-commerce web application with user authentication, seller dashboard, product management, cart system, and secure checkout functionality.",
      tech: ["React.js", "Javascript", "Tailwind", "Html"],
    },
  ];

  return (
    <div className="bg-blue-800 px-6 py-16 md:px-20 lg:px-40 text-white space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Featured Projects
        </h2>
        <div className="flex justify-center mt-4">
          <div className="bg-white h-1.5 w-32 md:w-52 rounded-2xl"></div>
        </div>
      </div>

      {/* Projects Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-blue-950 p-8 md:p-12 rounded-2xl space-y-6 w-full max-w-lg lg:w-1/2 transition-transform hover:scale-[1.02]"
          >
            <div className="flex justify-center">
              <MdOutlineShoppingCart size={40} />
            </div>

            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-blue-100 leading-relaxed">{project.desc}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tech.map((skill) => (
                <button
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-800 hover:bg-blue-700 hover:shadow-lg transition-all cursor-pointer"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
