import React, { useState } from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import partnerSide from "../assets/img/backgrounds/partner-side-min.jpeg";

import "../assets/css/Partner.css";
import { useFormik } from "formik";
import axios from "axios";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import navUrls from "./../constant/navUrls";
import constants from "../constant/RequestUrls";
import { Helmet } from "react-helmet";
import { addItem } from "./../redux/actions/cart";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";

function Partner() {
  const history = useHistory();
  const [formLoading, setFormLoading] = useState(false);

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
      setFormLoading(true);
      // alert(JSON.stringify(values, null, 2));
      axios
        .post(`${constants.base_url}${constants.partner}`, values)
        .then((res) => {
          let email_values = {
            email: "info@emotorad.com",
            subject: "A new Partner request is recieved.",
            message: `<h2>A new Partner request has been recieved from ${values.name} at Emotorad Website</h2><h2>Order Details</h2><table><tbody><tr><td>Name</td><td>${values.name}</td></tr><tr><td>Organisation Name</td><td>${values.organisation_name}</td></tr><tr><td>Email</td><td>${values.email}</td></tr><tr><td>Address</td><td>${values.address}</td</tr><tr><td>Phone Number</td><td>${values.phone}</td></tr><tr><td>Interested In</td><td>${values.interested_in}</td></tr></tbody></table>`,
            meta: {},
          };

          axios
            .post(`${constants.base_url}${constants.email}`, email_values)
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
                Swal.fire({
                  text: `${res.data.message}`,
                  icon: "success",
                });
                // alert(res.data.message);
                formik.resetForm();
                setFormLoading(false);
              }
            })
            .catch((err) => {
              console.log(err);
            });
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            text: `${err.response.data.message}`,
            icon: "error",
          });
          // alert(err.response.data.message);
        });
    },
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Partner With Us | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
        <meta
          name="description"
          content="Looking to find a trusted, reliable and one of the fastest growing partner in eBike, EV and electric cycle Industry, feel free pick your phone and ring us or you can drop in a message in the form below"
        />
      </Helmet>

      <Header />

      <section id="partner-hero">
        <div className="container">
          <h3 className="pri">Partner with us</h3>
          <h1>Become our partner</h1>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <button
            onClick={() => history.push(navUrls.products)}
            className="bg-transparent border-0 text-left w-100"
          >
            <Button text="View products" />
          </button>
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
                    required
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
                    required
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
                  required
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
                    required
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
                    required
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
                  required
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
                disabled={formLoading}
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
