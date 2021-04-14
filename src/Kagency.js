import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurWork from "./components/OurWork";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { BackTop } from 'antd';

function Kagency() {
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
            <ContactUs />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <BackTop />
    </div>
  );
}

export default Kagency;
