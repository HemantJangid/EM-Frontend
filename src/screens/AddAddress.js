import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import "../assets/css/Sign.css";
import { Link, useHistory } from "react-router-dom";
// import { useFormik } from "formik";

function AddAddress() {
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
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile Number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      placeholder="Pincode"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="add1"
                      id="add1"
                      placeholder="Flat, House No, Building, Apartment"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="add2"
                      id="add2"
                      placeholder="Area, Colony, Street Sector, Village"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="landmark"
                      id="landmark"
                      placeholder="Landmark"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group form-row">
                    <div className="col">
                      <input
                        type="text"
                        name="town"
                        id="town"
                        placeholder="Town/City"
                        className="form-control"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="State"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      // disabled={loading}
                      className="form-control"
                      type="Submit"
                      defaultValue="Add Address"
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

export default AddAddress;
