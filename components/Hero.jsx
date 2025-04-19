import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 fade-in"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Wafi Wahid
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
        A passionate developer who loves building modern web experiences.
      </p>
    </section>
  );
};

export default Hero;
