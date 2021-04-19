import InfoButton from "../InfoButton";
import ProjectItem from "./ProjectItem";

const ProjectsEvenColumn = ({ projects }) => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 even-col">
    {projects.map((item, index) => (
      <ProjectItem
        key={index}
        url={item.url}
        tags={item.tags}
        title={item.title}
        description={item.description}
      />
    ))}
    <div className="more-prjects">
      <InfoButton label="View More" horizontalPadding={true} />
    </div>
  </div>
);

export default ProjectsEvenColumn;
