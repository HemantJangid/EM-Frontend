import React, { useState } from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import contactSide from "../assets/img/backgrounds/contact-side-min.jpeg";

import "../assets/css/Contact.css";
import { useFormik } from "formik";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import constants from "../constant/RequestUrls";
import { Helmet } from "react-helmet";
import navUrls from "../constant/navUrls";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";

function Contact() {
  const [formLoading, setFormLoading] = useState(false);
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
      setFormLoading(true);
      // alert(JSON.stringify(values, null, 2));
      axios
        .post(`${constants.base_url}${constants.contact}`, values)
        .then((res) => {
          let email_values = {
            email: "contactus@emotorad.com",
            subject: "A Lead is recieved.",
            message: `<h2>A new Lead has been recieved from ${values.first_name} ${values.last_name} at Emotorad Website</h2><h2>Lead Details</h2><table><tbody><tr><td>Name</td><td>${values.first_name} ${values.last_name}</td></tr><tr><td>Email</td><td>${values.email}</td></tr><tr><td>Address</td><td>${values.address}</td</tr><tr><td>Phone Number</td><td>${values.phone}</td></tr><tr><td>Query</td><td>${values.query}</td></tr></tbody></table>`,
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
          formik.resetForm();
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
          Contact Us | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
        <meta
          name="description"
          content="Want to get in touch with the most reliable and one of the fastest growing companies across India and beyond in EV space, feel free pick your phone and ring us or you can drop in a message in the form below."
        />
      </Helmet>

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
          <HashLink smooth to={`${navUrls.contact}#form`}>
            <Button text="Reach us" />
          </HashLink>
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
                    required
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
                    required
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
                    pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                    title="Phone Number should be 10 digits"
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

export default Contact;
