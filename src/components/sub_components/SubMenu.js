import React from "react";
import { NavLink } from "react-router-dom";

function SubMenu() {
  return (
    <>
      {/*sub menu */}
      <div className="list-group">
      <NavLink to="#">Strategy</NavLink>
      <NavLink to="#">Branding</NavLink>
      <NavLink to="#">Digital Marketing</NavLink>
      <NavLink to="#">Web/App</NavLink>
      <NavLink to="#">Booking</NavLink>
      <NavLink to="#">Become a Influencer</NavLink></div>
    </>
  );
}

export default SubMenu;
