import InfoButton from "../InfoButton";
import ProjectItem from "./ProjectItem";
import ScrollAnimation from 'react-animate-on-scroll';

const ProjectsEvenColumn = ({ projects }) => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 even-col">
    {projects.map((item, index) => (
      
      <ProjectItem key={index} project={item} />
    ))}
    <div className="more-prjects">
      <InfoButton label="View More" horizontalPadding={true} />
    </div>
  </div>
);

export default ProjectsEvenColumn;
