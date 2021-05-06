import React, { useState, useEffect } from "react";
import Button from "./Button";

import dots from "../assets/img/design/dots.svg";
import logo from "../assets/img/design/logo.svg";
import navUrls from "./../constant/navUrls";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";

function Footer() {
  const history = useHistory();
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
              <a href="mailto:info@emotorad.com">info@emotorad.com</a>
              <h5 className="mt-5">Call us on</h5>
              <a href="tel:+918686050590">+91-8686050590</a>
              <h5 className="mt-5">Social Media</h5>
              <div className="d-flex align-items-center social-links">
                <a
                  target="_blank"
                  href="https://www.facebook.com/EMotorad"
                  className="mr-3"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/ElectroMotorad"
                  className="mr-3"
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/motorad-electro/"
                  className="mr-3"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/e_motorad/"
                  className="mr-3"
                >
                  <i className="fab fa-instagram-square"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5">
              <h5>Find us here</h5>
              <p>
                EMotorad Head Office,
                <br />
                At post Jambe, taluka Mulshi, 169/2 Sangawade Road, <br />
                Pune - 411033, <br />
                Maharashtra
              </p>
              <h5 style={{ marginTop: "20px" }}>Em International Office</h5>
              <p>
                The Business Centre, Al Shmookh <br />
                Building, UMM Al Quwain FTZ <br />
                UMM Al Quwain, UAE
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="d-flex flex-wrap align-items-center justify-content-around h-100">
                <img
                  data-aos="fade"
                  src={logo}
                  alt="Logo"
                  className="mx-auto my-3"
                />
                <div className="vertical-rule"></div>
                <div className="d-block mx-auto" data-aos="fade">
                  <div className="my-2">
                    <button
                      onClick={() => history.push(navUrls.testride)}
                      className="bg-transparent border-0 px-0 text-left w-100"
                    >
                      <Button text="Book a test ride" />
                    </button>
                  </div>
                  <div className="my-2">
                    <button
                      onClick={() => history.push(navUrls.contact)}
                      className="bg-transparent border-0 px-0 text-left w-100"
                    >
                      <Button text="Reach us out" />
                    </button>
                  </div>
                  <div className="my-2">
                    <a
                      target="_blank"
                      href="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/products/brochures/EM+Brochure.pdf"
                    >
                      <Button text="Download brochure" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright">
            &copy; All Rights reserved by Inkodop technologies Pvt Ltd.
            {/* | Privacy Policy | Credits */}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
