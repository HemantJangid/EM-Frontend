import React from "react";
import "../assets/css/BlogPost.css";
import Footer from "../components/Footer";
import Header from "./../components/Header";

function BlogPost(props) {
  const blog_details = props.location.state;
  return (
    <div>
      <Header />

      <section id="post">
        <div className="container">
          <h2>{blog_details.blog_title}</h2>
          {/* <h4>2020 Dashboard</h4> */}
          <img src={blog_details.blog_image} alt="" className="img-fluid" />
          <p className="mt-5">{blog_details.blog_content}</p>
          {/* <Button text="Next post" color="black" className="mt-5" /> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPost;
