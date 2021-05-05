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
            // formik.handleReset();
            let email_values = {
              email: `${values.email}`,
              subject: "Welcome to the Emotorad Community",
              // message: `<h2>A new user has been registered for community ${values.email}, ${todays_date}, accesss available, event invitation eligible`,
              meta: {},
              message: `
              <img src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/doodletride.png" alt="Doodle" style="width: 100%;">
    <div style=" display: flex; align-items: center; justify-content: center;">
        <div style="max-width: 600px;">
            <h2 style="font-family: serif; text-align: center; color: #757575;"><i>We Welcome You as a part of</i>
            </h2>
            <h1 style="text-align: center; font-family: serif;"><i>EM's EBike Community</i></h1>
            <h2 style="text-align: center; color: #757575;"><i>Lets make this earth awesome together</i></h2>
            <h3>Details :</h3>
            <ul>
                <li style="margin-bottom: 5px; color: #757575;">Your login credentials: ${values.email}</li>
                <li style="margin-bottom: 5px; color: #757575;">Joining date: ${todays_date}</li>
                <li style="margin-bottom: 5px; color: #757575;">Forum Access: Available</li>
                <li style="margin-bottom: 5px; color: #757575;">Event Invitation: Eligible</li>
            </ul>
            <p style="text-align: center">You can contact us on, at <a
                    href="mailto:contactus@emotorad.com">contactus@emotorad.com</a><br />or Call us directly at +91
                8686050590
            </p>
            <img src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/doodle.jpeg" alt="Doodle" style="width: 100%;">
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
    </div>

              `,
            };

            axios
              .post(`${constants.base_url}${constants.email}`, email_values)
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  // formik.resetForm();
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
