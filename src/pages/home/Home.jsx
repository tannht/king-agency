import React from "react";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import News from "./components/News";
import "./Home.scss";
function Home() {
  return (
    <div className="Home container">
      <Banner />
      <Projects />
      <News />
    </div>
  );
}

export default Home;
