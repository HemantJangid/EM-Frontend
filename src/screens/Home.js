
import React from "react";
import Button from "../components/Button";
import { Carousel } from "react-responsive-carousel";
import { Parallax } from "react-parallax";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Vimeo from '@u-wave/react-vimeo';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "../assets/css/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import electric from "../assets/img/design/electric.svg";
import dots from "../assets/img/design/dots.svg";
import lines from "../assets/img/design/lines.svg";
import play from "../assets/img/design/play.svg";
import numbers from "../assets/img/backgrounds/numbers-min.jpg";

import udayAmbike from "../assets/img/testimonials/uday-ambike.jpg";
import ayushGupta from "../assets/img/testimonials/ayush-gupta.jpg";
import jamshedKhambatta from "../assets/img/testimonials/jamshed-khambatta.jpg";
import rohitGupta from "../assets/img/testimonials/rohit-gupta.jpg";
import rudrendaAmbike from "../assets/img/testimonials/rudrendra-ambike.jpg";
import ambikeFamily from "../assets/img/testimonials/ambike-family.jpg";
import tanveerSiddiqi from "../assets/img/testimonials/tanveer-siddiqi.jpg";
import yudhishterBhati from "../assets/img/testimonials/yudhishter-bhati.jpg";
import ambarBannerji from "../assets/img/testimonials/ambar-bannerji.jpg";

import logo1 from "../assets/img/logos/logo1.png";
import logo2 from "../assets/img/logos/logo2.png";
import logo3 from "../assets/img/logos/logo3.png";
import logo4 from "../assets/img/logos/logo4.png";
import logo5 from "../assets/img/logos/logo5.png";
import logo6 from "../assets/img/logos/logo6.png";
import logo7 from "../assets/img/logos/logo7.png";
import logo8 from "../assets/img/logos/logo8.png";
import logo9 from "../assets/img/logos/logo9.png";
import logo10 from "../assets/img/logos/logo10.png";
import logo11 from "../assets/img/logos/logo11.png";
import logo12 from "../assets/img/logos/logo12.png";
import logo13 from "../assets/img/logos/logo13.png";


