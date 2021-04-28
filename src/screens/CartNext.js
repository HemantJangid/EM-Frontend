import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/newCart.css";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import cycle from "../temp/cycle.png";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

function getSteps() {
    return [
        "1. Checkout",
        "2. Payment",
        "3. Confirmation",
    ];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return "1. Checkout";
        case 1:
            return "What is an ad group anyways?";
        case 2:
            return "This is the bit I really care about!";
        default:
            return "Unknown stepIndex";
    }
}

function CartNext() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    let comp;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    if (activeStep === 0) {
        comp = <div className="row justify-content-center">
            <div className="col-lg-4">
                <h4>Detail Order</h4>
                <div className="table-responsive">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="pl-3">74,990 INR</td>
                            </tr>
                            <tr>
                                <td>Shipping Cost</td>
                                <td className="pl-3">Free</td>
                            </tr>
                            <tr>
                                <td>Promo Code</td>
                                <td className="pl-3">EM-15</td>
                            </tr>
                            <tr>
                                <td>Packaging</td>
                                <td className="pl-3">Free</td>
                            </tr>
                            <tr>
                                <td>GST (18%)</td>
                                <td className="pl-3">Included</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-4">
                <h4>Shipping Address</h4>
                <form>
                    <div className=" form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            required
                            className="mb-4"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            className="mb-4"
                            type="text"
                            name="organisation_name"
                            id="organisation_name"
                            placeholder="Organisation Name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            className="mb-4"
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                        />
                    </div>
                    <div className="form-row form-group">
                        <input
                            required
                            className="mb-4"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            className="mb-4"
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Contact Number"
                        />
                    </div>
                    <div className="form-group mb-5">
                        <label for="cars">Interested in:</label>
                        <select
                            required
                            id="interested_in"
                            name="interested_in"
                        >
                            <option value="showroom">Exclusive Showroom</option>
                            <option value="dealership">Dealership</option>
                            <option value="distributorship">Distributorship</option>
                        </select>
                    </div>
                    {/* <button
                        disabled={formLoading}
                        type="submit"
                        className="bg-transparent border-0 mx-auto w-100"
                    >
                        <Button text="Enquire" color="black" />
                    </button> */}
                </form>
            </div>
        </div>
    }

    return (
        <div>
            <Header />
            <section id="cart">
                <div className="container">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <div>
                            <h3>Checkout</h3>
                            <img src={dots} alt="Dots" className="dots" />
                        </div>
                        <button className="bg-transparent border-0 my-3">
                            <Button text="Log out" />
                        </button>
                    </div>
                    <div className="cart-box px-4 py-4">
                        <div>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <div>
                                {activeStep === steps.length ? (
                                    <div>

                                        {/* <h4>All steps completed</h4>
                                        <button onClick={handleReset}>Reset</button> */}
                                    </div>
                                ) : (
                                    <div>
                                        {comp}
                                        <div>
                                            <button disabled={activeStep === 0} onClick={handleBack}>Back</button>
                                            <button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                            >
                                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CartNext;
