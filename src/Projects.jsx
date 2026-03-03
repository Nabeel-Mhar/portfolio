import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuListTodo, LuExternalLink } from "react-icons/lu";

const Projects = () => {
  const projectData = [
    {
      icon: <MdOutlineShoppingCart className="text-blue-400" size={35} />,
      title: "NEX Shopping Website",
      desc: "Developed an e-commerce web application with user authentication, seller dashboard, product management, cart system, and secure checkout functionality.",
      tech: ["React.js", "Javascript", "Tailwind", "Html"],
      link: "https://nex-by-nabeel.vercel.app/",
    },
    {
      icon: <LuListTodo className="text-purple-400" size={35} />,
      title: "Todo List Application",
      desc: "Developed a fully responsive task management web app. Implemented complete CRUD functionality Create, Read, Update, Delete. Built reusable components.",
      tech: ["React.js", "Javascript", "Tailwind", "Html"],
      link: "https://nex-by-nabeel.vercel.app/",
    },
  ];

  return (
    <section className="bg-[#050b1d] px-6 py-20 md:px-12 lg:px-24 text-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-1.5 w-32 bg-linear-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        </div>
      </div>

      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col bg-blue-950/40 border border-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl"
          >
            {/* Content Area */}
            <div className="grow">
              <div className="mb-6 inline-block p-4 bg-blue-900/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-blue-100/70 leading-relaxed mb-8">
                {project.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((skill) => (
                  <button
                    key={skill}
                    className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold bg-blue-900/40 border border-blue-700/30 hover:bg-blue-600 hover:text-white transition-all cursor-default text-blue-200"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Centered Full-Width View Button */}
            <div className="w-full">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-linear-to-r from-blue-600 to-blue-500 text-white font-bold text-lg tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] active:scale-[0.98] border border-blue-400/20"
              >
                View Project
                <LuExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
