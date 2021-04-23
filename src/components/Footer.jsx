import { useState } from "react";
import { Link } from "react-router-dom";
import SubMenu from "./sub_components/SubMenu";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ytGrey from '../assets/images/icons/yt_grey.svg';
import pinGrey from '../assets/images/icons/pin_grey.svg';
import insGrey from '../assets/images/icons/ins_grey.svg';
import inlGrey from '../assets/images/icons/inl_grey.svg';
import LogoIcon from '../assets/images/logo.svg';

const Footer = ({ hiddenContact = false }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="footer ">
      <div className={hiddenContact ? "d-none" : "d-block"} >
        <div className="row footer-content  container ">
          <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
            {/* INFO */}
            <h3>Contact Us</h3>
            <div className="footer-info ">
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
              <img src={LogoIcon} height={50} alt=""></img>
            </div>
            <div className="footer-iconlink">
            <img src={ytGrey} alt="" />
            <img src={pinGrey} alt="" />
            <img src={inlGrey} alt="" />
            <img src={insGrey} alt="" />
            </div>
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-servicelink">
            {/* SERVICE LINKS */}
            {/*sub menu */}
            <SubMenu />
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="copyright">
          <div className="row">
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <p>Copyright©2021. KAGENCY Co.Ltd</p>
            </div>
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <ul>
                <li>
                  <Link to="#" onClick={toggle}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 200 }}
        backdropTransition={{ timeout: 200 }}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          scelerisque nisl dolor,
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Footer;
