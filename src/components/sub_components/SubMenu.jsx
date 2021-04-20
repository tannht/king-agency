import React from "react";
import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <div className="NavLink">
      {/*sub menu */}
      <div className="list-group">
      <Link to="#">Strategy</Link>
      <Link to="#">Branding</Link>
      <Link to="#">Digital Marketing</Link>
      <Link to="#">Web/App</Link>
      <Link to="#">Booking</Link>
      <Link to="#">Become a Influencer</Link></div>
    </div>
  );
}

export default SubMenu;
