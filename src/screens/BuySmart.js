import React from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import rect from "../assets/img/backgrounds/rect.jpg";
import man from "../assets/img/backgrounds/man.jpg";
import common from "../assets/img/backgrounds/common.png";
import moment from "moment";
import { useFormik, Field, Form } from "formik";

import "../assets/css/BuySmart.css";

function BuySmart() {
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
      vehicle_name: "",
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

      <section id="savings-calculator">
        <div className="container">
          <h3 style={{ color: "black" }}>Savings Calculator</h3>
          <p style={{ color: "black" }}>Save even after buying</p>
          <img src={dots} alt="Dots" className="dots" />
          <div className="col-lg-6" style={{ padding: "0" }}>
            <form onSubmit={formik.handleSubmit}>
              <table cellPadding="10">
                <tr>
                  <td>Number of scooters used:</td>
                  <td>
                    <input
                      className="ml-5"
                      type="number"
                      name="num_scooters"
                      id="num_scooters"
                      onChange={formik.handleChange}
                      value={formik.values.num_scooters}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>
                    <input
                      className="ml-5"
                      type="number"
                      name="num_scooters"
                      id="num_scooters"
                      onChange={formik.handleChange}
                      value={formik.values.num_scooters}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Battery</td>
                  <td>
                    <input
                      className="ml-5"
                      type="number"
                      name="num_scooters"
                      id="num_scooters"
                      onChange={formik.handleChange}
                      value={formik.values.num_scooters}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Derailleur</td>
                  <td>
                    <input
                      className="ml-5"
                      type="number"
                      name="num_scooters"
                      id="num_scooters"
                      onChange={formik.handleChange}
                      value={formik.values.num_scooters}
                    />
                  </td>
                </tr>
              </table>
              <button
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginTop: "3rem",
                }}
              >
                <Button text="Enquire" color="black" />
              </button>
            </form>
          </div>
          <div className="col-lg-6" style={{ padding: "0" }}>
            <div className="card-savings">hello world</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuySmart;
