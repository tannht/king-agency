import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <div>
      <div class="list-group" id="main-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About us</NavLink>
        <NavLink to="/our-work">Our work</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
      </div>
      {/*sub menu */}
      <div className="list-group" id="sub-menu">
        <NavLink to="#">Strategy</NavLink>
        <NavLink to="#">Branding</NavLink>
        <NavLink to="#">Digital Marketing</NavLink>
        <NavLink to="#">Web/App</NavLink>
        <NavLink to="#">Booking</NavLink>
        <NavLink to="#">Become a Influencer</NavLink>
      </div>
    </div>
  );
}

export default Menu;
