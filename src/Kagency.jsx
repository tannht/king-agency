import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BackTop } from "antd";
import "./Kagency.scss";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about_us/AboutUs";
import OurWork from "./pages/our_work/OurWork";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import Branding from "./pages/branding/Branding";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import ProjectDetailPage from "./pages/projects/ProjectDetailPage";

const Kagency = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" component={ProjectDetailPage} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={BlogDetailPage} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/branding" component={Branding} />
        </Switch>
      </Router>
      <BackTop />
    </div>
  );
};

export default Kagency;
