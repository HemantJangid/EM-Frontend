import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/newCart.css";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./../redux/actions/user";
import { addItem } from "./../redux/actions/cart";
import { auth } from "./../firebase";
import constants from "../constant/RequestUrls";
import axios from "axios";
import navUrls from "./../constant/navUrls";
import { Helmet } from "react-helmet";
import cycle from '../temp/cycle.png'

function newCart() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart | EMotorad | Best Electric Bicycle and Electric Bike</title>
            </Helmet>
            <Header />
            <section id="cart">
                <div className="container">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <div>
                            <h3>My Cart</h3>
                            <img src={dots} alt="Dots" className="dots" />
                        </div>
                        <button className="bg-transparent border-0 my-3">
                            <Button text="Log out" />
                        </button>
                    </div>
                    <div className="cart-box px-4 py-4">
                        <h3 className="pri pb-4">Shopping cart</h3>
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 flex-wrap mb-4">
                            <div className="d-inline-flex align-items-center flex-wrap">
                                <div className="p-4 mx-sm-auto">
                                    <img src={cycle} className="img-fluid cart-img" />
                                </div>
                                <div className="d-block my-3">
                                    <h3>T-Rex</h3>
                                    <h5><strike>38,990 INR</strike></h5>
                                    <h4>38,990 INR</h4>
                                    <h6 className="mb-0">Yellow and Green</h6>
                                    <p className="mb-0">Delivery date to be confirmed by Email</p>
                                </div>
                            </div>

                            <div className="d-block right-area">
                                <label htmlFor="colorSelection">Select Color</label>
                                <select
                                    className="mb-4 form-control"
                                    required
                                    id="colorSelection"
                                    name="colorSelect"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    <option value="">Yellow & Green</option>
                                    <option value="">Red & Pink</option>
                                </select>
                                <div className="d-inline-flex align-items-center justify-content-between">
                                    <div className="d-inline-flex align-items-center">
                                        <button className="mr-2 plusminus">-</button>
                                        <p className="mb-0">1</p>
                                        <button className="ml-2 plusminus">+</button>
                                    </div>
                                    <h5 className="mx-2 mb-0">38990 INR</h5>
                                    <div className="del-btn ml-2">
                                        <i class="far fa-trash-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 flex-wrap mb-4">
                            <div className="d-inline-flex align-items-center flex-wrap">
                                <div className="p-4 mx-sm-auto">
                                    <img src={cycle} className="img-fluid cart-img" />
                                </div>
                                <div className="d-block my-3">
                                    <h3>Doodle</h3>
                                    <h5><strike>38,990 INR</strike></h5>
                                    <h4>38,990 INR</h4>
                                    <h6 className="mb-0">Yellow and Green</h6>
                                    <p className="mb-0">Delivery date to be confirmed by Email</p>
                                </div>
                            </div>

                            <div className="d-block right-area">
                                <label htmlFor="colorSelection">Select Color</label>
                                <select
                                    className="mb-4 form-control"
                                    required
                                    id="colorSelection"
                                    name="colorSelect"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    <option value="">Yellow & Green</option>
                                    <option value="">Red & Pink</option>
                                </select>
                                <div className="d-inline-flex align-items-center justify-content-between">
                                    <div className="d-inline-flex align-items-center">
                                        <button className="mr-2 plusminus">-</button>
                                        <p className="mb-0">1</p>
                                        <button className="ml-2 plusminus">+</button>
                                    </div>
                                    <h5 className="mx-2 mb-0">38990 INR</h5>
                                    <div className="del-btn ml-2">
                                        <i class="far fa-trash-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center>
                            <button
                                className="bg-transparent border-0 mt-4 mb-3"
                            >
                                <Button text="Proceed to checkout" />
                            </button>
                        </center>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    );
}

export default newCart;
