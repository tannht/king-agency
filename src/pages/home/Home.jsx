import React from "react";
import Banner from "./components/Banner";
import Projects from "./components/Projects/Projects";
import News from "./components/News";
import Info from "./components/Info";
import "./Home.scss";
function Home() {
  return (
    <div className="Home container">
      <Banner />
      <Info />
      <Projects />
      <News />
    </div>
  );
}

export default Home;
