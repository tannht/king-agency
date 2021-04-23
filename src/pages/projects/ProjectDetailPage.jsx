import { Fragment } from "react";
import { useParams } from "react-router";
import ProjectData from "../../components/projects_components/ProjectData";
import "./ProjectDetailPage.scss";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = ProjectData[id];

  return (
    <Fragment>
      <div className="ProjectDetailPage"></div>
    </Fragment>
  );
};

export default ProjectDetailPage;
