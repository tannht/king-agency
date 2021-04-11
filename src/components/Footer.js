import React from "react"
import { NavLink } from "react-router-dom"
function Footer() {
  return (
    <div className="footer ">
      {/* INFO */}
      <div className="footer-content container">
        <div className="footer-info">
          125/2 Hoa Hung Street, Ward 12, District 10, Ho Chi Minh City
          <ul>
            <li>
              <i class="fas fa-phone"></i>
              020 7566 2565
            </li>
            <li>
              <i class="far fa-envelope"></i>
              username@domain.com
            </li>
          </ul>
        </div>
        {/* SOCIAL */}
        <div className="footer-social">
          <div className="footer-fanpage"></div>
          <div className="footer-iconlink">
            <ul>
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fab fa-youtube"></i>
              </li>
              <li>
                <i className="fab fa-google"></i>
              </li>
            </ul>
          </div>
        </div>
        {/* SERVICE LINKS */}
        <div className="footer-servicelink"></div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-left">
          Copyright©2020. KAGENCY Co.Ltd
        </div>
        <div className="bottom-right">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="#">Terms and Conditions</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
