import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about_us/AboutUs";
import OurWork from "./pages/our_work/OurWork";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import { BackTop } from "antd";
import './Kagency.scss';

const Kagency = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/our-work">
            <OurWork />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
        </Switch>
      </Router>
      <BackTop />
    </div>
  );
};

export default Kagency;
