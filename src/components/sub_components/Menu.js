import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

function showSubmenu() {
  $("#sub-menu").removeClass("hide");
}
function hideSubmenu() {
  $("#sub-menu").addClass("hide");
}


function Menu() {
  return (
    <div>
      <div className="list-group" id="main-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About us</NavLink>
        <NavLink
          to="/our-work"
          id="our-work"
          onMouseOut={hideSubmenu}
          onMouseOver={showSubmenu}
        >
          Our work
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
      </div>
      {/*sub menu */}
      <div className="list-group hide" id="sub-menu" onMouseOver={showSubmenu}>
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
