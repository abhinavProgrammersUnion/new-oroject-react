import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoo.png";
import logoDark from "../../assets/img/logo-2.png";
import tp_banner from "../../assets/img/ad/ad-1.png";

const LogoArea = ({ className, dark }) => {
  return (
    <div className={`logo_area ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 align-self-center">
            <div className="banner1">
              <Link to="#">
                <img src={tp_banner} alt="banner" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoArea;

LogoArea.propTypes = {
  className: ProtoTypes.string,
  dark: ProtoTypes.bool,
};
