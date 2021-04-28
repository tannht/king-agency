import React, { useEffect } from "react";
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
import $ from "jquery";

const Kagency = () => {
  useEffect(() => {
    const handleScroll = () => {
      var scroll_pos = window.scrollY + $(window).height();
      const footerPosition = $("#footer").offset().top;
      if ($("#beginAnimationId").offset() && $("#endAnimationId").offset()) {
        const beginAnimationPosition = $("#beginAnimationId").offset().top;
        const endAnimationPosition = $("#endAnimationId").offset().top;
        console.log(beginAnimationPosition, endAnimationPosition);
        if (
          scroll_pos > footerPosition ||
          (scroll_pos > beginAnimationPosition &&
            scroll_pos < endAnimationPosition)
        ) {
          console.log("added dark class to 2 fixed button");
          $(".button-start-project-modal").addClass("project-button-dark");
          $(".backTop").addClass("backTopDark");
        } else {
          $(".backTop").removeClass("backTopDark");
          $(".button-start-project-modal").removeClass("project-button-dark");
        }
      } else {
        if (scroll_pos > footerPosition) {
          $(".backTop").addClass("backTopDark");
        } else {
          $(".backTop").removeClass("backTopDark");
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      <BackTop>
        <div className="backTop">
          <i className="fa fa-arrow-up fa-2x"></i>
        </div>
      </BackTop>
    </div>
  );
};

export default Kagency;
