import React from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import rect from "../assets/img/backgrounds/rect.jpg";
import man from "../assets/img/backgrounds/man.jpg";
import common from "../assets/img/backgrounds/common.png";

import "../assets/css/Partner.css";

function Partner() {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <h3 className="pri">Partner with us</h3>
          <h1>Become our partner</h1>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <Button text="View products" />
        </div>
      </section>

      <section id="form">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 form-img">
            <img src={common} alt="Cycle" />
          </div>
          <div className="col-lg-6 align-content-center">
            <form action="">
              <h3 className="mb-5">Fill the form!</h3>
              <div className="form-row form-group">
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="organisation_name"
                    id="organisation_name"
                    placeholder="Organisation Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  className="mb-4"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div className="form-row form-group">
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
              <div className="form-group mb-5">
                <label for="cars">Choose a car:</label>
                <select id="cars" name="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <Button text="Enquire" color="black" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
