const ProjectItem = ({url, tags, title, description}) => {
    const RenderTags = () => {
        return tags.map((item, index) => (
            <span className="project-tag" key={index}>{item}</span>
        ));
    }

    return (
        <div className="project-item">
          <img
            src={url}
            className="card-img-top"
            alt=""
          />
          <div className="tags">
          <RenderTags />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
      
            {/* -----------Project Item -----------*/}
          </div>
        </div>
      );
}

export default ProjectItem;
