import React from "react";
import Project from "../../pages/models/Project";
import "./ProjectsComponent.scss";
import ProjectsEvenColumn from "./ProjectsEvenColumn";
import ProjectsOddColumn from "./ProjectsOddColumn";

const ProjectsComponent = ({ headerComponent }) => {
  const projects = [
    new Project({
      url:
        "https://image.freepik.com/free-photo/digital-increasing-bar-graph-with-businessman-hand-overlay_53876-97640.jpg",
      tags: ["Branding", "Strategy", "Digital Marketing"],
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new Project({
      url:
        "https://goodmockups.com/wp-content/uploads/2020/05/Free-Rounded-Corners-Square-Business-Card-Mockup-PSD-Set-1.jpg",
      tags: ["Branding", "Strategy", "Digital Marketing"],
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new Project({
      url:
        "https://image.freepik.com/free-photo/businessman-pointing-graphs-symbols_1232-917.jpg",
      tags: ["Branding", "Strategy", "Digital Marketing"],
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new Project({
      url:
      "https://i.imgur.com/pxxppF4.jpeg",
      tags: ["Branding", "Strategy", "Digital Marketing"],
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new Project({
      url:
        "https://i.imgur.com/3nhGLsk.jpeg",
      tags: ["Branding", "Strategy", "Digital Marketing"],
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new Project({
      url:
        "https://image.freepik.com/free-photo/financial-business-investment_53876-94861.jpg",
      tags: ["Branding", "Strategy", "Digital Marketing"],
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
  ];

  var oddProject = [];
  var evenProject = [];

  projects.map((item, index) => {
    if ((index + 1) % 2 === 0) {
      evenProject.push(item);
    } else {
      oddProject.push(item);
    }
  });

  console.log(evenProject);
  console.log(oddProject);

  return (
    <div className="ProjectsComponent">
      <div className="container">
        <div className="row reverse-row">
          <ProjectsOddColumn headerComponent={headerComponent} projects={oddProject}/>
          <ProjectsEvenColumn projects={evenProject}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
