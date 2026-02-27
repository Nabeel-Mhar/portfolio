import React from "react";

const Experience = () => {
  return (
    <div className="bg-blue-950 py-16 px-6 md:px-20 lg:px-40 flex justify-center text-white">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
            Experience
          </h2>
          <div className="flex justify-center mt-3">
            <div className="bg-white h-1.5 w-24 md:w-32 rounded-2xl"></div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-blue-800 p-6 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-700/40">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-300">
              Web Development
            </h2>
            <span className="bg-blue-950 px-4 py-1 rounded-full text-sm font-semibold w-fit">
              3-Month Internship
            </span>
          </div>

          <div className="space-y-4 text-blue-50 leading-relaxed text-base md:text-lg">
            <p>
              I recently wrapped up my three-month internship with the Web
              Development team at <strong>Wise Tech</strong>, and it was an incredible ride.
            </p>
            <p>
              During my time there, I worked closely with the engineering team to 
              migrate a legacy dashboard to a more modern, responsive architecture. 
              It was a deep dive into the realities of production-level code, where 
              I learned that writing <span className="italic text-white underline decoration-blue-400">"clean"</span> code is 
              just as important as writing "working" code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;