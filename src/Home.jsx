import React from "react";
import pic from "./images/Nabeel.jpeg";
import bgvi from "./images/bgvideo.mp4";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgvi}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay to ensure text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 px-6 w-full max-w-3xl flex flex-col items-center text-white text-center gap-6">
        {/* Profile Image */}
        <div className="relative">
          <img
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500/50 object-cover cursor-pointer  transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-950"
            src={pic}
            alt="Nabeel Asghar"
          />
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight hover:text-blue-400 transition-colors cursor-pointer">
            Nabeel Asghar
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-300 cursor-pointer">
            Frontend Developer
          </p>
        </div>

        {/* Bio Text */}
        <p className="max-w-xl text-sm md:text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity">
          Motivated Front-end Developer with hands-on project experience, a
          strong focus on UI/UX, and a continuous learner mindset. Passionate
          about building secure, scalable web applications and contributing to
          meaningful projects.
        </p>

        {/* Call to Action Button (Optional but recommended for Home) */}
        <button className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all transform active:scale-95 shadow-lg">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Home;
