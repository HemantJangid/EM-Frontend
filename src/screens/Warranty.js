import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import constants from "../constant/RequestUrls";
import "../assets/css/Warranty.css";
import moment from "moment";
import { useFormik } from "formik";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { auth } from "./../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./../redux/actions/user";
import { useHistory } from "react-router-dom";
import navUrls from "./../constant/navUrls";
import { Helmet } from "react-helmet";
import { addWarrantyData } from "./../redux/actions/warranty";
import { DeleteSharp } from "@material-ui/icons";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";

function Warranty() {
  const todays_date_obj = new Date();
  const todays_date = moment(todays_date_obj).format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const user = useSelector((state) => state.userReducer);
  const warrantyData = useSelector((state) => state.warrantyReducer);
  const [reRender, setReRender] = useState(true);
  const history = useHistory();
  const [dealers, setDealers] = useState([]);
  const [email, setEmail] = useState(warrantyData ? warrantyData.email : "");
  // console.log(dealers);
  // console.log(user);

  useEffect(() => {
    getAllDealers();
  }, []);

  function getAllDealers() {
    axios
      .get(`${constants.base_url}${constants.dealer}`)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          let temp = res.data.payload.dealers;
          setDealers(temp);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: `${err.response.data.message}`,
          icon: "error",
        });
        // alert(err.response.data.message);
      });
  }

  const formik = useFormik({
    initialValues: {
      name: warrantyData ? warrantyData.name : "",
      phone: warrantyData ? warrantyData.phone : "",
      frame_number: warrantyData ? warrantyData.frame_number : "",
      purchase_date: warrantyData ? warrantyData.purchase_date : "",
      dealer_or_online: warrantyData ? warrantyData.dealer_or_online : "",
      dealer_or_platform: warrantyData ? warrantyData.dealer_or_platform : "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      if (auth.currentUser) {
        auth.currentUser.getIdToken(true).then((idToken) => {
          const headers = {
            "Content-Type": "application/json",
            Authorization: idToken,
          };
          axios
            .post(`${constants.base_url}${constants.warranty}`, values, {
              headers,
            })
            .then(async (res) => {
              // console.log(res);
              if (res.status === 200) {
                Swal.fire({
                  text: "Warranty activated successfully",
                  icon: "success",
                });
                // alert("Warranty activated successfully");

                let email_values = {
                  email: `${email}`,
                  subject: "Your warranty has been activated",
                  // message: `<h2>A new user has been registered for community ${values.email}, ${todays_date}, accesss available, event invitation eligible`,
                  meta: {},
                  message: `
                  <img src="https://cdn.discordapp.com/attachments/839438656644055040/839453477763547166/warranty_emx_2.png" alt="Doodle" style="width: 100%;">
    <div style=" display: flex; align-items: center; justify-content: center;">
        <div style="max-width: 600px;">
            <h1 style="text-align: center; font-family: serif;"><i>Congratulation!</i></h1>
            <h2 style="font-family: serif; text-align: center; color: #757575;"><i>Your warranty is successfully claimed
                    for your ebike.</i>
            </h2>
            <h2 style="text-align: center; color: #757575;">This is your Unique Warranty Number:</h2>
            <h2 style="color: #757575;">UWN: _______</h2>
            <h3>Information :</h3>
            <ul>
                <li style="margin-bottom: 5px; color: #757575;"><b>Name:</b> ${values.name}</li>
                <li style="margin-bottom: 5px; color: #757575;"><b>Contact No:</b> ${values.phone}</li>
                <li style="margin-bottom: 5px; color: #757575;"><b>Frame No:</b> ${values.frame_number}</li>
                <li style="margin-bottom: 5px; color: #757575;"><b>Purchase Date:</b> ${values.purchase_date}</li>
            </ul>
            <img src="https://cdn.discordapp.com/attachments/839438656644055040/839453480338587658/EMX_Warrenty.png" alt="Doodle" style="width: 100%; margin-bottom: 30px;">
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe width="100%" height="100%" style="position: absolute; top: 0; left: 0; height: 100%;"
                    src="https://www.youtube.com/embed/5_orIQReJfY" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <h3>Details :</h3>
            <ul>
                <li style="margin-bottom: 5px; color: #757575;">Please use the UWN to claim warranties</li>
                <li style="margin-bottom: 5px; color: #757575;">Your UWN shall also be linked to the bike parts and will
                    be helpful in claiming your warranty
                </li>
            </ul>
            <p style="text-align: center">You can contact us on, at <a
                    href="mailto:contactus@emotorad.com">contactus@emotorad.com</a><br />or Call us directly at +91
                8686050590
            </p>
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
                    // console.log(res);
                    if (res.status === 200) {
                      // formik.resetForm();
                      // setFormLoading(false);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });

                await logout();
                dispatch(addUser(""));
                dispatch(addWarrantyData({}));
                history.push(navUrls.home);
              }
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                text: `${err.response.data.message}`,
                icon: "error",
              });
              // alert(err.response.data.message);
            });
        });
      } else {
        dispatch(addWarrantyData({ ...values, email: email }));
        history.push(navUrls.auth);
      }
    },
  });

  // console.log(email);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Warranty | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
      </Helmet>
      <Header />
      <section id="warranty">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-12 bg-dark mx-md-0 mx-sm-4">
              <div className="my-5">
                <h2 className="text-center">{auth.currentUser && user}</h2>
              </div>
            </div>

            <main role="main" className="col-md-12 my-3 col-lg-9 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <div>
                  <h4>Get it secured</h4>
                  <h3>Activate warranty</h3>
                  <img src={dots} alt="Dots" className="dots" />
                </div>
                {auth.currentUser && (
                  <button
                    onClick={async () => {
                      await logout();
                      dispatch(addUser(""));
                      Swal.fire({
                        text: "You have been successfully logged out",
                        icon: "success",
                      });
                      // alert("You have been successfully logged out");
                      history.push(navUrls.home);
                    }}
                    className="bg-transparent border-0 my-3"
                  >
                    <Button text="Log out" />
                  </button>
                )}
              </div>
              <div className="row no-gutters">
                <div className="col-lg-7">
                  <form onSubmit={formik.handleSubmit} className="py-3 px-0">
                    <div className="form-group">
                      <input
                        required
                        name="name"
                        id="name"
                        type="text"
                        className="mb-4"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="email"
                        id="email"
                        type="text"
                        className="mb-4"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="phone"
                        id="phone"
                        pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                        title="Phone Number should be 10 digits"
                        type="number"
                        className="mb-4"
                        placeholder="Contact Number"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="frame_number"
                        id="frame_number"
                        type="text"
                        className="mb-4"
                        placeholder="Frame No"
                        onChange={formik.handleChange}
                        value={formik.values.frame_number}
                      />
                    </div>
                    <div className="form-group">
                      <label for="purchase_date">Date of Purchase:</label>
                      <input
                        required
                        className="mb-4"
                        type="date"
                        name="purchase_date"
                        id="purchase_date"
                        style={{ textTransform: "uppercase" }}
                        max={todays_date}
                        onChange={formik.handleChange}
                        value={formik.values.purchase_date}
                      />
                    </div>
                    <div className="form-group">
                      <label for="dealer_or_online">
                        Purchased from Dealer/Online
                      </label>
                      <select
                        required
                        id="dealer_or_online"
                        name="dealer_or_online"
                        onChange={formik.handleChange}
                        value={formik.values.dealer_or_online}
                        style={{ textTransform: "capitalize" }}
                      >
                        <option value="">Select</option>
                        <option value="dealer">Dealer</option>
                        <option value="online">Online</option>
                      </select>
                    </div>
                    <div className="form-group">
                      {formik.values.dealer_or_online === "dealer" && (
                        <select
                          required
                          id="dealer_or_platform"
                          name="dealer_or_platform"
                          onChange={formik.handleChange}
                          value={formik.values.dealer_or_platform}
                          style={{ textTransform: "capitalize" }}
                        >
                          <option value="">Select</option>
                          {dealers.map((dealer, index) => {
                            return (
                              <option value={dealer.name} key={index}>
                                {dealer.name}
                              </option>
                            );
                          })}
                        </select>
                      )}
                      {formik.values.dealer_or_online === "online" && (
                        <select
                          required
                          id="dealer_or_platform"
                          name="dealer_or_platform"
                          onChange={formik.handleChange}
                          value={formik.values.dealer_or_platform}
                          style={{ textTransform: "capitalize" }}
                        >
                          <option value="">Select</option>
                          <option value="Amazon">Amazon</option>
                          <option value="Flipkart">Flipkart</option>
                          <option value="Blive">Blive</option>
                          <option value="Em Official Website">
                            Em Official Website
                          </option>
                        </select>
                      )}
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="bg-transparent border-0 d-flex align-items-center justify-content-left w-100 text-left"
                      >
                        <Button text="Activate" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Warranty;
