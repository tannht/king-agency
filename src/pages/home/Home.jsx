import React from "react";
import Banner from "./components/Banner";
import ProjectsComponent from "../../components/projects_components/ProjectsComponent";
import News from "./components/news_components/News";
import Info from "./components/Info";
import "./Home.scss";
import ClientsLogo from "../../components/ClientsLogo";
function Home() {
  const HeaderComponent = () => (
    <div>
      <h4>Projects</h4>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
  return (
    <div className="Home">
      <Banner />
      <Info />
      <div className="projects-component">
        <ProjectsComponent headerComponent={<HeaderComponent />} />
      </div>
      <ClientsLogo />
      <News />
    </div>
  );
}

export default Home;
