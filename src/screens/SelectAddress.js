import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import "../assets/css/Sign.css";
import { Link, useHistory } from "react-router-dom";
// import { useFormik } from "formik";

function SelectAddress() {
  return (
    <div>
      <section id="sign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-box">
                <form>
                  <h2 className="mb-4">
                    Add <span className="pri">Address</span>
                  </h2>

                  <div className="form-group">
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio1">
                        Address Line 1
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio2">
                        Address Line 2
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      // disabled={loading}
                      className="form-control"
                      type="Submit"
                      defaultValue="Add New Address"
                      name="submit"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      // disabled={loading}
                      className="form-control"
                      type="Submit"
                      defaultValue="Continue"
                      name="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SelectAddress;
