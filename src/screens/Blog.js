import React, { useState, useEffect } from "react";
import "../assets/css/Blog.css";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import Header from "./../components/Header";
import constants from "../constant/RequestUrls";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";
import navUrls from "./../constant/navUrls";

function Blog() {
  const [reRender, setReRender] = useState(true);
  const [blogs, setBLogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getBlogs();
  }, []);

  function getBlogs() {
    axios
      .get(`${constants.base_url}${constants.blog}`)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setBLogs(res.data.payload.blogs);
          setReRender(!reRender);
        }
      })
      .catch((err) => console.log(err));
  }

  console.log(blogs);
  return (
    <div>
      <Header />

      <section id="blog-hero">
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
            {blogs != undefined &&
              blogs != null &&
              blogs.map((blog, index) => {
                return (
                  <>
                    <div className="col-lg-6 mb-5">
                      <div className="mx-1">
                        <img
                          src={blog.blog_image}
                          alt="Blogpost"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                      <div className="mx-1 blog-text">
                        <div>
                          <h2>{blog.blog_title}</h2>
                          {/* <h4>2020 Dashboard</h4> */}
                          <p>{blog.blog_description}</p>
                        </div>
                        <button
                          className="text-left"
                          onClick={() => {
                            history.push(navUrls.blogpost, blog);
                          }}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <Button text="Read more" color="black" />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
