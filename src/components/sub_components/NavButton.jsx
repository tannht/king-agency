import Button from "@material-ui/core/Button";
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
import "./SubMenu.scss";
import NewProjectButton from "../../pages/home/components/NewProjectButton";
import $ from "jquery";
const styles = {
  bounceInDown: {
    animation: "x 8s",
    animationName: Radium.keyframes(bounceInDown, "bounceInDown"),
  },
};

const NavButton = (props) => {
  const icons = [ytGrey, pinGrey, inlGrey, insGrey];
  const [openmn, setOpenmn] = useState(false);

  const openNav = () => {
    setOpenmn((openmn) => !openmn);
    //console.log(!openmn)

    if (openmn == false) {
      let element = document.getElementById("myNav");
      let iconmn = document.getElementById("iconmenu");
      ReactDOM.findDOMNode(element).style.height = "100%";
      ReactDOM.findDOMNode(
        iconmn
      ).innerHTML = `<i class="fas fa-times fa-2x"></i>`;
      var div = $(".menu-item");
      div.animate({ opacity: "1", transform: "translateY(-30px)" }, "3000");
    } else if (openmn == true) {
      let element = document.getElementById("myNav");
      ReactDOM.findDOMNode(element).style.height = "0%";
      let iconmn = document.getElementById("iconmenu");
      ReactDOM.findDOMNode(
        iconmn
      ).innerHTML = `<i style='color:white' class="fas fa-bars fa-2x"></i>`;
      var div = $(".menu-item");
      div.animate({ transform: "translateY(0px)", opacity: "0" }, "3000");
    }
  };

  const closeNav = (e) => {
    setOpenmn(!true);
    let element = document.getElementById("myNav");
    ReactDOM.findDOMNode(element).style.height = "0%";
    let iconmn = document.getElementById("iconmenu");

    ReactDOM.findDOMNode(
      iconmn
    ).innerHTML = `<i style='color:white' class="fas fa-bars fa-2x"></i>`;
  };

  const closeModal = () => {
    let mymodal = document.getElementById("myNavModal");
    // console.log(mymodal);
    ReactDOM.findDOMNode(mymodal).style.width = "0%";
  };

  return (
    <div>
      <Button style={{ zIndex: 2000000 }} onClick={openNav} id="menu">
        <span id="iconmenu">
          <i class="fas fa-bars fa-2x"></i>
        </span>
      </Button>
      <StyleRoot>
        <div id="myNav" className="overlay ">
          <div className="container head-nav">
            <span onClick={closeNav} className="logoicon"></span>
          </div>
          <span className="socialicon">
            <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-social">
              <SocialIcon icons={icons} />
            </div>
          </span>
          <span>
            <NewProjectButton />
          </span>

          <div className="overlay-content">
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
                  className="link-menu"
                >
                  Strategy
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="/branding"
                  className="link-menu"
                >
                  Branding
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                  className="link-menu"
                >
                  Digital Marketing
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                  className="link-menu"
                >
                  Web/App
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                  className="link-menu"
                >
                  Booking
                </Link>
                <Link
                  onClick={closeNav}
                  style={{ fontSize: 20 }}
                  data-aos={props.animation ? "fade-up" : ""}
                  to="#"
                  className="link-menu"
                >
                  Become a Influencer
                </Link>
              </div>
            </div>
            <Link className="menu-item" onClick={closeNav} to="/about-us">
              About us
            </Link>

            <Link className="menu-item" onClick={closeNav} to="/projects">
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
