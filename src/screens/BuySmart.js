import React, { useState } from "react";

import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import moment from "moment";
import { useFormik, Field, Form } from "formik";

import "../assets/css/BuySmart.css";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function BuySmart() {
  const todays_date_obj = new Date();
  const todays_date = moment(todays_date_obj).format("YYYY-MM-DD");

  const formik = useFormik({
    initialValues: {
      name: "",
      organisation_name: "",
      address: "",
      email: "",
      number: "",
      date: "",
      time_slot: "",
      vehicle_name: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [total, setTotal] = useState("How much I saved?");
  const [petrolSaved, setPetrolSaved] = useState("");
  const [petrolCostSaved, setPetrolCostSaved] = useState("");
  const [mainCostSaved, setMainCostSaved] = useState("");
  const [elecConsumed, setElecConsumed] = useState("");
  const [carbonEmission, setCarbonEmission] = useState("");
  const [cars, setCars] = useState(0);
  const [scooter, setScooter] = useState(0);
  const [km, setKm] = useState(0);
  const [petrol, setPetrol] = useState(0);
  const [years, setYears] = useState(0);

  function calcSavings() {
    var petrolSaved = Math.trunc(365 * years * km * ((cars / 15) + (scooter / 50)));
    var petrolCost = Math.trunc(365 * years * km * petrol * ((cars / 15) + (scooter / 50)));
    var maintCost = Math.trunc(km * petrol * ((cars * 121.66) + (scooter * 182.5)));
    var electCost = Math.trunc(km * years * 365 / 10);
    var carbon = Math.trunc(21 * 365 * km * years * (scooter + 10 * cars))
    var tot = Math.trunc(petrolCost + maintCost - electCost);
    setPetrolSaved("Petrol saved (Litres) " + petrolSaved);
    setPetrolCostSaved("Petrol cost saved Rs " + petrolCost);
    setMainCostSaved("Maintainence cost saved Rs " + maintCost);
    setElecConsumed("Electricity consumed cost Rs " + electCost);
    setCarbonEmission("Reduction in carbon emission (Mg of CO2) " + carbon);
    setTotal("Total money saved Rs " + tot);
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buy Smart | Best Electric Bicycle and Electric Bike</title>
        <meta
          name="description"
          content="Reduce your carbon footprints by riding an eBike, Find easy EMI Options on all our latest eBikes, Activate your eBike warranty and Get your eBike Insured with us."
        />
      </Helmet>

      <Header />

      <section id="buy-hero">
        <div className="container">
          <h3 className="pri">INSURANCE / EMI / SAVINGS</h3>
          <h1>Buy smart with Emotorad</h1>
          <img src={dots} className="dots mb-4" alt="Dots" />
          <Button text="View products" />
        </div>
      </section>

      <section id="savings-calculator">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <h3>Savings Calculator</h3>
              <h4>Save even after buying</h4>
              <img src={dots} alt="Dots" className="dots" />
              <div className="form-group mt-4">
                <input
                  className="form-control"
                  type="number"
                  name="cars"
                  id="cars"
                  placeholder="No of Cars used"
                  onChange={e => setCars(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="scooters"
                  id="scooters"
                  placeholder="No of Scooters/Motorcycles used"
                  onChange={e => setScooter(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="km"
                  id="km"
                  placeholder="Average Kilometers travelled daily"
                  onChange={e => setKm(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="petrol"
                  id="petrol"
                  placeholder="Petrol price"
                  onChange={e => setPetrol(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="years"
                  id="years"
                  placeholder="Years of usage"
                  onChange={e => setYears(e.target.value)}
                />
              </div>
              <button className="bg-transparent border-0 mt-3" onClick={calcSavings}>
                <Button text="Calculate" color="black" />
              </button>

            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card-savings h-100 py-3 px-3 text-center d-flex flex-nowrap flex-column justify-content-center">
                <h4 className="text-capitalize">{petrolSaved}</h4>
                <h4 className="text-capitalize">{petrolCostSaved}</h4>
                <h4 className="text-capitalize">{mainCostSaved}</h4>
                <h4 className="text-capitalize">{elecConsumed}</h4>
                <h4 className="text-capitalize">{carbonEmission}</h4>
                <h3 className="text-wrap">{total}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BuySmart;
