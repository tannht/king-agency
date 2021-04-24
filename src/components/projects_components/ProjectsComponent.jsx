import React, { Fragment } from "react";
import ProjectData from "./ProjectData";
import "./ProjectsComponent.scss";
import ProjectsEvenColumn from "./ProjectsEvenColumn";
import ProjectsOddColumn from "./ProjectsOddColumn";

const ProjectsComponent = ({ headerComponent }) => {
  const projects = ProjectData; 
  var oddProject = [];
  var evenProject = [];

  projects.map((item, index) => {
    if ((index + 1) % 2 === 0) {
      return evenProject.push(item);
    } else {
      return oddProject.push(item);
    }
  });

  return (
    <Fragment>
    <div className="ProjectsComponent">
      <div className="container">
        <div className="row reverse-row">
          <ProjectsOddColumn headerComponent={headerComponent} projects={oddProject}/>
          <ProjectsEvenColumn projects={evenProject}/>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default ProjectsComponent;
