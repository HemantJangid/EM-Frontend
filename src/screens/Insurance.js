import React from "react";
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

function Insurance() {
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
          <Button text="Get Insured" />
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
              <HashLink smooth to="/insurance#coming-soon">
                <Button text="Get T-Rex Insured" />
              </HashLink>
            </div>
            <div className="d-block mx-3">
              <img src={doodle} alt="card" className="img-fluid my-4" />
              <HashLink smooth to="/insurance#coming-soon">
                <Button text="Get T-Rex Insured" />
              </HashLink>
            </div>
            <div className="d-block mx-3">
              <img src={emx} alt="card" className="img-fluid my-4" />
              <HashLink smooth to="/insurance#coming-soon">
                <Button text="Get T-Rex Insured" />
              </HashLink>
            </div>
          </div>
        </div>
      </section>

      <section id="coming-soon">
        <div className="container">
          <h2 className="text-center">
            Coming <span className="pri">Soon</span>!
          </h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Insurance;
