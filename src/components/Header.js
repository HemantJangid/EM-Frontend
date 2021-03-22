import React, { useEffect } from "react";
import logoWhite from "../assets/img/logowhite.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Header = () => {
  // useEffect(() => {
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (this.screen.width > 500) {
  //       if (prevScrollpos > currentScrollPos) {
  //         document.getElementById("navbar").style.top = "0";
  //       } else {
  //         document.getElementById("navbar").style.top = "-100px";
  //       }
  //     }
  //     if (currentScrollPos > 400) {
  //       document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
  //     } else {
  //       document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0)";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // });
  {
    /* <img src={logoWhite} alt="Logo" className="img-fluid" /> 
             <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >*/
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg py-3 bg-black">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={logoWhite} alt="Logo" className="img-fluid" /></a>
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/">
                  Home
              </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link mx-2 dropdown-toggle" to="/products" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Products
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/">EMX</Link>
                  <Link className="dropdown-item" to="/">Doodle</Link>
                  <Link className="dropdown-item" to="/">T-Rex</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/about">
                  About Us
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/contact">
                  Contact Us
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
