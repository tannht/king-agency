import React, { Component } from "react";
import "./social.css";

const SocialIcon = ({ icons, url }) => {
  return (
    <div>
      <div className="footer-iconlink1">
        {icons.map((icon) => (
          <img src={icon} alt="" />
        ))}
      </div>
    </div>
  );
};

export default SocialIcon;
