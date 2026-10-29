
import React from "react";
import "../styles/App.css";

const App = () => {
  const projects = [
    {
      name: "AI Resume Analyzer",
      description: "An application that analyzes resumes and provides ATS scores."
    },
    {
      name: "Real-Time Ambulance Tracking",
      description: "An application that tracks ambulances in real time."
    },
    {
      name: "Coding Practice Platform",
      description: "A platform to practice coding problems."
    }
  ];

  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project, index) => (
          <div key={index}>
            <h1 data-ns-test="project-name">
              {project.name}
            </h1>

            <h6 data-ns-test="project-description">
              {project.description}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
