import React from "react";
import ProjectModel from "../../pages/models/ProjectModel";
import "./ProjectsComponent.scss";
import ProjectsEvenColumn from "./ProjectsEvenColumn";
import ProjectsOddColumn from "./ProjectsOddColumn";

const ProjectsComponent = ({ headerComponent }) => {
  const projects = [
    new ProjectModel({
      url:
        "https://ied.eu/wp-content/uploads/2018/05/brand-1.png",
      tags: ["Branding"],
      title: "Branding là một khía cạnh cực kỳ quan trọng của doanh nghiệp dù là lớn hay nhỏ, B2B hay bán lẻ. Branding là trải qua một quá trình mà thương hiệu của bạn được khắc sâu vào tâm trí của khách hàng, và nó là cầu nối cảm xúc giữa khách hàng và doanh nghiệp.",
      description:
        "",
    }),
    new ProjectModel({
      url:
        "https://wordsforwp.com/wp-content/uploads/2020/10/170119-Planning-Your-Marketing-Strategy-and-Tactics.jpg",
      tags: ["Strategy"],
      title: "Bất kỳ doanh nghiệp nào cũng cần phải có chiến lược kinh doanh (Strategic) cho riêng mình. Chính nhờ những chiến lược kinh doanh độc đáo và khác biệt sẽ giúp những doanh nghiệp đạt được thành công một cách nhanh chóng.",
      description:"",
    }),
    new ProjectModel({
      url:
        "https://caodang.fpt.edu.vn/wp-content/uploads/DIGITALMARKETINGcangi_1.jpg",
      tags: ["Digital Marketing"],
      title: "Với sự thông dụng của Internet ngày nay thì việc truyền thông kỹ thuật số là một trong những yếu tố thiết yếu để đưa doanh nghiệp tiếp cận gần hơn, kịp thời hơn với khách hàng, đặc biệt là khách hàng mục tiêu.",
      description:"",
    }),
    new ProjectModel({
      url:
      "https://www.zucker-kommunikation.de/wp-content/uploads/2020/07/KI-Influencer.jpg",
      
      tags: ["Booking"],
      title: "Booking là một hoạt động trong marketing, đó có thể là booking báo, PR, KOL,... hoạt động này góp phần không nhỏ vào sự thành công của thương hiệu, giúp thúc đẩy hoạt động kinh doanh, tạo độ uy tín, gia tăng mức độ nhận diện cho thương hiệu.Tác động trực tiếp đến hành vi tiêu dùng, kích thích tăng trưởng doanh thu.",
      description:"",
    }),
    new ProjectModel({
      url:
        "https://nordiccoder.com/app/uploads/2020/01/56-coding.jpg",
      tags: ["Web/App"],
      title: "Khi nhắc đến công nghệ, thì web/app là những khởi nguồn cơ bản nhất, là bước đầu tiên để khách hàng tìm kiếm thông tin, tiếp cận doanh nghiệp bạn khi họ có nhu cầu.",
      description:"",
        }),
    new ProjectModel({
      url:
      "https://aimacademy.vn/wp-content/uploads/2019/10/influencer-marketing-2.jpg",
      tags: ["BECOME A INFLUENCER"],
      title: "Là một mảng hoàn toàn mới so với một Agency truyền thống, nhưng điều đó là một mà Kagency có thể làm được. Với việc đã có kinh nghiệm từ một trong những công ty thuộc hệ thống Kingdom Việt Nam là K-Menet đã và đang thực hiện.",
      description:"",
        
    }),
  ];

  var oddProject = [];
  var evenProject = [];

  projects.map((item, index) => {
    if ((index + 1) % 2 === 0) {
      return evenProject.push(item);
    } else {
      return oddProject.push(item);
    }
  });

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
