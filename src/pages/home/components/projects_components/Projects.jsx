import React from "react";
import "./Projects.scss";
import ProjectsEvenColumn from "./ProjectsEvenColumn";
import ProjectsOddColumn from "./ProjectsOddColumn";

const Projects = () => (
  <div className="Projects">
    <div className="container">
      <div className="row">
        <ProjectsOddColumn />
        <ProjectsEvenColumn />
      </div>
    </div>
  </div>
);

export default Projects;
