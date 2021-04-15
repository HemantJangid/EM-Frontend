import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import "../assets/css/Products.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import constants from "../constant/RequestUrls";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import bg_image from "../assets/img/backgrounds/pemx-min.jpeg";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";

function AllProducts({ match }) {
  const [products, setProducts] = useState();
  const [reRender, setReRender] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${constants.base_url}${constants.all_vehicles}`)
      .then((res) => {
        if (res.status === 200) {
          let prod = res.data.payload.products;
          console.log(prod);
          prod.sort((a, b) =>
            a.display_position > b.display_position
              ? 1
              : b.display_position > a.display_position
              ? -1
              : 0
          );
          setProducts(prod);
          setReRender(!reRender);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Products | EMotorad | Best Electric Bicycle and Electric Bike
        </title>
        <meta
          name="description"
          content="The best in class eBikes designed for the Indian terrains is all set to amaze you Book your electric beast today and feel the power of Indian EV."
        />
      </Helmet>

      <Header />
      {loading ? (
        <Loader />
      ) : (
        products &&
        products.map((product) => (
          <section
            id="p1"
            style={{
              backgroundImage: `url(${product.bg_image})`,
            }}
          >
            <span className="price">INR {product.selling_price}/-</span>
            <div className="container products-container">
              <h1 className="product-title">{product.title}</h1>
              <p>EMI starting at</p>
              <h4 className="mb-5">INR {product.emi_per_month}/Month</h4>
              <Button text="download brochure" />
              <div className="mt-3"></div>
              <Link
                key={product.slug}
                to={{
                  pathname: `/product/${product.slug}`,
                  state: { product: product },
                }}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button text="Read more" color="white" />
              </Link>
            </div>
            <div class="products-overlay"></div>
          </section>
        ))
      )}

      <Footer />
    </div>
  );
}

export default AllProducts;
