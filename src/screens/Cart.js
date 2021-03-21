import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/Cart.css";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import camera from "../assets/img/design/camera.svg";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./../redux/actions/cart";
import { auth } from "./../firebase";
import constants from "../constant/RequestUrls";
import axios from "axios";

function Cart() {
  const [reRender, setReRender] = useState(true);
  const { logout } = useAuth();
  const history = useHistory();
  // const [items, setItems] = useState([]);
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      axios
        .get(`${constants.base_url}${constants.cart}`, { headers })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // setItems(res.data.payload.products);
            dispatch(addItem(res.data.payload.products));
            setReRender(!reRender);
          }
        })
        .catch((err) => console.log(err));
    });
  }

  function addItemToCart(i) {
    changeQuantity(i, "increase");
    dispatch(addItem(items));
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      items.length > 0 &&
        axios
          .post(
            `${constants.base_url}${constants.cart}/${items[i].product.uuid}`,
            { quantity: 1 },
            { headers }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    });
  }

  function removeItemFromCart(i) {
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      items.length > 0 &&
        axios
          .delete(
            `${constants.base_url}${constants.cart}/${items[i].product.uuid}`,
            { headers }
          )
          .then((res) => {
            {
              changeQuantity(i, "decrease");
              dispatch(addItem(items));
            }
          })
          .catch((err) => console.log(err));
    });
  }

  function totalAmount() {
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].product.selling_price * items[i].quantity;
    }
    return totalAmount;
  }

  function changeQuantity(i, change) {
    if (change === "increase") items[i].quantity += 1;
    else if (change === "decrease") {
      if (items[i].quantity === 1) items.splice(i, 1);
      else items[i].quantity -= 1;
    }
  }

  function handleCheckout() {
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      axios
        .post(
          `${constants.base_url}${constants.order}`,
          { user_address_uuid: "e3eeef77-c213-4748-a5a9-af6ba2b81373" },
          {
            headers,
          }
        )
        .then((res) => {
          history.push("/");
        })
        .catch((err) => console.log(err));
    });
  }

  return (
    <div>
      <Header />
      <section id="cart">
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-3 d-md-block bg-dark sidebar collapse"
            >
              <div className="sidebar-sticky pt-3">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-5 mb-1 text-muted">
                  <span>
                    <h2>Aditya Pathak</h2>
                  </span>
                  <a
                    className="d-flex align-items-center text-muted"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6>
                {/* <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      <h4>My Past Orders</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      <h4>Current Orders</h4>
                    </a>
                  </li>
                </ul> */}
              </div>
            </nav>

            <main role="main" className="col-md-9 col-lg-7 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <div>
                  <h4>Final touch up</h4>
                  <h3>My Cart</h3>
                  <img src={dots} alt="Dots" className="dots" />
                </div>
                <button
                  onClick={async () => {
                    await logout();
                    history.push("/");
                  }}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <Button text="Log out" />
                </button>
              </div>
              <div className="cart-box px-4 py-4">
                <h3 className="pri">Shopping cart</h3>
                <div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>Color</td>
                          <td>Quantity</td>
                          <td>Unit Price</td>
                          <td>Sub Total</td>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => {
                          console.log(item);
                          return (
                            <tr>
                              <td>
                                <a href="#">
                                  <img
                                    src={`${item.product.image_url}`}
                                    className="img-fluid"
                                    alt={item.product.name}
                                  />
                                </a>
                              </td>
                              <td>
                                <h4>{item.product.name}</h4>
                                <p>Model No. {item.product.model_number}</p>
                              </td>
                              <td>
                                <div className="d-block">
                                  <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                  </label>
                                  <br />
                                  <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider green"></span>
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex alig-items-center">
                                  <button
                                    className="mr-2 plusminus"
                                    onClick={() => {
                                      // console.log("decrease quantity");
                                      removeItemFromCart(index);
                                      setReRender(!reRender);
                                    }}
                                  >
                                    -
                                  </button>
                                  <p className="mb-0">{item.quantity}</p>
                                  <button
                                    className="ml-2 plusminus"
                                    onClick={() => {
                                      // console.log("increase quantity");
                                      addItemToCart(index);
                                      setReRender(!reRender);
                                      // console.log(items);
                                    }}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>{item.product.selling_price}</td>
                              <td>
                                {item.product.selling_price * item.quantity}
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td colSpan="3">
                            {/* <div className="d-flex align-items-center promo-code">
                              <p className="mr-3 mb-0 text-nowrap">
                                Apply Promo Code
                              </p>
                              <input
                                className="form-control"
                                type="text"
                                name="promo"
                                id="promo"
                              />
                            </div> */}
                          </td>
                          <td></td>
                          <td colSpan="1">Total</td>
                          <td>
                            <b>{totalAmount()}</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <center>
                    <button
                      disabled={!(items.length > 0)}
                      onClick={() => handleCheckout()}
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <Button text="Proceed to checkout" />
                    </button>
                  </center>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