function Home() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="container">
          <h3>Ride The</h3>
          <img src={electric} alt="Electric" className="img-fluid electric" />
          <h2 className="mt-2">Revolution</h2>
          <img src={dots} alt="Dots" className="dots" />
          <div className="hero-btn">
            <Button text="View Products" />
          </div>
        </div>
      </section>

      <section id="info">
        <div className="design-lines d-none d-sm-block">
          <img src={lines} alt="Lines" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3>Your Powerful E-Ride</h3>
              <p className="mb-5">
                EM brings in a range of best electric bikes that are affordable,
                futuristic, and challenge the status quo. The e-bikes come with
                disc brakes and an alloy frame. The electric cycles by EM run on
                a combination of manual pedaling with battery assist and
                throttle.
              </p>
              <Button text="Book a test ride" />
            </div>
          </div>
        </div>
      </section>

      <Parallax bgImage={numbers} bgImageAlt="BG IMAGE" strength={400}>
        <section id="numbers">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 mb-5">
                <h4>Speed</h4>
                <h1><CountUp start={0} end={25}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp></h1>
                <p>Kilometers per Hour</p>
              </div>
              <div className="col-md-4 mb-5">
                <h4>Range</h4>
                <h1><CountUp start={0} end={45}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp></h1>
                <p>Kilometers in full charge</p>
              </div>
              <div className="col-md-4 mb-5">
                <h4>Battery</h4>
                <h1><CountUp start={0} end={36}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp></h1>
                <p>Volts, 10.4Ah Samsung MJ1 Cell</p>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      <section id="video">
        <Vimeo
          video="https://vimeo.com/509675910"
          autoplay={true}
          responsive={true}
          controls={false}
          showByline={false}
          color="#68db85"
          background={true}
        />
      </section>

      <section id="products">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 position-relative overflow-hidden">
            <div className="emx-image-holder"></div>
            <div className="emx-box pl-3 pl-sm-5">
              <h2>EMX</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <Button text="Explore models" />
            </div>
          </div>
          <div className="col-lg-6 overflow-hidden">
            <div className="doodle-image-holder"></div>
            <div className="doodle-box pl-3 pl-sm-5">
              <h2>Doodle</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <Button text="Explore models" />
            </div>
          </div>
          <div className="col-lg-12 overflow-hidden">
            <div className="trex-image-holder"></div>
            <div className="trex-box pl-3 pl-sm-5">
              <h2>T-REX</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <Button text="Explore models" />
            </div>
          </div>
        </div>
      </section>

      <section id="info2">
        <div className="design-lines d-none d-lg-block">
          <img src={lines} alt="Lines" />
        </div>
        <div className="row justify-content-end align-items-center no-gutters">
          <div className="col-lg-5">
            <div className="container py-5 my-5 my-lg-0">
              <h3>Buy top notch accessories for your eBike</h3>
              <p className="mb-4">
                EM brings in a range of best electric bikes that are affordable,
                futuristic, and challenge the status quo. The e-bikes come with
                disc brakes and an alloy frame. The electric cycles by EM run on
                a combination of manual pedaling with battery assist and
                throttle.
              </p>
              <Button text="Shop now" />
            </div>
          </div>
          <div className="col-lg-6 info2-img"></div>
        </div>
      </section>

      <section id="feature">
        <h3 className="mb-5">Featured In</h3>
        <div class="marquee">
          <div class="track">
            <div class="content">
              <img src={logo1} alt="Logo" className="mx-5" />
              <img src={logo2} alt="Logo" className="mx-5" />
              <img src={logo3} alt="Logo" className="mx-5" />
              <img src={logo4} alt="Logo" className="mx-5" />
              <img src={logo5} alt="Logo" className="mx-5" />
              <img src={logo6} alt="Logo" className="mx-5" />
              <img src={logo7} alt="Logo" className="mx-5" />
              <img src={logo8} alt="Logo" className="mx-5" />
              <img src={logo9} alt="Logo" className="mx-5" />
              <img src={logo10} alt="Logo" className="mx-5" />
              <img src={logo11} alt="Logo" className="mx-5" />
              <img src={logo12} alt="Logo" className="mx-5" />
              <img src={logo13} alt="Logo" className="mx-5" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial">
        <div className="container">
          <Carousel>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    E-Bicycle, E Motorad is a newer method of transportation which not only support a much healthier lifestyle but also help in maintaining eco-friendly environment.</p>
                  <h4 className="text-left">Uday Ambike</h4>
                </div>
                <div className="col-lg-4">
                  <img src={udayAmbike} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    The Product is as good as it gets, can not compare the comfort and the specs to any other product in the market.Ill suggest you to take a test ride so that you can feel its worth every penny.</p>
                  <h4 className="text-left">Ayush Gupta</h4>
                </div>
                <div className="col-lg-4">
                  <img src={ayushGupta} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    1. The design of the E-Bicycle is very nice. And because of the black and yellow combination it gives the bike a premium look. <br />
                    2. The bike is light weight which makes it comfortable to ride. <br />
                    3. The battery is also good. And as it's a detachable battery we can carry the same for charging at the home. Inbuilt charging indicator provides an easy way to check the charging status. <br />
                    4. All the modes: Pedal Mode, Assist Mode, Throttle Mode, Walk Mode, Cruise Mode are very nice. <br />
                    5. The quality of the Tyres is very good. <br />
                    6. The Dual Suspension system with lock unlock feature provides a good quality of ride and comfort as well specially while off-roading. <br />
So overall the E-BICYCLE Electro Motorad is very very good.</p>
                  <h4 className="text-left">Rudrendra Ambike</h4>
                </div>
                <div className="col-lg-4">
                  <img src={rudrendaAmbike} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">Very excited to see the E-bike. The best part is it comes very sturdy. The material quality speaks for itself. Thank for the affordable ride EM.
                  </p>
                  <h4 className="text-left">Yudhishter Bhati</h4>
                </div>
                <div className="col-lg-4">
                  <img src={yudhishterBhati} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    Loving it more everyday, such a reliable product. I would recommend you to buy this without any doubts. Excellent Product quality.
                  </p>
                  <h4 className="text-left">Tanveer Siddiqi</h4>
                </div>
                <div className="col-lg-4">
                  <img src={tanveerSiddiqi} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">Overall Moovway or EMX what you call it is a really good experience, Nice powerful throttle response, Great suspension, Looks are amazing too. I recommend it to everyone who wants electric
                  </p>
                  <h4 className="text-left">Ambar Bannerji</h4>
                </div>
                <div className="col-lg-4">
                  <img src={ambarBannerji} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">EMXs battery life is awesome and the frame geometry is also so great that it makes it very light.  My suggestion is that the drivetrain and the shifters can be upgraded, rest its one of the best ebike in the market.
                  </p>
                  <h4 className="text-left">Jamshed Khambatta</h4>
                </div>
                <div className="col-lg-4">
                  <img src={jamshedKhambatta} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">Till date I had superb experience and the ride is enjoyable as well. The quality of bike is just amazing!!
                  </p>
                  <h4 className="text-left">Rohit Gupta</h4>
                </div>
                <div className="col-lg-4">
                  <img src={rohitGupta} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">We all like to ride the Ebike including the ladies in our family, its such a joy and we are proud to be an advanced and responsible  family that rides on electric vehicle.
                  </p>
                  <h4 className="text-left">Ambike Family</h4>
                </div>
                <div className="col-lg-4">
                  <img src={ambikeFamily} alt="Photo" className="img-fluid my-3" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
