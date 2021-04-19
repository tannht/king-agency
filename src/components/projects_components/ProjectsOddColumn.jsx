import ProjectItem from "./ProjectItem";

const ProjectsOddColumn = ({ headerComponent, projects }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 odd-col">
      <div className="col-12">{headerComponent}</div>
      {projects.map((item) => (
        <ProjectItem
          url={item.url}
          tags={item.tags}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ProjectsOddColumn;
