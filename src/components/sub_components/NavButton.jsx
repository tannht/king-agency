import Button from "@material-ui/core/Button";
import { Divider } from "antd";
import Radium, { StyleRoot } from "radium";
import React, { useState } from "react";
import { bounceInDown } from "react-animations";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import inlGrey from "../../assets/images/icons/inl_light.svg";
import insGrey from "../../assets/images/icons/ins_light.svg";
import pinGrey from "../../assets/images/icons/pin_light.svg";
import ytGrey from "../../assets/images/icons/yt_light.svg";
import NewProjectForm from "../../pages/home/components/NewProjectForm";
import SocialIcon from "../../socialcomponent/SocialIcon";
import Logo from "../Logo";
import "./SubMenu.scss";

const styles = {
  bounceInDown: {
    animation: "x 8s",
    animationName: Radium.keyframes(bounceInDown, "bounceInDown"),
  },
};

const NavButton = (props) => {
  const icons = [ytGrey, pinGrey, inlGrey, insGrey];

  const openNav = () => {
    let element = document.getElementById("myNav");
    ReactDOM.findDOMNode(element).style.height = "100%";
  };

  const closeNav = () => {
    let element = document.getElementById("myNav");
    ReactDOM.findDOMNode(element).style.height = "0%";
  };
  const openModal = () => {
    let element = document.getElementById("myNav");
    let mymodal = document.getElementById("myNavModal");
    // console.log(mymodal);
    ReactDOM.findDOMNode(element).style.height = "0%";
    ReactDOM.findDOMNode(mymodal).style.width = "100%";
  };
  const closeModal = () => {
    let mymodal = document.getElementById("myNavModal");
    // console.log(mymodal);
    ReactDOM.findDOMNode(mymodal).style.width = "0%";
  };

  return (
    <div>
      <Button className="menu-collapse" onClick={openNav} label="menu">
        <i className="fas fa-bars fa-2x"></i>
      </Button>
      <StyleRoot>
        <div id="myNav" className="overlay ">
          <div className="container head-nav">
            <span
              style={styles.bounceInDown}
              onClick={closeNav}
              className="logoicon"
            >
              <Logo />
            </span>
            <span>
              <a className="closebtn" onClick={closeNav}>
                &times;
              </a>
            </span>
          </div>
          <span style={styles.bounceInDown} className="socialicon">
            <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-social">
              <SocialIcon icons={icons} />
            </div>
          </span>
          <span className="newproject" style={styles.bounceInDown}>
            <Button variant="contained" onClick={openModal}>
              Start New Project
            </Button>
          </span>

          <div className="overlay-content" style={styles.bounceInDown}>
            <Link className="menu-item" onClick={closeNav} to="/">
              Home
            </Link>
            <div className="dropup">
              <Link className="dropbtn" onClick={closeNav} to="/about-us">
                Our work
              </Link>

              <div className="dropup-content">
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="/"
                >
                  Strategy
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="/branding"
                >
                  Branding
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                >
                  Digital Marketing
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                >
                  Web/App
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                >
                  Booking
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                >
                  Become a Influencer
                </Link>
              </div>
            </div>
            <Link className="menu-item" onClick={closeNav} to="/about-us">
              About us
            </Link>

            <Link className="myMenu" onClick={closeNav} to="/projects">
              Projects
            </Link>

            <Link className="menu-item" onClick={closeNav} to="/blog">
              Blog
            </Link>
            <Link className="menu-item" onClick={closeNav} to="/contact-us">
              Contact us
            </Link>
          </div>
        </div>
      </StyleRoot>
      <div id="myNavModal" className="overlaymodal">
        <a href="javascript:void(0)" className="closebtn" onClick={closeModal}>
          &times;
        </a>
        <div className="overlaymodal-content">
          <NewProjectForm />
        </div>
      </div>
    </div>
  );
};

export default NavButton;
