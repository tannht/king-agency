import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/logo.svg";
import $ from "jquery";
const Logo = () => {
  const hanldeCloseNav = () => {
    $("#myNav").css({ height: 0 });
    $("#iconmenu").html(
      `<i style='color:white' class="fas fa-bars fa-2x"></i>`
    );
  };
  return (
    <div style={{ zIndex: 200000 }} className="logo">
      <Link to="/" onClick={hanldeCloseNav}>
        <img alt="" src={LogoIcon} width="auto"></img>
      </Link>
    </div>
  );
};

export default Logo;
