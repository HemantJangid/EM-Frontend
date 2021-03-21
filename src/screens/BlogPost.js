import React from "react";
import "../assets/css/BlogPost.css";
import blogpost from "../assets/img/backgrounds/blogpost.jpg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "./../components/Header";

function BlogPost() {
  return (
    <div>
      <Header />

      <section id="post">
        <div className="container">
          <h2>Designing Dashboards</h2>
          <h4>2020 Dashboard</h4>
          <img src={blogpost} alt="" className="img-fluid" />
          <p className="mt-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <Button text="Next post" color="black" className="mt-5" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPost;
