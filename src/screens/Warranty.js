import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import '../assets/css/Warranty.css'

function Cart() {
    return (
        <div>
            <Header />
            <section id="warranty">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-12 bg-dark mx-md-0 mx-sm-4">
                            <div className="my-5">
                                <h2 className="text-center">Aditya Pathak</h2>
                            </div>
                        </div>

                        <main role="main" className="col-md-12 my-3 col-lg-9 px-md-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                                <div>
                                    <h4>Get it secured</h4>
                                    <h3>Activate warranty</h3>
                                    <img src={dots} alt="Dots" className="dots" />
                                </div>
                                <button
                                    className="bg-transparent border-0 my-3"
                                >
                                    <Button text="Log out" />
                                </button>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-lg-7">
                                    <form action="" className="py-3 px-0">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Frame No" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Date of Purchase" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Purchased from Dealer/Online" />
                                        </div>
                                        <div className="mt-5">
                                            <Button text="Activate" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Cart;
