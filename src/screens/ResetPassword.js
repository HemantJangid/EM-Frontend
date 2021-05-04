import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import "../assets/css/Sign.css";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import navUrls from "./../constant/navUrls";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./../redux/actions/user";
import constants from "../constant/RequestUrls";
import { Helmet } from "react-helmet";
import { auth } from "../firebase";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";

function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        let response = await resetPassword(values.email);
        Swal.fire({
          text:
            "Please follow the instructions in your mail to reset your password",
          icon: "success",
        });
        // alert(
        //   "Please follow the instructions in your mail to reset your password."
        // );
      } catch (error) {
        console.log(error);
        Swal.fire({
          text: `${error.message}`,
          icon: "error",
        });
        alert(error.message);
      }

      setLoading(false);
    },
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Reset Password | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
      </Helmet>
      <Header />
      <section id="sign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-box">
                <form onSubmit={formik.handleSubmit}>
                  <h2 className="mb-4">
                    Reset <span className="pri">Password</span>
                  </h2>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      disabled={loading}
                      className="form-control"
                      type="Submit"
                      defaultValue="Reset Password"
                      name="submit"
                    />
                  </div>
                  <hr />
                  <p>
                    <Link to={`${navUrls.signIn}`}>Sign In</Link>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <Link to={`${navUrls.signUp}`}>Sign Up</Link>
                  </p>
                  <hr />
                  {/* <p>
                    Or connect with <a href="">Facebook</a> or{" "}
                    <a href="">Google</a>
                  </p> */}
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

export default ResetPassword;
