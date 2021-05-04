import React, { useState } from "react";
import "../assets/css/Community.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import constants from "../constant/RequestUrls";
import { useFormik } from "formik";
import axios from "axios";
import moment from "moment";

function Community() {
  const todays_date_obj = new Date();
  const todays_date = moment(todays_date_obj).format("YYYY-MM-DD");
  const [formLoading, setFormLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      frame_number: "",
      email: "",
      city: "",
    },
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      setFormLoading(true);

      axios
        .post(`${constants.base_url}${constants.community}`, values)
        .then((res) => {
          //   console.log(res);
          if (res.status === 200) {
            alert(res.data.message);
            formik.handleReset();
            let email_values = {
              email: `${values.email}`,
              subject: "Welcome to the Emotorad Community",
              // message: `<h2>A new user has been registered for community ${values.email}, ${todays_date}, accesss available, event invitation eligible`,
              meta: {},
              message: `
    <style>
        @import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
    </style>
    <img src="./doodletride.png" alt="Doodle" style="width: 100%;">
    <div style=" display: flex; align-items: center; justify-content: center;">
        <div style="max-width: 600px;">
            <h2 class="italic center"><i>Thank you for booking a test-ride with Emotorad</i>
            </h2>
            <h1 style="text-align: center">Your Test Ride is Confirmed!</h1>
            <h3 style="text-align: center">Test Ride details</h3>
            <p style="text-align: center">Here are your test ride details</p>
            <ul>
                <li><b>Customer Name:</b> Purshottam</li>
                <li><b>Customer Mobile:</b> Purshottam</li>
                <li><b>Customer Email:</b> Purshottam</li>
                <li><b>Model:</b> Purshottam</li>
                <li><b>Booking Date:</b> Purshottam</li>
                <li><b>Booking Time:</b> Purshottam</li>
                <li><b>Dealer Details:</b> Purshottam</li>
                <li><b>Test Ride Location:</b> Purshottam</li>
            </ul>
            <h3 style="text-align: center">In case of any queries, please reach out to us <br /> at <a
                    href="mailto:contactus@emotorad.com">contactus@emotorad.com</a></h3>
            <img src="doodle.jpeg" alt="Doodle" style="width: 100%;">
            <h2 style="text-align: center;"><i>Doodle - The Fat Tyre SUV of Electric Segment</i></h2>
            <h3>What makes Doodle the Right Choice for you?</h3>
            <hr>
            <p>Emotorad brings to you the power and luxury of futuristic Ebikes. We thoughtfully designed our Ebikes and
                we
                are
                sure
                you would love every minute of your ride.</p>
            <div style=" position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe width="560" height="315" style="   position: absolute; top: 0; left: 0; height: 100%;"
                    src="https://www.youtube.com/embed/5_orIQReJfY" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <hr style="margin-top: 30px;">
            <p style="text-align: center">Emotorad brings to you the power and luxury of futuristic Ebikes. We
                thoughtfully designed
                our Ebikes and
                we are sure
                you would love every minute of your ride.</p>
            <div style="text-align: center" style="margin-bottom: 70px; margin-top: 50px;">
                <button
                    style="  padding: 15px 18px; border: none; background-color: #89D085; font-weight: 700; font-size: 20px; color: #fff; border-radius: 10px;">Explore
                    More</button>
            </div>
        </div>
    </div>
    <div style="background-color: #333; padding-top: 70px; padding-bottom: 70px; color: #fff;">
        <div style=" display: flex; align-items: center;  justify-content: center;">
            <div style="max-width: 600px; text-align: center;">
                <div style="display: inline-flex; flex-direction: row;">
                    <a href="" style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><i
                            class="fab fa-facebook"></i></a>
                    <a href="" style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><i
                            class="fab fa-linkedin"></i></a>
                    <a href="" style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><i
                            class="fab fa-instagram"></i></a>
                    <a href="" style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><i
                            class="fas fa-link"></i></a>
                </div>
                <hr style="margin-top: 20px; margin-bottom: 30px;">
                <p><i>Copyright © 2021 EMotorad, All rights reserved.</i></p>
                <a href="www.emotorad.com">www.emotorad.com</a>
                <p><b>Our mailing address is:</b></p>
                <p>EMotorad Head Office, At post Jambe, taluka Mulshi, 169/2 Sangawade Road, Pune 411033, Maharashtra
                </p>
            </div>
        </div>
    </div>
`,
            };

            axios
              .post(`${constants.base_url}${constants.email}`, email_values)
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  formik.resetForm();
                  setFormLoading(false);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    },
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Community | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
        <meta
          name="description"
          content="EMotorad is a closely-knit community of enthusiasts who love to ride e-bikes, want to find their impact ambition, and share a common purpose of sustainability."
        />
      </Helmet>
      <Header />
      <section
        id="comm-hero"
        className="d-flex justify-content-center flex-column"
      >
        <div className="container h-100">
          <div className=" flex-column h-100">
            <h2 className="pri">Join the community</h2>
            <p>
              Welcome to the world of EM, The EM-Community is a place where many
              like you come together to become a team of extra-ordinary one’s!
            </p>
            <p>
              Here we all work together to find our impact ambition, connecting
              with each other for support and shared purpose, and enable one
              another to accelerate the impact. So, if you are interested in
              expanding your professional network, gaining more knowledge about
              impact topics and the Sustainable Development Goals (SDGs), and
              further develop your businesses, join us to reach to a bigger goal
              with like-minded people.
            </p>
            <p>
              Join the community and get invites and updates on all the EM
              events across the country. Enjoy exclusive discounts on
              accessories, extended warranties, and get a chance to feature on
              all our social pages.
            </p>
          </div>
        </div>
      </section>

      <section id="community-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-box">
                <form onSubmit={formik.handleSubmit}>
                  <h2 className="mb-4">
                    Fill the <span className="pri">Form</span>
                  </h2>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="form-control"
                      style={{ textTransform: "capitalize" }}
                      required
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>

                  {/* <div className="form-group">
                                        <input
                                            type="text"
                                            name="oname"
                                            id="oname"
                                            placeholder="Organisation's Name"
                                            className="form-control"
                                        />
                                    </div> */}
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className="form-control"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </div>
                  {/* <div className="form-group">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder="Address"
                                            className="form-control"
                                        />
                                    </div> */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      className="form-control"
                      required
                      style={{ textTransform: "capitalize" }}
                      onChange={formik.handleChange}
                      value={formik.values.city}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="frame_number"
                      id="frame_number"
                      placeholder="EM Frame Number"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.frame_number}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      disabled={formLoading}
                      className="form-control"
                      type="Submit"
                      defaultValue="Submit"
                      name="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Community;
