import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <div className="logo">
    <NavLink to="/">
      <img alt="" src="assets/images/logo.svg"></img>
    </NavLink>
  </div>
);

export default Logo;
