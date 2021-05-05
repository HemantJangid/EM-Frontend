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
            email: `${values.email},dhanashree.nikhare@emotorad.com,renuka.kumbhar@emotorad.com,Contactus@emotorad.com`,
            subject: "Your Insurance Request has been recieved",
            // message: `<h2>A new user has been registered for community ${values.email}, ${todays_date}, accesss available, event invitation eligible`,
            meta: {},
            message: `
            <img src="https://cdn.discordapp.com/attachments/839438656644055040/839454312303427614/partner_with_us.png" alt="Doodle" style="width: 100%;">
    <div style=" display: flex; align-items: center; justify-content: center;">
        <div style="max-width: 600px;">
            <h2 style="font-family: serif; text-align: center; color: #949494;"><i>We appreciate your interest in
                    partnering with us to
                    bring the best of electric segment to the world.</i>
            </h2>
            <h1 style="text-align: center; font-family: serif;"><i>Thank You Writing to Us</i></h1>
            <h3 style="text-align: center">We are excited to speak to you further,</h3>
            <p style="text-align: center">Our team will get in touch with you in 24 hrs.</p>
            <p style="text-align: center">You can contact us on, at <a
                    href="mailto:contactus@emotorad.com">contactus@emotorad.com</a><br />or Call us directly at +91
                8686050590
            </p>
            <img src="https://cdn.discordapp.com/attachments/839438656644055040/839454311883735040/pARTNER_WITH_uS_2.png" alt="Doodle" style="width: 100%; margin-bottom: 30px;">
            <hr>
            <p style="text-align: center; color: #757575;">EM brings in a range of best electric bikes that are
                affordable, futuristic, and challenge the status
                quo. The e-bikes
                come with disc brakes and an alloy frame. The electric cycles by EM run on a combination of manual
                pedaling with battery
                assist and throttle.</p>
            <div style="text-align: center; margin-bottom: 70px; margin-top: 50px;">
                <a href="https://www.emotorad.com/">
                    <button
                        style="padding: 15px 18px; border: none; background-color: #89D085; font-weight: 700; font-size: 20px; color: #fff; border-radius: 10px;">Find
                        Out
                        More</button>
                </a>
            </div>
        </div>
    </div>
<div style="background-color: #333; padding-top: 70px; padding-bottom: 70px; color: #fff;">
  <div style=" display: flex; align-items: center;  justify-content: center;">
      <div style="max-width: 600px; text-align: center;">
      <div style="display: inline-flex; flex-direction: row;">
      <a href="https://www.facebook.com/EMotorad"
          style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><img
              src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/facebook.png" alt="Logo" style="height: 24px"></a>
      <a href="https://www.linkedin.com/company/emotorad/"
          style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><img
              src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/linkedin.png" alt="Logo" style="height: 24px"></a>
      <a href="https://www.instagram.com/e_motorad/"
          style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><img
              src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/instagram.png" alt="Logo" style="height: 24px"></a>
      <a href="https://www.emotorad.com/"
          style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px; "><img
              src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/website.png" alt="Link" style="height: 24px"></a>
  </div>
          <hr style="margin-top: 20px; margin-bottom: 30px;">
          <p><i>Copyright © 2021 EMotorad, All rights reserved.</i></p>
          <a style="color: #fff;" href="www.emotorad.com">www.emotorad.com</a>
          <p><b>Our mailing address is:</b></p>
          <p>EMotorad Head Office, At post Jambe, taluka Mulshi, 169/2 Sangawade Road, Pune 411033, Maharashtra
          </p>
      </div>
  </div>
</div>`,
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
