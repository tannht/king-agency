import React from "react";
import Banner from "./components/Banner";
import Footer from "../../components/Footer"
import ProjectsComponent from "../../components/projects_components/ProjectsComponent";
import News from "./components/news_components/News";
import Info from "./components/Info";
import "./Home.scss";
import ClientsLogo from "../../components/ClientsLogo";
import $ from 'jquery';

function Home() {
  
  const HeaderComponent = () => (
    <div className="projects-header">
      <h3>
      Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE Net, Vala… Sự tận tâm của Kagency được minh chứng qua sự hiệu quả và đảm bảo mọi nhu cầu của khách hàng đều được hoàn thành một cách trọn vẹn nhất.
      </h3>
      <p>
      Với Kagency chúng tôi, khách hàng như một đối tác, chính vì vậy sự phối hợp giữa Kagency và khách hàng là sự kết nối chặt chẽ khiến suốt quá trình đồng hành diễn ra một cách thuận lợi. Kết quả đạt được về sự tăng trưởng doanh thu, danh tiếng thương hiệu của đối tác được đẩy mạnh hơn mong đợi. Đó là lý do vì sao Kagency ngày càng được nhiều khách hàng lựa chọn như là một đối tác chiến lược.
      </p>
    </div>
  );
  return (
    <div className="Home">
      <Banner />
      <Info />
      <div className="projects-component" onScroll={()=>alert("Table Scrolled")}>
        <ProjectsComponent headerComponent={<HeaderComponent />} />
      </div>
      <ClientsLogo />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
