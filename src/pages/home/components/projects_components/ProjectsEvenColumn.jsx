import InfoButton from "../../../../components/InfoButton";
import ProjectItem from "./ProjectItem";

const ProjectsEvenColumn = () => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 even-col">
    <ProjectItem
      url={
        "https://image.freepik.com/free-photo/digital-increasing-bar-graph-with-businessman-hand-overlay_53876-97640.jpg"
      }
      tags={["Branding", "Strategy", "Digital Marketing"]}
      title={"There are many variations of passages of Lorem Ipsum available"}
      description={
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
      }
    />
    <ProjectItem
      url={
        "https://goodmockups.com/wp-content/uploads/2020/05/Free-Rounded-Corners-Square-Business-Card-Mockup-PSD-Set-1.jpg"
      }
      tags={["Branding", "Strategy", "Digital Marketing"]}
      title={"There are many variations of passages of Lorem Ipsum available"}
      description={
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
      }
    />
    <ProjectItem
      url={"https://i.imgur.com/pxxppF4.jpeg"}
      tags={["Branding", "Strategy", "Digital Marketing"]}
      title={"There are many variations of passages of Lorem Ipsum available"}
      description={
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
      }
    />
    <div className="more-prjects">
      <InfoButton label="View More" horizontalPadding={true}/>
    </div>
  </div>
);

export default ProjectsEvenColumn;
