import React, { Fragment } from "react";
import ClientsLogo from "../../components/ClientsLogo";
import ProjectsComponent from "../../components/projects_components/ProjectsComponent";
import PageDescription from "../../components/PageDescription";
import "./Projects.scss";
import Footer from "../../components/Footer";

const Projects = () => {
  const HeaderComponent = () => (
    <div className="projects-header">
      <ul>
        <li>Strategy</li>
        <li>Branding</li>
        <li className="active">Digital Marketing</li>
        <li>
          <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  );
  return (
    <Fragment>
      <div className="Projects">
        <PageDescription
          title="Projects"
          titleContent="Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE Net, Vala… Sự tận tâm của Kagency được minh chứng qua sự hiệu quả và đảm bảo mọi nhu cầu của khách hàng đều được hoàn thành một cách trọn vẹn nhất."
          content="Với Kagency chúng tôi, khách hàng như một đối tác, chính vì vậy sự phối hợp giữa Kagency và khách hàng là sự kết nối chặt chẽ khiến suốt quá trình đồng hành diễn ra một cách thuận lợi. Kết quả đạt được về sự tăng trưởng doanh thu, danh tiếng thương hiệu của đối tác được đẩy mạnh hơn mong đợi. Đó là lý do vì sao Kagency ngày càng được nhiều khách hàng lựa chọn như là một đối tác chiến lược."
        />
        <div className="project-list">
          <ProjectsComponent headerComponent={<HeaderComponent />} />
        </div>
        <ClientsLogo />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Projects;
