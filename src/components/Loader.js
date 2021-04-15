import React from "react";
import logoWhite from "../assets/img/logowhite.png";
import "../assets/css/Styles.css";

function Loader(props) {
  return (
    <div>
      <section
        className={`d-${props.display} align-items-center justify-content-center loader`}
      >
        {/* <div className="container w-100 d-inline-flex justify-content-center"> */}
        <img src={logoWhite} alt="Logo" className="loader-logo" />
        {/* </div> */}
      </section>
    </div>
  );
}

export default Loader;
