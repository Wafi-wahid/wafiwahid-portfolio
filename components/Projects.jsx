import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 text-center fade-in">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg dark:bg-slate-700">
          <h3 className="text-xl font-semibold">AI Mental Health Assistant</h3>
          <p className="text-gray-600 dark:text-gray-300">
            NLP-powered chatbot offering emotional support, journaling, and
            therapy recommendations.
          </p>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg dark:bg-slate-700">
          <h3 className="text-xl font-semibold">React Native Chat App</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time messaging app with Firebase backend and sleek minimalist
            UI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
