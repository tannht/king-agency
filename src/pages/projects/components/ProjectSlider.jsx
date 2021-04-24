import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "./ProjectSlider.scss";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProjectItem from "../../../components/projects_components/ProjectItem";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const ProjectSlider = ({ projects }) => {
  return (
    <div className="ProjectSlider">
      <h3>Related Projects</h3>
      <CarouselProvider
        className="project-slider"
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={projects.length}
      >
        <div className="slider">
          <Slider className="row">
            {projects.map((item, index) => (
              <Slide
                className="slider-item"
                index={index}
                key={index}
              >
                <ProjectItem project={item} key={index} />
              </Slide>
            ))}
          </Slider>
        </div>
        <ButtonBack className="back-slider">
          <FaAngleLeft size={60} />
        </ButtonBack>
        <ButtonNext className="next-slider">
          <FaAngleRight size={60} />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default ProjectSlider;
