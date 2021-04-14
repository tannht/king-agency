import React from "react";
import { NavLink } from "react-router-dom";
import SubMenu from './sub_components/SubMenu'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        {/* INFO */}
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
      <div className="footer-social">
        {/* SOCIAL */}

        <div className="footer-fanpage"></div>
        <div className="footer-iconlink"></div>
      </div>
      <div className="footer-servicelink">
        {/* SERVICE LINKS */}
        {/*sub menu */}
        <SubMenu/>
      </div>

      <div className="bottom-bar">
        <div className="bottom-left">Copyright©2020. KAGENCY Co.Ltd</div>
        <div className="bottom-right">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="#">Terms and Conditions</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
