import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/Styles.css";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-180929846-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

AOS.init({
  duration: 1000,
  delay: 100,
});

ReactDOM.render(<App />, document.getElementById("root"));
