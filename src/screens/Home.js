import React, { useState } from "react";
import Button from "../components/Button";
import { Parallax } from "react-parallax";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Vimeo from "@u-wave/react-vimeo";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../assets/css/Home.css";
import { Waypoint } from 'react-waypoint';
import Slider from "react-slick";

import electric from "../assets/img/design/electric.svg";
import dots from "../assets/img/design/dots.svg";
import lines from "../assets/img/design/lines.svg";
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
import { useHistory } from "react-router-dom";
import navUrls from "./../constant/navUrls";
import { Helmet } from "react-helmet";

function Home() {
  const history = useHistory();
  console.log(
    window.location.hostname === "localhost"
      ? "rzp_test_t4fMAIqMYPBJ38"
      : "rzp_live_rrQB0T2BkwBGLm"
  );

  var settingsTestimonial = {
    dots: true,
    autoplay: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          arrows: false,
        }
      },
    ]
  };

  var settingsYoutube = {
    dots: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 786,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  let [shouldPlay, updatePlayState] = useState("");

  let handleEnterViewport = function () {
    updatePlayState("https://vimeo.com/509675910");
    console.log('play')
  }
  let handleExitViewport = function () {
    updatePlayState("");
    console.log('pause')

  }


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EMotorad | Best Electric Bicycle and Electric Bike</title>
        <meta name="description" content="Looking for the Best Electric Bicycle? Emotorad offers high tech, reliable, and fast electric cycles. Ebike at the best prices. Buy an Electric Bicycle Now!" />
        <meta name="keywords" content="electric bicycle, electric bike, e bikes, electric cycle, best electric bike, best electric bicycle, electric bike price, power bike, e bike price, electric cycle price, e bicycle, electric bicycle price, electric bike company, electric bike motors, ebike motors, electric bike cycle" />
      </Helmet>

      <Header />
      <section id="hero">
        <div className="container">
          <h3>Ride The</h3>
          <img src={electric} alt="Electric" className="img-fluid electric" />
          <h2 className="mt-2">Revolution</h2>
          <img src={dots} alt="Dots" className="dots" />
          <div className="hero-btn">
            <button
              onClick={() => history.push(navUrls.products)}
              className="bg-transparent border-0 mx-auto w-100"
            >
              <Button text="View Products" />
            </button>
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
              <button
                onClick={() => history.push(navUrls.testride)}
                className="bg-transparent border-0 mx-auto w-100"
              >
                <Button text="Book a test ride" />
              </button>
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
                <h1>
                  <CountUp start={0} end={25}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h1>
                <p>Kilometers per Hour</p>
              </div>
              <div className="col-md-4 mb-5">
                <h4>Range</h4>
                <h1>
                  <CountUp start={0} end={45}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h1>
                <p>Kilometers in full charge</p>
              </div>
              <div className="col-md-4 mb-5">
                <h4>Battery</h4>
                <h1>
                  <CountUp start={0} end={36}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h1>
                <p>Volts, 10.4Ah Samsung MJ1 Cell</p>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      <Waypoint
        onEnter={handleEnterViewport}
        onLeave={handleExitViewport}
      >
        <section id="video">

          <Vimeo
            video={shouldPlay}
            autoplay={true}
            responsive={true}
            controls={false}
            showByline={false}
            background={true}
          />
        </section>
      </Waypoint>


      <section id="products">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 position-relative overflow-hidden">
            <div className="emx-image-holder"></div>
            <div className="emx-box pl-3 pl-sm-5">
              <h2>EMX</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <button
                onClick={() => history.push(navUrls.products)}
                className="bg-transparent border-0 text-left w-100"
              >
                <Button text="Explore model" />
              </button>
            </div>
          </div>
          <div className="col-lg-6 overflow-hidden">
            <div className="doodle-image-holder"></div>
            <div className="doodle-box pl-3 pl-sm-5">
              <h2>Doodle</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <button
                onClick={() => history.push(navUrls.products)}
                className="bg-transparent border-0 text-left w-100"
              >
                <Button text="Explore model" />
              </button>
            </div>
          </div>
          <div className="col-lg-12 overflow-hidden">
            <div className="trex-image-holder"></div>
            <div className="trex-box pl-3 pl-sm-5">
              <h2>T-REX</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <button
                onClick={() => history.push(navUrls.products)}
                className="bg-transparent border-0 text-left w-100"
              >
                <Button text="Explore model" />
              </button>
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
              <button
                onClick={() => history.push(navUrls.products)}
                className="bg-transparent border-0 text-left w-100"
              >
                <Button text="Shop Now" />
              </button>
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
              <a href="https://www.zeebiz.com/small-business/news-pune-ev-startup-launches-india-s-first-e-cycle-with-dual-suspension-price-starts-at-rs-50000-140808"><img src={logo1} alt="Logo" className="mx-5" /></a>
              <a href="https://auto.hindustantimes.com/auto/two-wheelers/pune-based-ev-startup-launches-e-cycle-with-dual-suspension-at-rs-50-000-41605690000216.html"><img src={logo2} alt="Logo" className="mx-5" /></a>
              <a href="https://indianexpress.com/article/cities/pune/clean-green-and-profitable-a-pune-based-startup-bucks-economic-gloom-to-e-cycle-its-way-to-success-7210581/"><img src={logo3} alt="Logo" className="mx-5" /></a>
              <a href="https://www.thetribalbox.com/emotorad-pune-ev-start-up-introduces-premium-e-cycles-for-bike-enthusiasts-in-india"><img src={logo4} alt="Logo" className="mx-5" /></a>
              <a href="https://m.dailyhunt.in/news/india/english/bike+dekho-epaper-bikedeko/emotorad+t+rex+electric+mtb+set+to+launch+next+week-newsid-n242739834"><img src={logo5} alt="Logo" className="mx-5" /></a>
              <a href="https://www.bikedekho.com/news/emotorad-t-rex-electric-mtb-set-to-launch-next-week"><img src={logo6} alt="Logo" className="mx-5" /></a>
              <a href="https://www.zigwheels.com/news-features/news/emotorad-trex-ebike-to-launch-later-this-month/40780/"><img src={logo7} alt="Logo" className="mx-5" /></a>
              <a href=""><img src={logo8} alt="Logo" className="mx-5" /></a>
              <a href="https://www.financialexpress.com/auto/electric-vehicles/emotorad-t-rex-all-terrain-electric-bike-india-launch-expected-price-range-charging-time-top-speed-deliveries-bookings-features/2168017/lite/"><img src={logo9} alt="Logo" className="mx-5" /></a>
              <a href="https://www.manufacturingtodayindia.com/products-suppliers/9024-pune-ev-startup-launches-indias-first-e-cycle-with-dual-suspension"><img src={logo10} alt="Logo" className="mx-5" /></a>
              <a href=""><img src={logo11} alt="Logo" className="mx-5" /></a>
              <a href="https://www.livemint.com/auto-news/pune-ev-startup-launches-india-s-first-e-cycle-with-dual-suspension-11605713806838.html"><img src={logo12} alt="Logo" className="mx-5" /></a>
              <a href="https://www.google.com/amp/s/m.timesofindia.com/city/pune/startup-rolls-out-e-cycle-at-rs-50000/amp_articleshow/79291049.cms"><img src={logo13} alt="Logo" className="mx-5" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial">
        <div className="container">
          <Slider {...settingsTestimonial}>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    E-Bicycle, E Motorad is a newer method of transportation
                    which not only support a much healthier lifestyle but also
                    help in maintaining eco-friendly environment.
                  </p>
                  <h4 className="text-left">Uday Ambike</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={udayAmbike}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    The Product is as good as it gets, can not compare the
                    comfort and the specs to any other product in the market.Ill
                    suggest you to take a test ride so that you can feel its
                    worth every penny.
                  </p>
                  <h4 className="text-left">Ayush Gupta</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={ayushGupta}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    1. The design of the E-Bicycle is very nice. And because of
                    the black and yellow combination it gives the bike a premium
                    look. <br />
                    2. The bike is light weight which makes it comfortable to
                    ride. <br />
                    3. The battery is also good. And as it's a detachable
                    battery we can carry the same for charging at the home.
                    Inbuilt charging indicator provides an easy way to check the
                    charging status. <br />
                    4. All the modes: Pedal Mode, Assist Mode, Throttle Mode,
                    Walk Mode, Cruise Mode are very nice. <br />
                    5. The quality of the Tyres is very good. <br />
                    6. The Dual Suspension system with lock unlock feature
                    provides a good quality of ride and comfort as well
                    specially while off-roading. <br />
                    So overall the E-BICYCLE Electro Motorad is very very good.
                  </p>
                  <h4 className="text-left">Rudrendra Ambike</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={rudrendaAmbike}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    Very excited to see the E-bike. The best part is it comes
                    very sturdy. The material quality speaks for itself. Thank
                    for the affordable ride EM.
                  </p>
                  <h4 className="text-left">Yudhishter Bhati</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={yudhishterBhati}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    Loving it more everyday, such a reliable product. I would
                    recommend you to buy this without any doubts. Excellent
                    Product quality.
                  </p>
                  <h4 className="text-left">Tanveer Siddiqi</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={tanveerSiddiqi}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    Overall Moovway or EMX what you call it is a really good
                    experience, Nice powerful throttle response, Great
                    suspension, Looks are amazing too. I recommend it to
                    everyone who wants electric
                  </p>
                  <h4 className="text-left">Ambar Bannerji</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={ambarBannerji}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    EMXs battery life is awesome and the frame geometry is also
                    so great that it makes it very light. My suggestion is that
                    the drivetrain and the shifters can be upgraded, rest its
                    one of the best ebike in the market.
                  </p>
                  <h4 className="text-left">Jamshed Khambatta</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={jamshedKhambatta}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    Till date I had superb experience and the ride is enjoyable
                    as well. The quality of bike is just amazing!!
                  </p>
                  <h4 className="text-left">Rohit Gupta</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={rohitGupta}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <p className="text-left">
                    We all like to ride the Ebike including the ladies in our
                    family, its such a joy and we are proud to be an advanced
                    and responsible family that rides on electric vehicle.
                  </p>
                  <h4 className="text-left">Ambike Family</h4>
                </div>
                <div className="col-lg-4">
                  <img
                    src={ambikeFamily}
                    alt="Photo"
                    className="img-fluid my-3 mx-auto"
                  />
                </div>
              </div>
            </div>
            {/* </Carousel> */}
          </Slider>
        </div>
      </section>

      <section id="youtube-carousel">
        <div className="container">
          <h2 className="text-center mb-5 text-dark">Online Reviews</h2>
          <Slider  {...settingsYoutube}>
            <div className="px-3">
              <div className="d-flex align-items-center justify-content-center h-100 video-container">
                <iframe src="https://www.youtube.com/embed/-NMJFHCz3DY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="px-3">
              <div className="d-flex align-items-center justify-content-center h-100 video-container">
                <iframe src="https://www.youtube.com/embed/2iB_3SoHopA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="px-3">
              <div className="d-flex align-items-center justify-content-center h-100 video-container">
                <iframe src="https://www.youtube.com/embed/cZnCNBycupg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="px-3">
              <div className="d-flex align-items-center justify-content-center h-100 video-container">
                <iframe src="https://www.youtube.com/embed/5UTCeu4EcyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="px-3">
              <div className="d-flex align-items-center justify-content-center h-100 video-container">
                <iframe src="https://www.youtube.com/embed/_qRYr3KlxnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="px-3">
              <div className="d-flex align-items-center justify-content-center h-100 video-container">
                <iframe src="https://www.youtube.com/embed/hwqY6wDdops" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="px-3">
              <div className="d-flex align-items-center justify-content-center h-100 video-container">
                <iframe src="https://www.youtube.com/embed/RP9LQ3i8OeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <Footer />
    </div >
  );
}

export default Home;
