import React from "react";
import Button from "../components/Button";
import { Carousel } from "react-responsive-carousel";
import { Parallax } from "react-parallax";
import Header from "../components/Header";

import "../assets/css/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import electric from "../assets/img/design/electric.svg";
import dots from "../assets/img/design/dots.svg";
import lines from "../assets/img/design/lines.svg";
import play from "../assets/img/design/play.svg";
import numbers from "../assets/img/backgrounds/numbers.jpg";

import arvind from "../assets/img/testimonials/arvind.jpg";

function Home() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="container">
          <h3>Ride The</h3>
          <img src={electric} alt="Electric" className="img-fluid electric" />
          <h2>Revolution</h2>
          <img src={dots} alt="Dots" className="dots" />
          <div className="hero-btn">
            <Button text="View Products" />
          </div>
        </div>
      </section>

      <section id="info">
        <div className="design-lines">
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

      <Parallax bgImage={numbers} bgImageAlt="the cat" strength={100}>
        <section id="numbers">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <h4>Speed</h4>
                <h1>25</h1>
                <p>Kilometers per Hour</p>
              </div>
              <div className="col-lg-4">
                <h4>Range</h4>
                <h1>45</h1>
                <p>Kilometers in full charge</p>
              </div>
              <div className="col-lg-4">
                <h4>Battery</h4>
                <h1>36</h1>
                <p>Volts, 10.4Ah Samsung MJ1 Cell</p>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      <section id="video">
        <div className="container">
          <div className="video-box">
            <img src={play} alt="Play" />
          </div>
        </div>
      </section>

      <section id="products">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <div className="emx-box">
              <h2>EMX</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <Button text="Explore models" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="doodle-box">
              <h2>Doodle</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <Button text="Explore models" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="trex-box">
              <h2>T-REX</h2>
              <img className="dots mb-4" src={dots} alt="Dots" />
              <Button text="Explore models" />
            </div>
          </div>
        </div>
      </section>

      <section id="info2">
        <div className="design-lines">
          <img src={lines} alt="Lines" />
        </div>
        <div className="row justify-content-end align-items-center no-gutters">
          <div className="col-lg-5">
            <div className="container">
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
        <h3>Featured In</h3>
        <marquee behavior="scroll" direction="right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia iure
          neque voluptatibus placeat voluptatum omnis distinctio impedit
          repellendus earum sunt alias, veritatis laudantium molestias ut sed
          ducimus enim a porro repellat suscipit numquam cumque accusantium
          labore cupiditate. Alias laudantium non harum animi voluptatem tempora
          accusamus quibusdam culpa quis enim ratione possimus fugiat, minus,
          quisquam debitis beatae repellat consectetur eaque, delectus assumenda
          laborum itaque sit necessitatibus laboriosam. Voluptas, repellendus
          at? Tempore quam corporis perspiciatis quia non explicabo aut mollitia
          suscipit quis! Ex necessitatibus aliquam cumque aperiam accusamus
          voluptatum ad, reprehenderit consectetur optio fugit? Modi eveniet
          esse molestiae. Similique pariatur amet facilis.
        </marquee>
      </section>

      <section id="testimonial">
        <div className="container">
          <Carousel>
            <div className="testimonial-box">
              <div className="text">
                <p>
                  Very excited to see the E-bike. The best part is it comes very
                  sturdy. The material quality speaks for itself. Thank for the
                  affordable ride EM.
                </p>
                <h4>Arvind, Bangalore</h4>
              </div>
              <img src={arvind} alt="Arvind" className="img-fluid" />
            </div>
            <div className="testimonial-box">
              <div className="text">
                <p>
                  Very excited to see the E-bike. The best part is it comes very
                  sturdy. The material quality speaks for itself. Thank for the
                  affordable ride EM.
                </p>
                <h4>Arvind, Bangalore</h4>
              </div>
              <img src={arvind} alt="Arvind" className="img-fluid" />
            </div>
            <div className="testimonial-box">
              <div className="text">
                <p>
                  Very excited to see the E-bike. The best part is it comes very
                  sturdy. The material quality speaks for itself. Thank for the
                  affordable ride EM.
                </p>
                <h4>Arvind, Bangalore</h4>
              </div>
              <img src={arvind} alt="Arvind" className="img-fluid" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Home;
