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

function SignIn() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log(items);

  function addItemToCart(item) {
    console.log(item);
    auth.currentUser
      ? auth.currentUser.getIdToken(true).then((idToken) => {
          const headers = {
            "Content-Type": "application/json",
            Authorization: idToken,
          };
          axios
            .post(
              `${constants.base_url}${constants.cart}/${item.product.uuid}`,
              { quantity: 1 },
              { headers }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err.response);
            });
        })
      : history.push(navUrls.cart);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        let response = await login(values.email, values.password);
        dispatch(addUser(response.user.displayName));
        for (let i in items) {
          addItemToCart(items[i]);
        }
        history.goBack();
      } catch (error) {
        console.log(error);
        switch (error.code) {
          case "auth/user-not-found":
            alert(
              "There is no user account with this email. Please SignUp first."
            );
          case "auth/wrong-password":
            alert("Please check your password again.");
          default:
            alert(error.message);
        }
      }

      setLoading(false);
    },
  });
  // console.log(currentUser.getIdToken());
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Sign In | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
      </Helmet>
      <section id="sign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-box">
                <form onSubmit={formik.handleSubmit}>
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
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
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
                      defaultValue="Sign In"
                      name="submit"
                    />
                  </div>
                  <hr />
                  <p>
                    <b>Forgot Password?</b>
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
    </div>
  );
}

export default SignIn;
