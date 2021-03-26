import React, { useState } from "react";

import "../assets/css/Sign.css";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { auth } from "./../firebase";
import constants from "../constant/RequestUrls";
import axios from "axios";
import { addItem } from "./../redux/actions/cart";
import navUrls from "./../constant/navUrls";

function AddAddress() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone_number: "",
      pincode: "",
      address_line_1: "",
      address_line_2: "",
      landmark: "",
      city: "",
      state: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      auth.currentUser.getIdToken(true).then((idToken) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: idToken,
        };
        axios
          .post(`${constants.base_url}${constants.address}`, values, {
            headers,
          })
          .then((res) => {
            // console.log(res);
            alert(res.data.message);
            history.push(navUrls.selectAddress);
          })
          .catch((err) => console.log(err));
      });
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
                    Add <span className="pri">Address</span>
                  </h2>
                  <div className="form-group">
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      placeholder="Full Name"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.full_name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Mobile Number"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.phone_number}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      placeholder="Pincode"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.pincode}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address_line_1"
                      id="address_line_1"
                      placeholder="Flat, House No, Building, Apartment"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.address_line_1}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address_line_2"
                      id="address_line_2"
                      placeholder="Area, Colony, Street Sector, Village"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.address_line_2}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="landmark"
                      id="landmark"
                      placeholder="Landmark"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.landmark}
                    />
                  </div>
                  <div className="form-group form-row">
                    <div className="col">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Town/City"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="State"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
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
