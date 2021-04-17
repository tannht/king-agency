import React from "react";
import Banner from "./components/Banner";
import Projects from "./components/projects_components/Projects";
import News from "./components/news_components/News";
import Info from "./components/Info";
import "./Home.scss";
import ClientsLogo from "../../components/ClientsLogo";
function Home() {
  return (
    <div className="Home">
      <Banner />
      <Info />
      <Projects />
      <ClientsLogo />
      <News />
    </div>
  );
}

export default Home;
