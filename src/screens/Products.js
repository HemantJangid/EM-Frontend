import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import "../assets/css/Products.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import priceEmx from "../assets/img/design/priceemx.svg";
import priceTrex from "../assets/img/design/pricetrex.svg";
import priceDoodle from "../assets/img/design/pricedoodle.svg";
import constants from "../constant/RequestUrls";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function AllProducts({ match }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`${constants.base_url}${constants.all_vehicles}`)
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.payload.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("products: ", products);
  return (
    <div>
      <Header />
      {products &&
        products.map((product) => (
          <section id="p1">
            {/* <img src={priceEmx} alt="Price Emx" className="price" /> */}
            <span className="price">INR {product.selling_price}/-</span>
            <div className="container">
              <h1 className="product-title">{product.title}</h1>
              <p>EMI starting at</p>
              <h4 className="mb-5">INR {product.emi_per_month}/Month</h4>
              <Button text="download brochure" />
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
        <img src={priceEmx} alt="Price Emx" className="price" />
        <div className="container">
          <h1>
            Ride The
            <br /> Electric Revolution
          </h1>
          <p>EMI starting at</p>
          <h4 className="mb-5">INR 1999/Month</h4>
          <Button text="download brochure" />
        </div>
      </section>

      <section id="p2">
        <img src={priceTrex} alt="Price Emx" className="price" />
        <div className="container">
          <h1>
            Best in class commute for all vehicle
            <br /> made for <span className="red">Indian terrain</span>
          </h1>
          <p>EMI starting at</p>
          <h4 className="mb-5">INR 1500/Month</h4>
          <Button text="download brochure" />
        </div>
      </section> */}

      {/* <section id="p3">
        <img src={priceDoodle} alt="Price Emx" className="price" />
        <div className="container">
          <h1>
            Fat Tyre SUV of Electric
            <br /> Bike Segment
          </h1>
          <p>EMI starting at</p>
          <h4 className="mb-5">INR 2100/Month</h4>
          <Button text="download brochure" />
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default AllProducts;
