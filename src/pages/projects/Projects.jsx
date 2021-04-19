import React from "react";
import ClientsLogo from "../../components/ClientsLogo";
import ProjectsComponent from "../home/components/projects_components/ProjectsComponent";
import PageDescription from "../../components/PageDescription";
import "./Projects.scss";

const Projects = () => {
  const HeaderComponent = () => (
    <div className="projects-header">
      <ul>
        <li className="active">Strategy</li>
        <li className="active">Branding</li>
        <li className="active">Digital Marketing</li>
        <li>
          <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="Projects">
      <PageDescription
        title="Projects"
        titleContent="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        content="It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      />
      <div className="project-list">
        <ProjectsComponent headerComponent={<HeaderComponent />} />
      </div>
      <ClientsLogo />
    </div>
  );
};

export default Projects;
