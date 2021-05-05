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
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";

function Insurance() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const doodle_images = [
    "https://cdn.discordapp.com/attachments/839438656644055040/839448615453851688/insurance_of_doodle.png",
    "https://cdn.discordapp.com/attachments/839438656644055040/839448613414895616/doodleinsuranceBottom.png",
  ];
  const emx_images = [
    "https://cdn.discordapp.com/attachments/839438656644055040/839453477763547166/warranty_emx_2.png",
    "https://cdn.discordapp.com/attachments/839438656644055040/839453480338587658/EMX_Warrenty.png",
  ];
  const trex_images = [
    "https://cdn.discordapp.com/attachments/839438656644055040/839453027538960404/insurance_of_trex.png",
    "https://cdn.discordapp.com/attachments/839438656644055040/839452960534429706/T-Rex_Insuarance_1.png",
  ];

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
      zIndex: 1050,
      height: '100vh',

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
      maxHeight: '100vh',
      overFlowY: 'auto',
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
  const [email, setEmail] = useState("");

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
        Swal.fire({
          text: `${err.response.data.message}`,
          icon: "error",
        });
        // alert(err.response.data.message);
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
            Swal.fire({
              text: "Insurance request created successfully!",
              icon: "success",
            });
            // alert("Insurance request created successfully.");
            formik.resetForm();
            closeModal();

            let email_values = {
              email: `${email}`,
              subject: "Your Insurance Request has been recieved",
              // message: `<h2>A new user has been registered for community ${values.email}, ${todays_date}, accesss available, event invitation eligible`,
              meta: {},
              message: `
              <img src=${images[0]} alt="Doodle" style="width: 100%;">
    <div style=" display: flex; align-items: center; justify-content: center;">
        <div style="max-width: 600px;">
            <h1 style="text-align: center; font-family: serif;"><i>Congratulation!</i></h1>
            <h2 style="font-family: serif; text-align: center; color: #757575;"><i>Your Application for Insurance has been submitted</i>
            </h2>
            <h3>Information :</h3>
            <ul>
            <li style="margin-bottom: 5px; color: #757575;"><b>Name:</b> ${values.name}</li>
            <li style="margin-bottom: 5px; color: #757575;"><b>Contact No:</b> ${values.phone}</li>
            <li style="margin-bottom: 5px; color: #757575;"><b>Frame No:</b> ${values.frame_number}</li>
            <li style="margin-bottom: 5px; color: #757575;"><b>Purchase Date:</b> ${values.purchase_date}</li>
            <!-- <li style="margin-bottom: 5px; color: #757575;"><b>Insurance Amount:</b> Purshottam</li> -->
            </ul>

            <img src=${images[1]} alt="Doodle" style="width: 100%;">
            <h2 style="text-align: center; color: #757575;">Doodle - The Fat Tyre SUV of Electric Segment</h2>
            <hr>
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe width="100%" height="100%" style="position: absolute; top: 0; left: 0; height: 100%;"
                    src="https://www.youtube.com/embed/5_orIQReJfY" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <h3>Details :</h3>
            <ul>
                <li style="margin-bottom: 5px; color: #757575;">The team will request you for the payment through a
                    payment link</li>
                <li style="margin-bottom: 5px; color: #757575;">Your insurance certificate will be shared with you in a
                    seperate email.</li>
            </ul>
            <p style="text-align: center">You can contact us on, at <a
                    href="mailto:contactus@emotorad.com">contactus@emotorad.com</a><br />or Call us directly at +91
                8686050590
            </p>
            <div style="text-align: center; margin-bottom: 70px; margin-top: 50px;">
                <a href="https://www.emotorad.com/">
                    <button
                        style="padding: 15px 18px; border: none; background-color: #89D085; font-weight: 700; font-size: 20px; color: #fff; border-radius: 10px;">Find
                        Out
                        More</button>
                </a>
            </div>
        </div>
    </div>
<div style="background-color: #333; padding-top: 70px; padding-bottom: 70px; color: #fff;">
    <div style=" display: flex; align-items: center;  justify-content: center;">
        <div style="max-width: 600px; text-align: center;">
        <div style="display: inline-flex; flex-direction: row;">
        <a href="https://www.facebook.com/EMotorad"
            style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><img
                src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/facebook.png" alt="Logo" style="height: 24px"></a>
        <a href="https://www.linkedin.com/company/emotorad/"
            style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><img
                src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/linkedin.png" alt="Logo" style="height: 24px"></a>
        <a href="https://www.instagram.com/e_motorad/"
            style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px;"><img
                src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/instagram.png" alt="Logo" style="height: 24px"></a>
        <a href="https://www.emotorad.com/"
            style="margin-left: 20px; margin-right: 20px; color: #fff; font-size: 25px; "><img
                src="https://s3.us-east-2.amazonaws.com/com.emotorad.website-assets/email+images/website.png" alt="Link" style="height: 24px"></a>
    </div>
            <hr style="margin-top: 20px; margin-bottom: 30px;">
            <p><i>Copyright © 2021 EMotorad, All rights reserved.</i></p>
            <a style="color: #fff;" href="www.emotorad.com">www.emotorad.com</a>
            <p><b>Our mailing address is:</b></p>
            <p>EMotorad Head Office, At post Jambe, taluka Mulshi, 169/2 Sangawade Road, Pune 411033, Maharashtra
            </p>
        </div>
    </div>
</div>`,
            };

            axios
              .post(`${constants.base_url}${constants.email}`, email_values)
              .then((res) => {
                // console.log(res);
                if (res.status === 200) {
                  // formik.resetForm();
                  // setFormLoading(false);
                }
              })
              .catch((err) => {
                console.log(err);
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
                onClick={() => {
                  setImages(trex_images);
                  openModal();
                }}
              >
                <Button text="Get T-Rex Insured" />
              </button>
            </div>
            <div className="d-block mx-3">
              <img src={doodle} alt="card" className="img-fluid my-4" />
              <button
                className="bg-transparent border-0 px-0 mx-2"
                onClick={() => {
                  setImages(doodle_images);
                  openModal();
                }}
              >
                <Button text="Get Doodle Insured" />
              </button>
            </div>
            <div className="d-block mx-3">
              <img src={emx} alt="card" className="img-fluid my-4" />
              <button
                className="bg-transparent border-0 px-0 mx-2"
                onClick={() => {
                  setImages(emx_images);
                  openModal();
                }}
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
                name="email"
                id="email"
                type="text"
                className="mb-4"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                required
                name="phone"
                id="phone"
                type="number"
                pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                title="Phone Number should be 10 digits"
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
