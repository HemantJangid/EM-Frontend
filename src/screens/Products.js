import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import "../assets/css/Products.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import constants from "../constant/RequestUrls";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";
import { addItem } from "./../redux/actions/cart";
import navUrls from "./../constant/navUrls";
import { Link, useHistory, useLocation } from "react-router-dom";
import { auth } from "../firebase";

function AllProducts() {
  const [products, setProducts] = useState();
  const [reRender, setReRender] = useState(true);
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

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
              <button
                className="bg-transparent border-0"
                onClick={() => {
                  if (auth.currentUser) {
                    auth.currentUser.getIdToken(true).then((idToken) => {
                      // console.log(idToken);
                      const headers = {
                        "Content-Type": "application/json",
                        Authorization: idToken,
                      };
                      axios
                        .post(
                          `${constants.base_url}${constants.cart}/${product.uuid}`,
                          {
                            quantity: 1,
                            color: JSON.stringify(product.product_colors[0]),
                          },
                          { headers }
                        )
                        .then((res) => {
                          // console.log(res);
                          history.push(navUrls.cart);
                        })
                        .catch((err) => {
                          console.log(err.response);
                          alert(err.response.data.message);
                        });
                    });
                  } else {
                    let alreadyInCart = false;
                    for (let i = 0; i < items.length; i++) {
                      if (items[i].product.uuid === product.uuid) {
                        alreadyInCart = true;
                        items[i].quantity += 1;
                        dispatch(addItem([...items]));
                      }
                    }

                    if (!alreadyInCart) {
                      dispatch(
                        addItem([
                          ...items,
                          {
                            quantity: 1,
                            product: product,
                            color: JSON.stringify(product.product_colors[0]),
                          },
                        ])
                      );
                    }
                    history.push(navUrls.cart);
                  }
                }}
              >
                <Button text="Buy Now" />
              </button>
              <button
                className="bg-transparent border-0"
                onClick={() => {
                  let alreadyInCart = false;
                  for (let i = 0; i < items.length; i++) {
                    if (items[i].product.uuid === product.uuid) {
                      alreadyInCart = true;
                      items[i].quantity += 1;
                      dispatch(addItem([...items]));
                    }
                  }

                  if (!alreadyInCart) {
                    dispatch(
                      addItem([
                        ...items,
                        {
                          quantity: 1,
                          product: product,
                        },
                      ])
                    );
                  }
                  history.push(navUrls.cart);
                }}
              >
                <Button text="Buy Now" color="white" />
              </button>
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
