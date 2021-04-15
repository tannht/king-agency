import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavButton from "./sub_components/NavButton";
import "./Header.scss";

function Header() {
  return (
    <div className="header-section">
      <nav className="navbar container">
        <Logo />
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/our-work">Our work</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-us">Contact us</NavLink>
          </li>
        </ul>
        {/*--NavButtion --*/}
        <div id="NavButton">
          <NavButton />
        </div>
      </nav>
    </div>
  );
}

export default Header;
