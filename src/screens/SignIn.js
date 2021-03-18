import React from "react";

import "../assets/css/Sign.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <section id="sign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-box">
                <form action="">
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
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="Submit"
                      value="Sign In"
                      name="submit"
                    />
                  </div>
                  <hr />
                  <p>
                    <b>Forgot Password?</b>
                  </p>
                  <p>
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
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
