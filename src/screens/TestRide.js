import React from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import rect from "../assets/img/backgrounds/rect.jpg";
import man from "../assets/img/backgrounds/man.jpg";
import common from "../assets/img/backgrounds/common.png";
import moment from "moment";
import { useFormik, Field, Form } from "formik";

import "../assets/css/TestRide.css";
import { styled } from "styled-components";
import { nodeName } from "jquery";

function TestRide() {
  const todays_date_obj = new Date();
  const todays_date = moment(todays_date_obj).format("YYYY-MM-DD");

  const formik = useFormik({
    initialValues: {
      name: "",
      organisation_name: "",
      address: "",
      email: "",
      number: "",
      date: "",
      time_slot: "",
      bike_name: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <section id="hero">
        <div className="container">
          <h3 className="pri">Book a test ride</h3>
          <h1>Experience unparallel</h1>
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
            <form onSubmit={formik.handleSubmit}>
              <h3 className="mb-5">Book a test ride!</h3>
              <div className="form-row form-group">
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="organisation_name"
                    id="organisation_name"
                    placeholder="Organisation Name"
                    onChange={formik.handleChange}
                    value={formik.values.organisation_name}
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
                  onChange={formik.handleChange}
                  value={formik.values.address}
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
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Contact Number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                  />
                </div>
              </div>
              <div className="form-row form-group">
                <div className="col-lg-6">
                  <label for="date">Date:</label>
                  <input
                    className="mb-4"
                    type="date"
                    name="date"
                    id="date"
                    style={{ textTransform: "uppercase" }}
                    min={todays_date}
                    onChange={formik.handleChange}
                    value={formik.values.date}
                  />
                </div>
                <div className="col-lg-6 pt-1">
                  <label for="time_slot">Choose your time slot:</label>
                  <select
                    id="time_slot"
                    name="time_slot"
                    onChange={formik.handleChange}
                    value={formik.values.time_slot}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-5">
                <label for="bike_name">Choose your bike:</label>
                <select
                  id="bike_name"
                  name="bike_name"
                  onChange={formik.handleChange}
                  value={formik.values.bike_name}
                >
                  <option value="t_rex">T-Rex</option>
                  <option value="emx">EMX</option>
                  <option value="doodle">Doodle</option>
                </select>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <Button text="Enquire" color="black" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestRide;
