import ProjectItem from "./ProjectItem";
import ScrollAnimation from 'react-animate-on-scroll';

const ProjectsOddColumn = ({ headerComponent, projects }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 odd-col">
      <div className="col-12">{headerComponent}</div>
      {projects.map((item, index) => (
         
        <ProjectItem key={index} project={item} />
      ))}
    </div>
  );
};

export default ProjectsOddColumn;
