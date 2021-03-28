import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import "../assets/css/Products.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import constants from "../constant/RequestUrls";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import bg_image from "../assets/img/backgrounds/pemx-min.jpg";
import { Helmet } from 'react-helmet'

function AllProducts({ match }) {
  const [products, setProducts] = useState();
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    axios
      .get(`${constants.base_url}${constants.all_vehicles}`)
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.payload.products);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products | EMotorad | Best Electric Bicycle and Electric Bike</title>
        <meta name="description" content="The best in class eBikes designed for the Indian terrains is all set to amaze you Book your electric beast today and feel the power of Indian EV." />
      </Helmet>

      <Header />
      {products &&
        products.map((product) => (
          <section
            id="p1"
            style={{
              backgroundImage: `url(${product.bg_image})`,
            }}
          >
            <span className="price">INR {product.selling_price}/-</span>
            <div className="container">
              <h1 className="product-title">{product.title}</h1>
              <p>EMI starting at</p>
              <h4 className="mb-5">INR {product.emi_per_month}/Month</h4>
              <Button text="download brochure" />
              <div className="mt-3"></div>
              <Link
                key={product.slug}
                to={{
                  pathname: `/${product.slug}`,
                  state: { product: product },
                }}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button text="Read more" color="white" />
              </Link>
            </div>
          </section>
        ))}

      {/* <section id="p1">
        <span className="price">INR 40,000/-</span>
        <div className="container">
          <h1>
            Ride The
            Electric Revolution
          </h1>
          <p>EMI starting at</p>
          <h4 className="mb-5">INR 1999/Month</h4>
          <Button text="download brochure" />
          <div className="mt-3"></div>
          <Link
            key={product.slug}
            to={{
              pathname: `/${product.slug}`,
              state: { product: product },
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <Button text="Read more" color="white" />
          </Link>
        </div>
      </section>

      <section id="p2">
        <span className="price">INR 40,000/-</span>
        <div className="container">
          <h1>
            Best in class commute for all vehicle
             made for <span className="red">Indian terrain</span>
          </h1>
          <p>EMI starting at</p>
          <h4 className="mb-5">INR 1500/Month</h4>
          <Button text="download brochure" />
          <div className="mt-3"></div>
          <Link
            key={product.slug}
            to={{
              pathname: `/${product.slug}`,
              state: { product: product },
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <Button text="Read more" color="white" />
          </Link>
        </div>
      </section>

      <section id="p3">
        <span className="price">INR 40,000/-</span>
        <div className="container">
          <h1>
            Fat Tyre SUV of Electric
            Bike Segment
          </h1>
          <p>EMI starting at</p>
          <h4 className="mb-5">INR 2100/Month</h4>
          <Button text="download brochure" />
          <div className="mt-3"></div>
          <Link
            key={product.slug}
            to={{
              pathname: `/${product.slug}`,
              state: { product: product },
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <Button text="Read more" color="white" />
          </Link>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default AllProducts;
