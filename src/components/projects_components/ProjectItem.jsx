import { Link } from "react-router-dom";
import "./ProjectItem.scss";

const ProjectItem = ({ project }) => {
	const RenderTags = () => {
		return project.tags.map((item, index) => (
			<span
				data-aos="fade-up"
				data-aos-once
				className="project-tag"
				key={index}
			>
				{item}
			</span>
		));
	};
	return (
		<div className="ProjectItem">
			<img
				data-aos="fade-up"
				data-aos-once
				src={project.url}
				className="card-img-top"
				alt=""
			/>
			<div className="tags">
				<RenderTags />
			</div>
			<div className="card-body">
				<h5 data-aos="fade-up" data-aos-once className="card-title">
					<Link to={`/projects/${project.id}`}>{project.title}</Link>
				</h5>
				<p data-aos="fade-up" data-aos-once className="card-text">
					{project.description}
				</p>

				{/* -----------Project Item -----------*/}
			</div>
		</div>
	);
};

export default ProjectItem;
