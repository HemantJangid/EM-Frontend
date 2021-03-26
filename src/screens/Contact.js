import React from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import contactSide from "../assets/img/backgrounds/contact-side-min.jpg";

import "../assets/css/Contact.css";
import { useFormik } from "formik";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import constants from "../constant/RequestUrls";

function Contact() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      phone: "",
      query: "",
      meta: {},
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios
        .post(`${constants.base_url}${constants.contact}`, values)
        .then((res) => {
          alert(res.data.message);
          formik.resetForm();
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <Header />
      <section id="contact-hero">
        <div className="container">
          <h3 className="pri">Reach us out at</h3>
          <div className="d-flex flex-wrap">
            <h1>info</h1>
            <h1>@</h1>
            <h1>emotorad</h1>
            <h1>.</h1>
            <h1>com</h1>
          </div>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <Button text="View products" />
        </div>
      </section>

      <section id="form">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 col-md-6 form-img">
            <img src={contactSide} alt="Cycle" />
          </div>
          <div className="col-lg-6 col-md-6 align-content-center">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="mb-5">Ask any query!</h3>
              <div className="form-row form-group">
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.first_name}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.last_name}
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
              <div className="form-group">
                <textarea
                  name="query"
                  id="query"
                  rows="7"
                  // placeholder="Query"
                  onChange={formik.handleChange}
                  value={formik.values.query}
                ></textarea>
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

export default Contact;
