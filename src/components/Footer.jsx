import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import SubMenu from "./sub_components/SubMenu";
import ytGrey from "../assets/images/icons/yt_grey.svg";
import pinGrey from "../assets/images/icons/pin_grey.svg";
import insGrey from "../assets/images/icons/ins_grey.svg";
import inlGrey from "../assets/images/icons/inl_grey.svg";
import LogoIcon from "../assets/images/logo.svg";
import {
  Slide,
  Dialog
} from "@material-ui/core";
import { FaTimes } from "react-icons/fa";
import SubscribeNews from "../components/SubscribeNews";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Footer = ({ hiddenContact = false, url }) => {
    const backgroundModal = {
        background: `linear-gradient(90deg, rgba(8,94,114, 0.6), rgba(8,94,114, 0.8)), 
        url('https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="footer ">
      <div className={hiddenContact ? "d-none" : "d-block"}>
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
              <div className="subscribe">
                {/* <Button
                  className="footer-modal-button"
                  variant="outlined"
                  color="primary"
                  onClick={handleClickOpen}
                >
                  Signup Newsletter
                </Button> */}
                <Link to="/" onClick={handleClickOpen}>
                  <span>Signup Newsletter</span>
                </Link>
                <Dialog
                  fullScreen
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Transition}
                >
                  <div
                    style={backgroundModal}
                  >
                    <div
                      style={{
                        color: "white",
                        display: "flex",
                        width: "90px",
                        margin: "9% auto 30px auto",
                      }}
                      className="subscribe-close"
                      onClick={handleClose}
                    >
                      <FaTimes
                        className="subscribe-modal-icon"
                        style={{
                          display: "block",
                          // margin: "30px auto",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <span
                        style={{
                          margin: "auto 0px",
                          fontWeight: "700",
                          fontSize: "18px",
                          textTransform: "uppercase",
                        }}
                      >
                        Close
                      </span>
                    </div>
                    <SubscribeNews />
                  </div>
                </Dialog>
              </div>
              {/* <button>Signup Newsletter</button> */}
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
    </div>
  );
};

export default Footer;
