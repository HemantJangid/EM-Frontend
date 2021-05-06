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

function SignInScreen({ setVisibleScreen }) {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  // console.log(items);

  function addItemToCart(item) {
    return new Promise((resolve, reject) => {
      auth.currentUser &&
        auth.currentUser.getIdToken(true).then((idToken) => {
          const headers = {
            "Content-Type": "application/json",
            Authorization: idToken,
          };
          axios
            .post(
              `${constants.base_url}${constants.cart}/${item.product.uuid}`,
              {
                quantity: item.quantity,
                color: item.color,
              },
              { headers }
            )
            .then((res) => {
              console.log(res);
              resolve(res);
            })
            .catch((err) => {
              console.log(err.response);
              reject(err);
            });
        });
    });
  }

  async function addItemsToCart() {
    for (let i in items) {
      await addItemToCart(items[i]);
    }
    history.goBack();
  }

  const formik_signin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        let response = await login(values.email, values.password);
        dispatch(addUser(response.user.displayName));
        addItemsToCart();
      } catch (error) {
        console.log(error);
        switch (error.code) {
          case "auth/user-not-found":
            Swal.fire({ text: "Incorrect Username/Password", icon: "error" });
            // alert(
            //   "There is no user account with this email. Please SignUp first."
            // );
            break;
          case "auth/wrong-password":
            Swal.fire({ text: "Incorrect Username/Password", icon: "error" });
            // alert("Please check your password again.");
            break;
          default:
            Swal.fire({
              text: `${error.message}`,
              icon: "error",
            });
          // alert(error.message);
        }
      }

      setLoading(false);
    },
  });
  return (
    <section id="sign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="form-box">
              <form onSubmit={formik_signin.handleSubmit}>
                <h2 className="mb-4">
                  Sign <span className="pri">In</span>
                </h2>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="form-control"
                    onChange={formik_signin.handleChange}
                    value={formik_signin.values.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    className="form-control"
                    onChange={formik_signin.handleChange}
                    value={formik_signin.values.password}
                  />
                </div>
                <div className="form-group">
                  <input
                    disabled={loading}
                    className="form-control"
                    type="Submit"
                    defaultValue="Sign In"
                    name="submit"
                  />
                </div>
                <hr />
                <p>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setVisibleScreen("resetPassword")}
                  >
                    Forgot Password?
                  </span>
                </p>
                <p>
                  Don't have an account?{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setVisibleScreen("signUp")}
                  >
                    Sign Up
                  </span>
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
  );
}

function SignUpScreen({ setVisibleScreen }) {
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
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
                    .then((res) =>
                      Swal.fire({
                        text: `${res.data.message}`,
                        icon: "success",
                      })
                    )
                    .catch((err) => {
                      console.log(err);
                      Swal.fire({
                        text: `${err.response.data.message}`,
                        icon: "error",
                      });
                      // alert(err.response.data.message);
                    });
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
          })
          .catch((err) => console.log("could not get token: ", err));

        history.goBack();
      } catch (err) {
        Swal.fire({
          text: `${err}`,
          icon: "error",
        });
        // alert(err);
      }

      setLoading(false);
    },
  });

  return (
    <div>
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
                      pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                      title="Phone Number should be 10 digits"
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
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setVisibleScreen("signIn")}
                    >
                      Sign In
                    </span>
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

function ResetPasswordScreen({ setVisibleScreen }) {
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

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
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setVisibleScreen("signIn")}
                    >
                      Sign In
                    </span>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setVisibleScreen("signUp")}
                    >
                      Sign Up
                    </span>
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

function AuthScreen() {
  const [visibleScreen, setVisibleScreen] = useState("signIn");
  // console.log(currentUser.getIdToken());
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Sign In | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
      </Helmet>
      <Header />
      {visibleScreen === "signIn" && (
        <SignInScreen setVisibleScreen={setVisibleScreen} />
      )}
      {visibleScreen === "signUp" && (
        <SignUpScreen setVisibleScreen={setVisibleScreen} />
      )}
      {visibleScreen === "resetPassword" && (
        <ResetPasswordScreen setVisibleScreen={setVisibleScreen} />
      )}
      <Footer />
    </div>
  );
}

export default AuthScreen;
