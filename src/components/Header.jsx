import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/our-work">Our work</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us">Contact us</Link>
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
