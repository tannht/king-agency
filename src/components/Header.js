import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavButton from "./sub_components/NavButton";
function Header() {
  return (
    <nav className="navbar container">
      <Logo />
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about-us">About us</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/our-work">Our work</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact-us">Contact us</NavLink>
        </li>
      </ul>
      {/*--NavButtion --*/ }
      <div id="NavButton">
      <NavButton />
      </div>
    </nav>
  );
}

export default Header;
