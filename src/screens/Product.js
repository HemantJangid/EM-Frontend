import React from "react";
import Button from "../components/Button";
import '../assets/css/Product.css'
import dots from '../assets/img/design/dots.svg'
import neco from '../assets/img/design/neco.svg'
import tyres from '../assets/img/design/tyres.svg'
import light from '../assets/img/design/light.svg'

function Product() {
    return <div>
        <section id="hero">
            <div className="container">
                <h1>T-REX</h1>
                <div className="buttons">
                    <div className="mx-3">
                        <Button text="Book a test ride" />
                    </div>
                    <div className="mx-3">
                        <Button text="Buy now" />
                    </div>
                </div>
            </div>
        </section>

        <section id="img-banner">
        </section>

        <section id="info">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <h2>Comfortable<span className="pri">.</span> Safe<span className="pri">.</span> Sturdy<span className="pri">.</span></h2>
                        <p>T-REX promises comfort and safety to the riders. The saddle is made of high-quality Hydrodyne Foam-Soft PU MTB to provide comfortable seating. The Hardtail Alloy Hydroformed type frame with rear hub motor adds to the power of this piece of thoughtfully designed e-bike.</p>
                        <table>
                            <tr>
                                <td className="pri">Range</td>
                                <td>35 kms (60+ Km with Paddle assist)</td>
                            </tr>
                            <tr>
                                <td className="pri">Speed</td>
                                <td>Max speed 25km/hr</td>
                            </tr>
                            <tr>
                                <td className="pri">Battery</td>
                                <td>36 Volts, 7.8 Ah Powerful Battery</td>
                            </tr>
                            <tr>
                                <td className="pri">Derailleur</td>
                                <td>7-speed Shimano tourney dual derailleurs</td>
                            </tr>
                            <tr>
                                <td className="pri">Brakes</td>
                                <td>Dual Disc Brakes</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-lg-7">
                        <div className="content-2">
                            <h4>Shimano tourney dual derailleurs</h4>
                            <h1>7</h1>
                            <p>Speed</p>
                            <Button text="Download brochure" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="buy">
            <div className="container">
                <div className="row-justify-content-center">

                </div>
            </div>
        </section>

        <section id="done">
            <div className="container">
                <h2>We are not done yet</h2>
                <img src={dots} alt="Dots" className="dots" />
                <div className="mt-5 row justify-content-center">
                    <div className="col-lg-4">
                        <div className="done-box">
                            <img src={neco} alt="Neco" className="img-fluid" />
                            <h4>Neco with Sealed Bearing and Black Alloy</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="done-box">
                            <img src={tyres} alt="Neco" className="img-fluid" />
                            <h4><span className="pri">26 inch</span> diameter and <span className="pri">2 inch</span> wide heavy duty Tyres</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="done-box">
                            <img src={light} alt="Neco" className="img-fluid" />
                            <h4>Front Mount <span className="pri">LED</span> Headlight</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Product;
