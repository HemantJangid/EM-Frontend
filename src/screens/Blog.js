import React from "react";
import "../assets/css/Blog.css";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import blogpost from "../assets/img/backgrounds/blogpost.jpg";
import Header from "./../components/Header";
import Footer from "../components/Footer";

function Blog() {
  return (
    <div>
      <Header />

      <section id="hero">
        <div className="container">
          <h3 className="pri">Read with us</h3>
          <h1>Blogs </h1>
          <img src={dots} alt="Dots" className="dots mb-4" />
          <Button text="View our products" />
        </div>
      </section>

      <section id="blogs">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mb-5">
              <div className="mx-1">
                <img src={blogpost} alt="Blogpost" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="mx-1 blog-text">
                <div>
                  <h2>Designing Dashboards</h2>
                  <h4>2020 Dashboard</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <Button text="Read more" color="black" />
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="mx-1">
                <img src={blogpost} alt="Blogpost" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="mx-1 blog-text">
                <div>
                  <h2>Designing Dashboards</h2>
                  <h4>2020 Dashboard</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <Button text="Read more" color="black" />
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="mx-1">
                <img src={blogpost} alt="Blogpost" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="mx-1 blog-text">
                <div>
                  <h2>Designing Dashboards</h2>
                  <h4>2020 Dashboard</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <Button text="Read more" color="black" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
