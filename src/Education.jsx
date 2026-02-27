import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      school: "Virtual University of Pakistan",
      duration: "2021 - Present",
      description: "Specialization in Computer Languages (C++), Databases, and Data Structures. Focused on building scalable applications and data-driven solutions."
    },
    // You can add more education objects here
  ];

  return (
    <div className="bg-blue-950 py-16 px-6 md:px-20 lg:px-40 flex justify-center">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header Section */}
        <div>
          <h2 className="text-center text-white text-3xl md:text-4xl font-extrabold">
            Education
          </h2>
          <div className="flex justify-center mt-4">
            <div className="bg-white h-1.5 w-24 md:w-32 rounded-2xl"></div>
          </div>
        </div>

        {/* Education Cards Container */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-blue-800 p-6 md:p-10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer rounded-2xl text-white border border-blue-700/50"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <p className="text-xl md:text-2xl font-bold text-blue-300">
                    {edu.degree}
                  </p>
                  <p className="text-lg md:text-xl font-semibold opacity-90">
                    {edu.school}
                  </p>
                </div>
                <span className="bg-blue-950 px-4 py-1 rounded-full text-sm font-medium w-fit">
                  {edu.duration}
                </span>
              </div>
              
              <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;