import React, { useState, useEffect } from "react";
import "../assets/css/Insurance.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dots from "../assets/img/design/dots.svg";
import doodle from "../assets/img/insurance/doodle.png";
import trex from "../assets/img/insurance/trex.png";
import emx from "../assets/img/insurance/emx.png";
import Button from "../components/Button";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import Modal from "react-modal";
import navUrls from "../constant/navUrls";
import constants from "../constant/RequestUrls";
import "../assets/css/Warranty.css";
import moment from "moment";
import { useFormik } from "formik";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { auth } from "./../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./../redux/actions/user";
import { useHistory } from "react-router-dom";
import { addWarrantyData } from "./../redux/actions/warranty";

function Insurance() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "1000",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    content: {
      top: "50%",
      left: "50%",
      padding: "0px",
      margin: "0px",
      width: "80%",
      maxWidth: "540px",
      height: "fit-content",
      transform: "translate(-50%, -50%)",
    },
  };

  const todays_date_obj = new Date();
  const todays_date = moment(todays_date_obj).format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const user = useSelector((state) => state.userReducer);
  const warrantyData = useSelector((state) => state.warrantyReducer);
  const [reRender, setReRender] = useState(true);
  const history = useHistory();
  const [dealers, setDealers] = useState([]);
  // console.log(dealers);
  // console.log(user);

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
          setDealers(temp);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      frame_number: "",
      purchase_date: "",
      dealer_or_online: "",
      dealer_or_platform: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios
        .post(`${constants.base_url}${constants.insurance}`, values)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("Insurance request created successfully.");
            formik.resetForm();
            closeModal();
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    },
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Insurance Partner | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
      </Helmet>

      <Header />
      <section id="insurance-hero">
        <div className="container">
          <h3 className="pri">Get your ebike insured with</h3>
          <div className="d-flex flex-wrap">
            <h1>EM’s Insurance Partner</h1>
          </div>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <HashLink smooth to={`${navUrls.insurance}#insurance`}>
            <Button text="Get Insured" />
          </HashLink>
        </div>
      </section>

      <section id="insurance">
        <div className="container">
          <p>
            Here’s how to go about getting your EMI approved from EMs EMI
            Partner: On the Emotorad cart page, you can select EMs EMI Partner
            at the checkout and set up your EMs EMI Partner account in a couple
            of minutes. All you need is your AADHAR CARD/PAN number and details
            of your bank account (to make repayments). After providing some
            basic information, you will be given instant approval and then be
            asked to make a small upfront payment. At this point your
            transaction is confirmed. Before your shopping can be dispatched,
            EMs EMI Partner will ask for bank statements and a proof of ID.
          </p>
          <p>
            Uploading your documents couldn’t be easier but they can also send
            an agent to your house or office.
          </p>
          <p>
            EMs EMI Partner charges a simple processing fee and an affordable
            interest rate — depending on the product you are purchasing.
          </p>
          <h3>Advantages of EMs EMI Partner Cardless EMI:</h3>
          <p>
            Instant approval <br />
            Easy account set-up <br />
            Completely flexible EMI — from 3 to 12 months to suit your budget{" "}
            <br />
            Early re-pay any time, with zero penalty <br />
            No hidden fees
          </p>
          <div className="my-5 d-inline-flex text-center flex-wrap flex-lg-nowrap">
            <div className="d-block mx-3">
              <img src={trex} alt="card" className="img-fluid my-4" />
              <button
                className="bg-transparent border-0 px-0 mx-2"
                onClick={openModal}
              >
                <Button text="Get T-Rex Insured" />
              </button>
            </div>
            <div className="d-block mx-3">
              <img src={doodle} alt="card" className="img-fluid my-4" />
              <button
                className="bg-transparent border-0 px-0 mx-2"
                onClick={openModal}
              >
                <Button text="Get Doodle Insured" />
              </button>
            </div>
            <div className="d-block mx-3">
              <img src={emx} alt="card" className="img-fluid my-4" />
              <button
                className="bg-transparent border-0 px-0 mx-2"
                onClick={openModal}
              >
                <Button text="Get EMX Insured" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="insurance-form px-2 px-md-4 px-lg-5 py-4 py-lg-5">
          <form onSubmit={formik.handleSubmit} className="py-3 px-0">
            <div className="form-group">
              <input
                required
                name="name"
                id="name"
                type="text"
                className="mb-4 form-control"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="form-group">
              <input
                required
                name="phone"
                id="phone"
                type="number"
                className="mb-4 form-control"
                placeholder="Contact Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            <div className="form-group">
              <input
                required
                name="frame_number"
                id="frame_number"
                type="text"
                className="mb-4 form-control"
                placeholder="Frame No"
                onChange={formik.handleChange}
                value={formik.values.frame_number}
              />
            </div>
            <div className="form-group">
              <label for="purchase_date">Date of Purchase:</label>
              <input
                required
                className="mb-4 form-control"
                type="date"
                name="purchase_date"
                id="purchase_date"
                style={{ textTransform: "uppercase" }}
                max={todays_date}
                onChange={formik.handleChange}
                value={formik.values.purchase_date}
              />
            </div>
            <div className="form-group">
              <label for="dealer_or_online">Purchased from Dealer/Online</label>
              <select
                required
                id="dealer_or_online"
                className="form-control"
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
            <div className="form-group">
              {formik.values.dealer_or_online === "dealer" && (
                <select
                  required
                  id="dealer_or_platform"
                  className="form-control"
                  name="dealer_or_platform"
                  onChange={formik.handleChange}
                  value={formik.values.dealer_or_platform}
                  style={{ textTransform: "capitalize" }}
                >
                  <option value="">Select</option>
                  {dealers.map((dealer, index) => {
                    return (
                      <option value={dealer.name} key={index}>
                        {dealer.name}
                      </option>
                    );
                  })}
                </select>
              )}
              {formik.values.dealer_or_online === "online" && (
                <select
                  required
                  id="dealer_or_platform"
                  className="form-control"
                  name="dealer_or_platform"
                  onChange={formik.handleChange}
                  value={formik.values.dealer_or_platform}
                  style={{ textTransform: "capitalize" }}
                >
                  <option value="">Select</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Flipkart">Flipkart</option>
                  <option value="Blive">Blive</option>
                  <option value="Em Official Website">
                    Em Official Website
                  </option>
                </select>
              )}
            </div>
            <div className="mt-5">
              <center>
                <button type="submit" className="bg-transparent border-0">
                  <Button text="Activate" />
                </button>
              </center>
            </div>
          </form>
          <div
            onClick={closeModal}
            className="close-btn d-flex align-items-center justify-content-center"
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
      </Modal>

      {/* <section id="coming-soon">
        <div className="container">
          <h2 className="text-center">
            Coming <span className="pri">Soon</span>!
          </h2>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default Insurance;
