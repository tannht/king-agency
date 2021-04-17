import React from "react";
import "./Projects.scss";
import ProjectsEvenColumn from "./ProjectsEvenColumn";
import ProjectsOddColumn from "./ProjectsOddColumn";

const Projects = () => (
  <div className="Projects row">
    <ProjectsOddColumn />
    <ProjectsEvenColumn />
  </div>
);

export default Projects;
