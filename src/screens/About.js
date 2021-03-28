import React from "react";

import dots from "../assets/img/design/dots.svg";
import valuesHex from "../assets/img/design/values.svg";
import Button from "../components/Button";
import vmion from "../assets/img/backgrounds/vmion-min.jpg";
import values from "../assets/img/backgrounds/values-min.jpg";
import rajib from "../assets/img/team/rajib-min.jpg";
import kunal from "../assets/img/team/kunal-min.jpg";
import aditya from "../assets/img/team/aditya-min.jpg";
import sumedh from "../assets/img/team/sumedh-min.jpg";

import "../assets/css/About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HashLink } from 'react-router-hash-link'
import { Helmet } from "react-helmet";


function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | EMotorad | Best Electric Bicycle and Electric Bike</title>
                <meta name="description" content="We are a bunch of EV maniacs coming together with a mission to help India shift to EV with reliable and affordable luxury eBikes." />
            </Helmet>

            <Header />
            <section id="about-hero">
                <div className="container">
                    <h3>About</h3>
                    <h1>Em<span className="pri">o</span>t<span className="pri">o</span>rad</h1>
                    <img src={dots} className="dots mb-4" alt="Dots" />
                    <HashLink smooth to="/about#team">
                        <Button text="Meet the team" />
                    </HashLink>
                </div>
            </section>

            <section id="about-info">
                <h3>A Company with a Million Dreams!</h3>
            </section>

            <section id="vmion">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 order-1 order-md-1 my-5">
                            <img src={vmion} className="img-fluid" alt="Rectangle" />
                        </div>
                        <div className="col-lg-6 col-md-6 order-2 order-md-2 my-5">
                            <h3>Our Vision & Mission.</h3>
                            <p>
                                EM believes electric is the future of mobility and with the Indian market yet to reach anywhere close to its fullest potential , the rise has begun. We hope to play a critical role in spreading awareness, engaging end consumers and delivering the products as per  their requirements at a nominal price, we like to call it affordable luxury.
                                As mentioned, the company aims to bring across top quality electric cycles which would currently cost way higher in the Indian market at an affordable price utilizing its local sourcing and manufacturing capabilities.
                                </p>
                            <p>
                                EM strongly believes that the local setup will not only help reduce the pricing but will bring about innovations and job creation in various parts of the country we are planning to expand.
                                </p>
                        </div>
                        <div className="col-lg-5 col-md-6 order-4 order-md-3 my-5">
                            <h3>Our Values.</h3>
                            <img src={valuesHex} className="img-fluid my-4p" alt="Rectangle" />

                        </div>
                        <div className="col-lg-7 col-md-6 order-3 order-md-4 my-5">
                            <img src={values} className="img-fluid" alt="Rectangle" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="team">
                <div className="container">
                    <h3 className="mb-5">Our Team</h3>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={rajib} alt="Aditya Pathak" className="img-fluid" />
                            <h4>RAJIB GANGOPADHYAY</h4>
                            <p>Founder</p>
                            <a href="https://www.linkedin.com/in/rajib-gangopadhyay-5135281b"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={kunal} alt="Aditya Pathak" className="img-fluid" />
                            <h4>KUNAL GUPTA</h4>
                            <p>Co-Founder & CEO</p>
                            <a href="https://www.linkedin.com/in/kunal-gupta-300784b1/"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={aditya} alt="Aditya Pathak" className="img-fluid" />
                            <h4>ADITYA OZA</h4>
                            <p>Co-Founder & CMO</p>
                            <a href="https://www.linkedin.com/in/aditya-oza-30356090/"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={sumedh} alt="Aditya Pathak" className="img-fluid" />
                            <h4>SUMEDH BATTEWAR</h4>
                            <p>Co-Founder & CBO</p>
                            <a href="https://www.linkedin.com/in/sumedh-battewar-39a647147"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;
