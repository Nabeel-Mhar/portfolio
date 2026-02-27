import React from "react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      title: "Backend Development",
      skills: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Tailwind",
        "Bootstrap",
        "React.js",
        "React Redux",
        "React Hook Form",
        "React Icons",
      ],
    },
  ];

  return (
    <div className="bg-blue-800 px-6 py-16 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-center text-white text-3xl md:text-4xl font-extrabold tracking-tight">
          Technical Skills
        </h2>
        <div className="flex justify-center mt-3">
          <div className="bg-white h-1.5 w-24 md:w-32 rounded-2xl"></div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-8 bg-blue-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-white mb-6 border-b border-blue-700 pb-2">
              {cat.title}
            </h2>

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <button
                  key={skill}
                  className="py-2 px-4 bg-blue-800 text-white rounded-full text-sm font-medium hover:bg-cyan-600 hover:shadow-lg transition-all cursor-pointer border border-blue-700 hover:border-cyan-400"
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

export default Skills;
