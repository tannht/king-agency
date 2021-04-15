import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="list-group main-menu" id="main-menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About us</NavLink>
      <NavLink to="/our-work">Our work</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact-us">Contact us</NavLink>
    </div>
  );
}

export default Menu;
