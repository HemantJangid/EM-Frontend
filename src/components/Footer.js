import React from "react";
import Button from "./Button";

import dots from "../assets/img/design/dots.svg";
import logo from "../assets/img/design/logo.svg";

function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <h3>Contact Us</h3>
          <p>We’d love to hear from you</p>
          <img src={dots} alt="Dots" className="dots" />
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mt-5">
              <h5>Email us at</h5>
              <a href="#">info@emotorad.com</a>
              <h5 className="mt-5">Call us on</h5>
              <a href="#">+91-8686050590</a>
            </div>
            <div className="col-lg-3 col-md-6 mt-5">
              <h5>Find us here</h5>
              <p>
                EMotorad Head Office, At post Jambe, taluka Mulshi, 169/2
                Sangawade Road, <br />
                Pune - 411033, <br />
                Maharashtra
              </p>
            </div>
            <div className="col-lg-6 col-md-12 mt-5">
              <div className="footer-logo-box">
                <img src={logo} alt="Logo" />
                <div className="vertical-rule"></div>
                <Button text="Reach us out" />
              </div>
            </div>
          </div>
          <p className="copyright">
            &copy; All Rights reserved | Privacy Policy | Credits
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
