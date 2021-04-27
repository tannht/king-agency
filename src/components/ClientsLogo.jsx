import React from "react";
import "./ClientsLogo.scss";
import LogoPlaceHolder from "../assets/images/logo_placeholder.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const ClientsLogo = () => {
  const logos = [
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
    LogoPlaceHolder,
  ];

  return (
  

    <div className="ClientsLogo">
    <ScrollAnimation animateIn='flipInX'
    delay={800}
  animateOut='flipOutX'>
      <div className="container">
        <h1>Our Clients</h1>
        <div className="row">
          {logos.map((logo, index) => (
            <div className="col-4 col-xs-4 col-sm-4 col-md-3 col-lg-2 col-xl-2" key={index} >
              <img src={logo} alt="" key={index} />
            </div>
          ))}
        </div>
      </div>
      </ScrollAnimation>

    </div>
  );
};

export default ClientsLogo;
