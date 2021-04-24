import { Fragment } from "react";
import { useParams } from "react-router";
import PageImageDescription from "../../components/PageImageDescription";
import ProjectData from "../../components/projects_components/ProjectData";
import ClientsLogo from "../../components/ClientsLogo";
import Footer from "../../components/Footer";
import "./ProjectDetailPage.scss";
import ProjectSlider from "./components/ProjectSlider";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = ProjectData[id];
  const projectsRelated = [];

  ProjectData.forEach(item => {
    if(item.tags[0] === project.tags[0] && item.id !== id) {
      projectsRelated.push(item);
    }
  })

  const createMarkup = () => {
    return {
      __html: `<div className="container">${project.content}</div>`,
    };
  };

  return (
    <Fragment>
      <div className="ProjectDetailPage">
        <PageImageDescription
          url={project.url}
          titleHeader={project.project_name}
          titleContent={project.title}
          content={project.description}
        />
        <div
          className="project-content"
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
        <div className="container">
          <ProjectSlider projects={projectsRelated} />
        </div>
        <ClientsLogo />
        <Footer />
      </div>
    </Fragment>
  );
};

export default ProjectDetailPage;
