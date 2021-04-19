import ProjectItem from "./ProjectItem";

const ProjectsOddColumn = ({ headerComponent }) => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 odd-col">
    <div className="col-12">{headerComponent}</div>
    <ProjectItem
      url={"https://i.imgur.com/3nhGLsk.jpeg"}
      tags={["Branding", "Strategy", "Digital Marketing"]}
      title={"There are many variations of passages of Lorem Ipsum available"}
      description={
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
      }
    />
    <ProjectItem
      url={
        "https://image.freepik.com/free-photo/financial-business-investment_53876-94861.jpg"
      }
      tags={["Branding", "Strategy", "Digital Marketing"]}
      title={"There are many variations of passages of Lorem Ipsum available"}
      description={
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
      }
    />

    <ProjectItem
      url={
        "https://image.freepik.com/free-photo/businessman-pointing-graphs-symbols_1232-917.jpg"
      }
      tags={["Branding", "Strategy", "Digital Marketing"]}
      title={"There are many variations of passages of Lorem Ipsum available"}
      description={
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
      }
    />
  </div>
);

export default ProjectsOddColumn;
