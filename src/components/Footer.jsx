import React from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./sub_components/SubMenu";
function Footer() {
  return (
    <div className="footer">
      <div className="row footer-content">
        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          {/* INFO */}
          <h3>Contact Us</h3>
          <div className="footer-info">
            125/2 Hoa Hung Street, Ward 12, District 10, Ho Chi Minh City
            <ul>
              <li>
                <i className="fas fa-phone" /> 0908 999 999
              </li>
              <li>
                <i className="far fa-paper-plane" /> info@kagency.com
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-social">
          <h3>Social Link</h3>
          <div className="footer-fanpage">
            <img src="assets/images/logo.svg" height={50} alt=""></img>
          </div>
          <div className="footer-iconlink">
              <img src="./assets/images/icons/yt_light.svg" alt=""/>
              <img src="./assets/images/icons/pin_light.svg" alt=""/>
              <img src="./assets/images/icons/ins_light.svg" alt=""/>
              <img src="./assets/images/icons/inl_light.svg" alt=""/>
          </div>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-servicelink">
          {/* SERVICE LINKS */}
          {/*sub menu */}
          <SubMenu />
        </div>
      </div>
      <div className="row">
        <div className="col-12 container">
          <div className="bottom-bar">
            <div className="bottom-left">Copyright©2021. KAGENCY Co.Ltd</div>
            <div className="bottom-right">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="#">Terms and Conditions</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;