import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from '../assets/images/logo.svg';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img alt="" src={LogoIcon} width="auto"></img>
    </Link>
  </div>
);

export default Logo;
