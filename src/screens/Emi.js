import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import "../assets/css/Emi.css";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import navUrls from "../constant/navUrls";
const SliderWithTooltip = createSliderWithTooltip(Slider);

function Emi() {
  const [loan, setLoan] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [interest, setInterest] = useState(0);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          EMI Calculator | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
      </Helmet>

      <Header />
      <section id="emi-hero">
        <div className="container">
          <h3 className="pri">Get your ebike insured with</h3>
          <div className="d-flex flex-wrap">
            <h1>EM’s Insurance Partner</h1>
          </div>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <HashLink smooth to={`${navUrls.emi}#emi`}>
            <Button text="EMI Calculator" />
          </HashLink>
        </div>
      </section>

      <section id="emi">
        <div className="container">
          <h2>
            EMI <span className="pri">Plans</span>
          </h2>
          <p className="mb-5">There is a plan for everyone.</p>
          <h4 className="text-capitalize">Loan Amount (Rupees)</h4>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-5">
            <SliderWithTooltip
              min={0}
              max={55000}
              railStyle={{
                height: 2,
              }}
              handleStyle={{
                height: 20,
                width: 20,
                marginLeft: 0,
                marginTop: -10,
                backgroundColor: "#68db85",
                border: 0,
              }}
              trackStyle={{
                background: "#68db85",
              }}
              onChange={(e) => setLoan(e)}
            />
            <div className="d-block ml-md-5 ml-0 text-center mt-3 mt-md-0">
              <h4 className="mb-2 text-nowrap text-capitalize font-weight-bold">
                Rs {loan}
              </h4>
              <p className="mb-0 text-nowrap">Loan EMI</p>
            </div>
          </div>
          <h4 className="text-capitalize">Tenure (Years)</h4>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-5">
            <SliderWithTooltip
              min={0}
              max={4}
              railStyle={{
                height: 2,
              }}
              handleStyle={{
                height: 20,
                width: 20,
                marginLeft: 0,
                marginTop: -10,
                backgroundColor: "#68db85",
                border: 0,
              }}
              trackStyle={{
                background: "#68db85",
              }}
              onChange={(e) => setTenure(e)}
            />
            <div className="d-block ml-md-5 ml-0 text-center mt-3 mt-md-0">
              <h4 className="mb-2 text-nowrap text-capitalize font-weight-bold">
                {tenure} Years
              </h4>
              <p className="mb-0 text-nowrap">Loan EMI</p>
            </div>
          </div>
          <h4 className="text-capitalize">Interest Rate (Percentage)</h4>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
            <SliderWithTooltip
              min={0}
              max={15}
              railStyle={{
                height: 2,
              }}
              handleStyle={{
                height: 20,
                width: 20,
                marginLeft: 0,
                marginTop: -10,
                backgroundColor: "#68db85",
                border: 0,
              }}
              trackStyle={{
                background: "#68db85",
              }}
              onChange={(e) => setInterest(e)}
            />
            <div className="d-block ml-md-5 ml-0 text-center mt-3 mt-md-0">
              <h4 className="mb-2 text-nowrap text-capitalize font-weight-bold">
                {interest}%
              </h4>
              <p className="mb-0 text-nowrap">Loan EMI</p>
            </div>
          </div>
          <HashLink smooth to={`${navUrls.emi}#coming-soon`}>
            <Button text="Check Loan Emi" />
          </HashLink>
        </div>
      </section>

      <section id="coming-soon">
        <div className="contianer">
          <h2 className="text-center">
            Coming <span className="pri">Soon</span>
          </h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Emi;
