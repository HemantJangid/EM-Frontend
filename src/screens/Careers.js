import React from 'react'
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import '../assets/css/Careers.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import careerSide from "../assets/img/backgrounds/careers-side-min.jpg";

function Careers() {
    return (
        <div>
            <Header />
            <section id="careers-hero">
                <div className="container">
                    <h3 className="pri">We are</h3>
                    <h1>Hiring</h1>
                    <img src={dots} className="dots mb-4" alt="Dots" />
                    <a href="https://www.linkedin.com/company/emotorad/jobs">
                        <Button text="View Vacancies" />
                    </a>
                </div>
            </section>

            <section id="careers">
                <div className="row justify-content-center align-items-center no-gutters">
                    <div className="col-lg-6 careers-img">
                        <img src={careerSide} alt="Cycle" />
                    </div>
                    <div className="col-lg-6">
                        <div className="mx-3 mx-md-5 my-5 careers-text">
                            <p>Get your updated CV<br />
                            A cover letter is a plus<br />
                        And<br />.<br />.<br />.<br /></p>
                            <h2>Shoot us an email at:</h2>
                            <div className="d-flex flex-wrap">
                                <h1>careers</h1><h1>@</h1><h1>emotorad</h1><h1>.</h1><h1>com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Careers
