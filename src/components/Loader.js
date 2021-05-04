import React from "react";
import logoWhite from "../assets/img/logowhite.png";
import "../assets/css/Styles.css";

function Loader(props) {
  return (
    <div>
      <section
        className={`d-${props.display} align-items-center justify-content-center loader`}
      >
        {props.logo === "hide" ? (
          ""
        ) : (
          <img src={logoWhite} alt="Logo" className="loader-logo" />
        )}
      </section>
    </div>
  );
}

export default Loader;
