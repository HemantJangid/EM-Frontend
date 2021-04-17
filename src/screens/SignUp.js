import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import "../assets/css/Sign.css";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import constants from "../constant/RequestUrls";
import { auth } from "./../firebase";
import navUrls from "./../constant/navUrls";
import { useDispatch } from "react-redux";
import { addUser } from "./../redux/actions/user";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await signup(values.email, values.password).then(function (result) {
          dispatch(addUser(`${values.first_name} ${values.last_name}`));
          result.user.updateProfile({
            displayName: `${values.first_name} ${values.last_name}`,
          });
        });

        auth.currentUser
          .getIdToken(true)
          .then((idToken) => {
            axios
              .post(`${constants.base_url}${constants.sign_up}`, {
                firebase_token: idToken,
              })
              .then((res) => {
                if (res.status === 200) {
                  const headers = {
                    "Content-Type": "application/json",
                    Authorization: idToken,
                  };
                  axios
                    .post(
                      `${constants.base_url}${constants.profile}`,
                      {
                        first_name: values.first_name,
                        last_name: values.last_name,
                        email: values.email,
                        phone_number: values.phone,
                      },
                      { headers }
                    )
                    .then((res) => alert(res.data.message))
                    .catch((err) => {
                      console.log(err);
                      alert(err.response.data.message);
                    });
                }
              })
              .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
              });
          })
          .catch((err) => console.log("could not get token: ", err));

        history.goBack();
      } catch (err) {
        alert(err);
      }

      setLoading(false);
    },
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Sign Up | EMotorad | Best Electric Bicycle and Electric Bike
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
                    Sign <span className="pri">Up</span>
                  </h2>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <input
                          className="form-control"
                          type="text"
                          name="first_name"
                          id="first_name"
                          placeholder="First Name"
                          onChange={formik.handleChange}
                          value={formik.values.first_name}
                        />
                      </div>
                      <div className="col">
                        <input
                          className="form-control"
                          type="text"
                          name="last_name"
                          id="last_name"
                          placeholder="Last Name"
                          onChange={formik.handleChange}
                          value={formik.values.last_name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      disabled={loading}
                      className="form-control"
                      type="Submit"
                      value="Create Account"
                      name="submit"
                    />
                  </div>
                  <hr />
                  <p>
                    Already have an account?{" "}
                    <Link to={`${navUrls.signIn}`}>Sign In</Link>
                  </p>
                  <hr />
                  {/* <p>Or Sign up with <a href="">Facebook</a> or <a href="">Google</a></p> */}
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

export default SignUp;
