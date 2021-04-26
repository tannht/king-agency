import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import SubMenu from "./sub_components/SubMenu";
import ytGrey from '../assets/images/icons/yt_grey.svg';
import pinGrey from '../assets/images/icons/pin_grey.svg';
import insGrey from '../assets/images/icons/ins_grey.svg';
import inlGrey from '../assets/images/icons/inl_grey.svg';
import LogoIcon from '../assets/images/logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { FaTimes } from "react-icons/fa";


import {IconButton,Toolbar,AppBar,Button,Slide} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close';

import PrivacyPolicy from '../pages/privacy_policy/PrivacyPolicy';
import Term from '../pages/privacy_policy/Term';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor:'white'

  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  container: {
    height: 200,
    position: "relative",
    
  },
  
  buttoncenter: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

const TransitionTerm = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Footer = ({ hiddenContact = false }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openterm, setOpenTerm] = React.useState(false);

  const handleClickOpen = (event) => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleClickOpenTerm = (event) => {
    setOpenTerm(true);
  };

  const handleCloseTerm = (event) => {
    setOpenTerm(false);
  };



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
                  <Link to="#" onClick={handleClickOpen}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClickOpenTerm} to="#">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    {/* Start of Chính sách quyền riêng tư Modal*/}

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar color="secondary"  className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <FaTimes style={{color:'black'}}  />
            </IconButton>
            
           
          </Toolbar>
        </AppBar>
       
      <PrivacyPolicy/>
      </Dialog>
    {/* End of Chính sách quyền riêng tư Modal*/}

    {/* Start of Điều khoản dịch dụ Modal*/}
      <Dialog fullScreen open={openterm} onClose={handleCloseTerm} TransitionComponent={TransitionTerm}>
        <AppBar color="secondary"  className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseTerm} aria-label="close">
              <FaTimes style={{color:'black'}}  />
            </IconButton>
            
          
          </Toolbar>
        </AppBar>
       
      <Term/>
      </Dialog>
         {/* End of Điều khoản dịch dụ Modal*/}

    </div>
  );
};

export default Footer;
