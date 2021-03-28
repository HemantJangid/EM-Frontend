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
          <img src={blog_details.blog_image} alt="" className="img-fluid" />
          <div
            dangerouslySetInnerHTML={{ __html: blog_details.blog_content }}
            className="mt-5"
          ></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPost;
