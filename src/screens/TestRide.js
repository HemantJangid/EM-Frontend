import React, { useState, useEffect } from "react";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import testrideSide from "../assets/img/backgrounds/testride-side-min.jpg";
import moment from "moment";
import { useFormik } from "formik";
import axios from "axios";
import "../assets/css/TestRide.css";
import constants from "../constant/RequestUrls";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import navUrls from "./../constant/navUrls";

function TestRide() {
  const todays_date_obj = new Date();
  const todays_date = moment(todays_date_obj).format("YYYY-MM-DD");
  const [dealers, setDealers] = useState([]);
  const [reRender, setReRender] = useState(true);
  const [cities, setCities] = useState([]);
  const history = useHistory();

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
          var cities = [];
          temp.forEach((item, i) => {
            if (
              item.city != null &&
              item.city != undefined &&
              !cities.includes(item.city.toLowerCase())
            )
              cities.push(item.city.toLowerCase());
          });
          setDealers(temp);
          setCities(cities);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      organisation_name: "",
      city: "select",
      email: "",
      phone_number: "",
      preferred_date: "",
      preferred_time: "",
      bike_name: "",
      dealer_id: "select",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios
        .post(`${constants.base_url}${constants.test_ride}`, values)
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <Header />
      <section id="test-hero">
        <div className="container">
          <h3 className="pri">Book a test ride</h3>
          <h1>Experience unparallel</h1>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <button
            onClick={() => history.push(navUrls.products)}
            className="bg-transparent border-0 text-left w-100"
          >
            <Button text="View products" />
          </button>
        </div>
      </section>

      <section id="form">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 col-md-6 form-img">
            <img src={testrideSide} alt="Cycle" />
          </div>
          <div className="col-lg-6 col-md-6 align-content-center">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="mb-5">Book a test ride!</h3>
              <div className="form-row form-group">
                <div className="col-lg-6 col-md-6">
                  <input
                    required
                    className="mb-4"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input
                    className="mb-4"
                    type="text"
                    name="organisation_name"
                    id="organisation_name"
                    placeholder="Organisation Name"
                    onChange={formik.handleChange}
                    value={formik.values.organisation_name}
                  />
                </div>
              </div>

              <div className="form-row form-group">
                <div className="col-lg-6 col-md-6">
                  <input
                    required
                    className="mb-4"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input
                    required
                    className="mb-4"
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Contact Number"
                    onChange={formik.handleChange}
                    value={formik.values.phone_number}
                  />
                </div>
              </div>
              <div className="form-row form-group">
                <div className="col-lg-6 col-md-6">
                  <label for="bike_name">Choose your City:</label>
                  <select
                    required
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    style={{ textTransform: "capitalize" }}
                  >
                    <option value="">Select</option>
                    {cities.map((city, index) => {
                      return (
                        <option
                          style={{ textTransform: "capitalize" }}
                          value={city}
                        >
                          {city}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label for="bike_name">Available Dealers(Choose one):</label>
                  <select
                    required
                    id="dealer"
                    name="dealer_id"
                    onChange={formik.handleChange}
                    value={formik.values.dealer_id}
                    style={{ textTransform: "capitalize" }}
                    disabled={formik.values.city === "select"}
                  >
                    <option value="">Select</option>
                    {dealers.map((dealer, index) => {
                      if (
                        (dealer.city != null) & (dealer.city != undefined) &&
                        dealer.city.toLowerCase() === formik.values.city
                      ) {
                        // console.log(dealer.city);
                        return (
                          <option
                            style={{ textTransform: "capitalize" }}
                            value={dealer.id}
                          >
                            {dealer.name}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>
              </div>
              <div className="form-row form-group">
                <div className="col-lg-6 col-md-6">
                  <label for="preferred_date">Date:</label>
                  <input
                    required
                    className="mb-4"
                    type="date"
                    name="preferred_date"
                    id="preferred_date"
                    style={{ textTransform: "uppercase" }}
                    min={todays_date}
                    onChange={formik.handleChange}
                    value={formik.values.preferred_date}
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label for="preferred_time">Time:</label>
                  <input
                    required
                    className="mb-4"
                    type="time"
                    name="preferred_time"
                    id="preferred_time"
                    onChange={formik.handleChange}
                    value={formik.values.preferred_time}
                  />
                </div>
              </div>
              <div className="form-group mb-5">
                <label for="bike_name">Choose your bike:</label>
                <select
                  required
                  id="bike_name"
                  name="bike_name"
                  onChange={formik.handleChange}
                  value={formik.values.bike_name}
                >
                  <option value="">Select</option>
                  <option value="t_rex">T-Rex</option>
                  <option value="emx">EMX</option>
                  <option value="doodle">Doodle</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-transparent border-0 d-flex align-items-center justify-content-center w-100"
              >
                <Button text="Enquire" color="black" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default TestRide;
