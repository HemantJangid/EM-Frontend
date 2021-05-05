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
  const [model, setmodel] = useState("trex");
  const [scheme, setscheme] = useState("eight");
  const [tenure, setTenure] = useState(0);
  const [interest, setInterest] = useState(0);
  const [dp, setdp] = useState("");
  const [emi, setemi] = useState("");
  const emiData = {
    trex: {
      eight: ["13,290.49", "3,249.17"],
      twelve: ["9,923.32", "4873.75"],
    },
    emx: {
      eight: ["18,623.82", "4,582.50"],
      twelve: ["13,923.32", "6,873.75"],
    },
    doodle: {
      eight: ["18,623.82", "4,582.50"],
      twelve: ["13,923.32", "6,873.75"],
    },
  };

  function handleModel(e) {
    setmodel(e.target.value)
  }

  function handleScheme(e) {
    setscheme(e.target.value)
  }

  function checkEMI() {
    setdp(`Down Payment INR ${emiData[model][scheme][0]}`);
    setemi(`Emi from next month for ${scheme} months INR ${emiData[model][scheme][1]}`);
  }

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
          <h3 className="pri">Get best emi plans with</h3>
          <div className="d-flex flex-wrap">
            <h1>EM’s insured emi partner</h1>
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
          <div className="emi-form">
            <div className="form-row">
              <div className="col-lg-12">
                <label htmlFor="name">Select Model</label>
                <select required id="state" name="state" className="form-control" onChange={handleModel}>
                  <option value="trex">T-Rex</option>
                  <option value="emx">EMX</option>
                  <option value="doodle">Doodle</option>
                </select>
              </div>
              <div className="col-lg-12">
                <label htmlFor="name" className="mt-3">Select EMI Scheme</label>
                <select required id="state" name="state" className="form-control" onChange={handleScheme} >
                  <option value="eight">8 Months</option>
                  <option value="twelve">12 Months</option>
                </select>
              </div>
            </div>
            <button className="bg-transparent border-0 my-5" onClick={checkEMI}>
              <Button text="Check Loan Emi" />
            </button>
            <h3 className="pri">{dp}</h3>
            <h3>{emi}</h3>
          </div>
        </div>
      </section>
      {/* 
      <section id="coming-soon">
        <div className="contianer">
          <h2 className="text-center">
            Coming <span className="pri">Soon</span>!
          </h2>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default Emi;
