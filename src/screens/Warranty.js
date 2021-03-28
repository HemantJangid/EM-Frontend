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
import { useDispatch } from "react-redux";
import { addUser } from "./../redux/actions/user";
import { useHistory } from "react-router-dom";
import navUrls from "./../constant/navUrls";

function Warranty() {
  const todays_date_obj = new Date();
  const todays_date = moment(todays_date_obj).format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      frame_number: "",
      purchase_date: "",
      dealer_or_online: "",
    },
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
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
              alert("Warranty activated successfully");
              await logout();
              dispatch(addUser(""));
              history.push(navUrls.home);
            }
          })
          .catch((err) => console.log(err));
      });
    },
  });
  return (
    <div>
      <Header />
      <section id="warranty">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-12 bg-dark mx-md-0 mx-sm-4">
              <div className="my-5">
                <h2 className="text-center">Aditya Pathak</h2>
              </div>
            </div>

            <main role="main" className="col-md-12 my-3 col-lg-9 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <div>
                  <h4>Get it secured</h4>
                  <h3>Activate warranty</h3>
                  <img src={dots} alt="Dots" className="dots" />
                </div>
                <button
                  onClick={async () => {
                    await logout();
                    dispatch(addUser(""));
                    alert("You have been successfully logged out");
                    history.push(navUrls.home);
                  }}
                  className="bg-transparent border-0 my-3"
                >
                  <Button text="Log out" />
                </button>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-7">
                  <form onSubmit={formik.handleSubmit} className="py-3 px-0">
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
                        min={todays_date}
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
