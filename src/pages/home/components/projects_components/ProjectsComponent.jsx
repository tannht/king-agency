import React from "react";
import "./ProjectsComponent.scss";
import ProjectsEvenColumn from "./ProjectsEvenColumn";
import ProjectsOddColumn from "./ProjectsOddColumn";

const ProjectsComponent = ({ headerComponent }) => {

  return (
    <div className="ProjectsComponent">
      <div className="container">
        <div className="row reverse-row">
          <ProjectsOddColumn headerComponent={headerComponent} />
          <ProjectsEvenColumn />
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
