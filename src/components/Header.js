import React, { useEffect } from "react";
import logoWhite from "../assets/img/logowhite.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (this.screen.width > 500) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
      }
      if (currentScrollPos > 400) {
        document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
      } else {
        document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0)";
      }
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <div id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logoWhite} alt="Logo" />
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-lg-flex align-items-center">
            <li className="nav-item mt-2 ml-5">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mt-2 ml-5">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item mt-2 ml-5">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item mt-2 ml-5">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
