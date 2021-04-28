import Slide from "@material-ui/core/Slide";
import { Button } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import "./submenu.css";

const NavButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalsubMenu, setModalSubmenu] = useState(false);
  const [submenu, setSubmenu] = useState("none");
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const openNav = () => {
    let element = document.getElementById("myNav");
    ReactDOM.findDOMNode(element).style.height = "100%";
  };

  const closeNav = () => {
    let element = document.getElementById("myNav");
    ReactDOM.findDOMNode(element).style.height = "0%";
  };
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };
  // const displaysub =  () =>{
  //   setSubmenu("block")
  // }

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const hideSubMenu = () =>{
  //   setSubmenu("none")

  // };
  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
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
      {/* <Menu  className="MenuStyle"/> */}
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <Link className="menu-item" onClick={closeNav} to="/">
            Home
          </Link>
          <Link className="menu-item" onClick={closeNav} to="/about-us">
            About us
          </Link>
          <Link className="menu-item" onClick={closeNav} to="/our-work">
            Our work
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

      {/* <Modal
        className="NavButtonModal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={true}
      >

        <div className="list-group main-menu"  id="main-menu">

      <Link onClick={()=>setIsModalVisible(false)} className="menu-item" to="/" >Home</Link>
      <Link onClick={()=>setIsModalVisible(false)}   className="menu-item" to="/about-us" >About us</Link>
      <Popover content={content} placement="right">
      <Link onClick={()=>setIsModalVisible(false)} className="menu-item" to="/our-work" >Our work</Link>
      </Popover>
      <Link onClick={()=>setIsModalVisible(false)} className="menu-item" to="/projects" >Projects</Link>
      <Link onClick={()=>setIsModalVisible(false)} className="menu-item" to="/blog" >Blog</Link>
      <Link onClick={()=>setIsModalVisible(false)} className="menu-item" to="/contact-us" >Contact us</Link>
    </div>
    
      </Modal>
       */}
    </div>
  );
};

export default NavButton;
