import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img alt="" src="./assets/images/logo.svg" width="auto"></img>
    </Link>
  </div>
);

export default Logo;
