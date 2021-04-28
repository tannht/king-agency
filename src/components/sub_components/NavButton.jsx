import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import $ from 'jquery';
import SubMenu from "./SubMenu";
import "./submenu.css";
import { bounce , bounceInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Logo from "../Logo";
import SocialIcon from '../../socialcomponent/SocialIcon';
import Button from '@material-ui/core/Button';
import ytGrey from "../../assets/images/icons/yt_light.svg";
import pinGrey from "../../assets/images/icons/pin_light.svg";
import insGrey from "../../assets/images/icons/ins_light.svg";
import inlGrey from "../../assets/images/icons/inl_light.svg";
import NewProjectForm from '../../pages/home/components/NewProjectForm';
import { Slide, Dialog } from "@material-ui/core";
import { FaTimes } from "react-icons/fa";

const styles = {
  bounceInDown: {
    animation: 'x 8s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}
 
const NavButton = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalsubMenu, setModalSubmenu] = useState(false);
  const [submenu, setSubmenu] = useState("none");
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  const backgroundModal = {
		minHeight: "100vh",
		background: `linear-gradient(90deg, rgba(8,94,114, 0.6), rgba(8,94,114, 0.8)), 
        url('https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
	};
  const icons = [
    ytGrey, 
    pinGrey,
    inlGrey,
    insGrey
  ]

  const openNav = () => {
    let element = document.getElementById("myNav");
    ReactDOM.findDOMNode(element).style.height = "100%";
  };

  const closeNav = () => {
    let element = document.getElementById('myNav')
    ReactDOM.findDOMNode(element).style.height = "0%";
  }
  const openModal = () => {

    let element = document.getElementById('myNav');
    let mymodal = document.getElementById('myNavModal');
   // console.log(mymodal);
    ReactDOM.findDOMNode(element).style.height = "0%";
    ReactDOM.findDOMNode(mymodal).style.width = "100%";

  }
  const closeModal = () => {

    let mymodal = document.getElementById('myNavModal');
   // console.log(mymodal);
    ReactDOM.findDOMNode(mymodal).style.width = "0%";

  }
  
  const showMenu = () => {
    let element = document.getElementById('menusub');
    ReactDOM.findDOMNode(element).style.display = "block";
  }
  const hideMenu = () => {
    let element = document.getElementById('menusub');
    ReactDOM.findDOMNode(element).style.display = "none";
  }


  const content = (
    <div>
      <SubMenu />
    </div>
  );
  return (
    <div>
      <Button className="menu-collapse" onClick={openNav} label="menu">
        <i className="fas fa-bars fa-2x"></i>
      </Button>
      <StyleRoot>
      
      <div id="myNav" className="overlay" >
        <a className="closebtn" onClick={closeNav} >&times;</a>
        <span  style={styles.bounceInDown}  onClick={closeNav}  className="logoicon"><Logo/></span>
        <span  style={styles.bounceInDown} className="socialicon">
        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-social">
           <SocialIcon icons={icons}/>
          </div>

        </span>
        <span className='newproject' style={styles.bounceInDown}>
        <Button variant="contained" onClick={openModal}  >
        Start New Project
      </Button>
        </span>

        <div className="overlay-content" style={styles.bounceInDown}>

          <Link className="menu-item"  onClick={closeNav} to="/" >Home</Link>
          <div className="dropup">
        <Link className="dropbtn"  onClick={closeNav} to="/about-us" >Our work</Link>

         <div className="dropup-content" >
         <Link  onClick={closeNav} style={{fontSize:20}} data-aos={props.animation ? "fade-up" : ""} to="/test">
          Strategy
        </Link>
        <Link  onClick={closeNav}  style={{fontSize:20}}   data-aos={props.animation ? "fade-up" : ""} to="/branding">
          Branding
        </Link>
        <Link  onClick={closeNav} style={{fontSize:20}}  data-aos={props.animation ? "fade-up" : ""} to="#">
          Digital Marketing
        </Link>
        <Link onClick={closeNav} style={{fontSize:20}}  data-aos={props.animation ? "fade-up" : ""} to="#">
          Web/App
        </Link>
        <Link onClick={closeNav} style={{fontSize:20}}  data-aos={props.animation ? "fade-up" : ""} to="#">
          Booking
        </Link>
        <Link  onClick={closeNav}style={{fontSize:20}}  data-aos={props.animation ? "fade-up" : ""} to="#">
          Become a Influencer
        </Link>
       </div>
        </div>
                    <Link className="menu-item" onClick={closeNav} to="/about-us" >About us</Link>

          <Link  className="myMenu" onClick={closeNav} to="/projects" >Projects</Link>

          <Link  className="menu-item" onClick={closeNav} to="/blog" >Blog</Link>
          <Link  className="menu-item" onClick={closeNav} to="/contact-us" >Contact us</Link>
          
        </div>

      </div>
      </StyleRoot>
      <div id="myNavModal" className="overlaymodal">
  <a href="javascript:void(0)" className="closebtn" onClick={closeModal}>&times;</a>
  <div className="overlaymodal-content">
    <NewProjectForm/>
  </div>
</div>
     
    </div>
  );
};

export default NavButton;
