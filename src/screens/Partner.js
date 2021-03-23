import React from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import partnerSide from "../assets/img/backgrounds/partner-side.jpg";

import "../assets/css/Partner.css";
import { useFormik } from "formik";
import axios from "axios";
import Header from "./../components/Header";
import Footer from "../components/Footer";

function Partner() {
  const formik = useFormik({
    initialValues: {
      name: "",
      organisation_name: "",
      address: "",
      email: "",
      phone: "",
      interested_in: "showroom",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios
        .post("http://localhost:8000/v1/user/partner", values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div>
      <Header />

      <section id="partner-hero">
        <div className="container">
          <h3 className="pri">Partner with us</h3>
          <h1>Become our partner</h1>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <Button text="View products" />
        </div>
      </section>

      <section id="form">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 col-md-6 form-img">
            <img src={partnerSide} alt="Cycle" />
          </div>
          <div className="col-lg-6 col-md-6 align-content-center">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="mb-5">Fill the form!</h3>
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
                    name="phone"
                    id="phone"
                    placeholder="Contact Number"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </div>
              </div>
              <div className="form-group mb-5">
                <label for="cars">Interested in:</label>
                <select
                  id="interested_in"
                  name="interested_in"
                  onChange={formik.handleChange}
                  value={formik.values.interested_in}
                >
                  <option value="showroom">Exclusive Showroom</option>
                  <option value="dealership">Dealership</option>
                  <option value="distributorship">Distributorship</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-transparent border-0 mx-auto w-100"
              >
                <Button text="Enquire" color="black" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Partner;
