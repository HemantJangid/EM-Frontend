import React from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import moment from "moment";
import { useFormik, Field, Form } from "formik";

import "../assets/css/BuySmart.css";
import Header from "./../components/Header";
import Footer from "../components/Footer";

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
      <Header />

      <section id="buy-hero">
        <div className="container">
          <h3 className="pri">INSURANCE / EMI / SAVINGS</h3>
          <h1>Buy smart with Emotorad</h1>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <Button text="View products" />
        </div>
      </section>

      <section id="savings-calculator">
        <div className="container">
          <h3>Savings Calculator</h3>
          <h4>Save even after buying</h4>
          <img src={dots} alt="Dots" className="dots" />
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
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
                  className="bg-transparent border-0 mt-3"
                >
                  <Button text="Calculate" color="black" />
                </button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card-savings h-100 py-3 px-3 text-center d-flex flex-nowrap flex-column justify-content-center">
                <h3>You Saved!</h3>
                <h2>2,00,000/-</h2>
                <h4>INR</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BuySmart;
