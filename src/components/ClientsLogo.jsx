import React from "react";
import "./ClientsLogo.scss";
import LogoPlaceHolder from "../assets/images/logo_placeholder.svg";

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
    </div>
  );
};

export default ClientsLogo;
