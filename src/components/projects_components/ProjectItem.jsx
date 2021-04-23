import { Link } from "react-router-dom";
import "./ProjectItem.scss";

const ProjectItem = ({ project }) => {
    const RenderTags = () => {
        return project.tags.map((item, index) => (
            <span className="project-tag" key={index}>{item}</span>
        ));
    }
    return (
        <div className="ProjectItem">
          <img
            src={project.url}
            className="card-img-top"
            alt=""
          />
          <div className="tags">
          <RenderTags />
          </div>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/projects/${project.id}`}>{project.title}</Link></h5>
            <p className="card-text">{project.description}</p>
      
            {/* -----------Project Item -----------*/}
          </div>
        </div>
      );
}

export default ProjectItem;
