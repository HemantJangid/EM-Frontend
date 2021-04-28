import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/newCart.css";
import dots from "../assets/img/design/dots.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./../redux/actions/user";
import { addItem } from "./../redux/actions/cart";
import { addCode } from "./../redux/actions/discount";
import { auth } from "./../firebase";
import constants from "../constant/RequestUrls";
import axios from "axios";
import navUrls from "./../constant/navUrls";
import { Helmet } from "react-helmet";
import cycle from "../temp/cycle.png";
import { cleanData } from "jquery";

const NewCart = () => {
  const [reRender, setReRender] = useState(true);
  const { discount } = useSelector((state) => state.discountReducer);
  const [promocodeApplied, setPromocodeApplied] = useState(
    discount.discountApplied
  );
  const [discountPercent, setDiscountPercent] = useState(discount.percent);
  const [promocode, setPromocode] = useState(
    discount.discount_code === "NO-PROMO-CODE" ? "" : discount.discount_code
  );
  const [selectedColor, setSelectedColor] = useState([]);
  const { logout } = useAuth();
  const history = useHistory();
  const { items } = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // console.log("items: ", items);
  console.log(discount);

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    // console.log("getting cart items");
    auth.currentUser &&
      auth.currentUser.getIdToken(true).then((idToken) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: idToken,
        };
        axios
          .get(`${constants.base_url}${constants.cart}`, { headers })
          .then((res) => {
            // console.log(res);
            if (res.status === 200) {
              // setItems(res.data.payload.products);
              dispatch(addItem(res.data.payload.products));
              setReRender(!reRender);
            }
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      });
  }

  function addItemToCart(i) {
    changeQuantity(i, "increase");
    dispatch(addItem(items));
    auth.currentUser &&
      auth.currentUser.getIdToken(true).then((idToken) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: idToken,
        };
        axios
          .post(
            `${constants.base_url}${constants.cart}/${items[i].product.uuid}`,
            { quantity: items[i].quantity, color: items[i].color },
            { headers }
          )
          .then((res) => {
            // console.log(res)
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      });
  }

  function removeItemFromCart(i) {
    let item = items[i];
    changeQuantity(i, "decrease");
    dispatch(addItem(items));

    auth.currentUser &&
      auth.currentUser.getIdToken(true).then((idToken) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: idToken,
        };
        axios
          .delete(
            `${constants.base_url}${constants.cart}/${item.product.uuid}`,
            { headers }
          )
          .then((res) => {
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
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
    // auth.currentUser.getIdToken(true).then((idToken) => {
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: idToken,
    //   };
    //   axios
    //     .post(
    //       `${constants.base_url}${constants.order}`,
    //       { user_address_uuid: "e3eeef77-c213-4748-a5a9-af6ba2b81373" },
    //       {
    //         headers,
    //       }
    //     )
    //     .then((res) => {
    //       history.push("/");
    //     })
    //     .catch((err) => console.log(err));
    // });
    // history.push(navUrls.selectAddress);
    if (auth.currentUser) {
      history.push({
        pathname: navUrls.selectAddress,
      });
    } else {
      history.push(navUrls.signIn);
    }
  }

  function changeColor(e, pi) {
    // console.log(e.target.value, items[pi].color);
    items[pi].color = e.target.value;
    auth.currentUser &&
      auth.currentUser.getIdToken(true).then((idToken) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: idToken,
        };
        axios
          .post(
            `${constants.base_url}${constants.cart}/${items[pi].product.uuid}`,
            { quantity: items[pi].quantity, color: items[pi].color },
            { headers }
          )
          .then((res) => {
            // console.log(res)
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      });
    setReRender(!reRender);
  }

  function applyPromocode() {
    // console.log("discount_code: ", promocode);
    axios
      .post(`${constants.base_url}${constants.promocode}`, {
        discount_code: promocode,
      })
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert(res.data.message);
          setPromocodeApplied(true);
          setDiscountPercent(res.data.payload.discount_percent);
          dispatch(
            addCode({
              discount: {
                discountApplied: true,
                discount_code: promocode,
                percent: res.data.payload.discount_percent,
              },
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  }

  //   console.log(promocode);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart | EMotorad | Best Electric Bicycle and Electric Bike</title>
      </Helmet>
      <Header />
      <section id="cart">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <div>
              <h3>My Cart</h3>
              <img src={dots} alt="Dots" className="dots" />
            </div>
            {auth.currentUser && (
              <button
                onClick={async () => {
                  await logout();
                  dispatch(addUser(""));
                  dispatch(addItem([]));
                  alert("You have been successfully logged out");
                  history.push(navUrls.home);
                }}
                className="bg-transparent border-0 my-3"
              >
                <Button text="Log out" />
              </button>
            )}
          </div>
          <div className="cart-box px-4 py-4">
            <h3 className="pri pb-4">Shopping cart</h3>
            {items.map((item, pi) => {
              return (
                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 flex-wrap mb-4">
                  <div className="d-inline-flex align-items-center flex-wrap">
                    <div className="p-4 mx-sm-auto">
                      <img
                        src={JSON.parse(item.color).image}
                        className="img-fluid cart-img"
                      />
                    </div>
                    <div className="d-block my-3">
                      <h3>{item.product.name}</h3>
                      {/* <h5>
                        <strike>38,990 INR</strike>
                      </h5> */}
                      <h4>{item.product.selling_price} INR</h4>
                      {/* <h6 className="mb-0">Yellow and Green</h6> */}
                      {/* <p className="mb-0">
                        Delivery date to be confirmed by Email
                      </p> */}
                    </div>
                  </div>

                  <div className="d-block right-area">
                    <label htmlFor="colorSelection">Select Color</label>
                    <select
                      className="mb-4 form-control"
                      required
                      id="color"
                      onChange={(e) => changeColor(e, pi)}
                      name="color"
                      style={{ textTransform: "capitalize" }}
                    >
                      {item.product.product_colors.map((color, ci) => {
                        return (
                          <option
                            value={JSON.stringify(color)}
                            key={ci}
                            selected={
                              JSON.parse(item.color).name === color.name
                            }
                          >
                            {color.name}
                          </option>
                        );
                      })}
                    </select>
                    <div className="d-inline-flex align-items-center justify-content-between">
                      <div className="d-inline-flex align-items-center">
                        <button
                          className="mr-2 plusminus"
                          onClick={() => {
                            // console.log("decrease quantity");
                            removeItemFromCart(pi);
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
                            addItemToCart(pi);
                            setReRender(!reRender);
                            // console.log(items);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <h5 className="mx-2 mb-0">
                        {item.quantity * item.product.selling_price} INR
                      </h5>
                      {/* <div className="del-btn ml-2">
                        <i class="far fa-trash-alt"></i>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
            {items.length != 0 && (
              <>
                <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                  <div className="d-inline-flex align-items-center promo-code flex-wrap flex-lg-nowrap gutter-1">
                    <h5 className="mr-3 mb-0 text-nowrap">Promo Code</h5>
                    <input
                      disabled={promocodeApplied}
                      className="form-control mr-3 my-2"
                      type="text"
                      name="promo"
                      id="promo"
                      value={promocode}
                      onChange={(e) => setPromocode(e.target.value)}
                      style={{ minWidth: "250px" }}
                    />
                    <input
                      disabled={promocodeApplied}
                      type="submit"
                      value="Apply"
                      name="submit"
                      className="form-control"
                      width="200"
                      onClick={() => applyPromocode()}
                    />
                  </div>
                  <div className="d-inline-flex align-items-center my-4 w-100 justify-content-between justify-content-md-end">
                    <h5 className="mr-5 mr-lg-5 mr-md-3">Subtotal</h5>
                    <div className="d-block">
                      {promocodeApplied && (
                        <h5>
                          <strike>{totalAmount()} INR</strike>
                        </h5>
                      )}
                      {console.log(discount.percent, discountPercent)}
                      <h4>{totalAmount() * (1 - discountPercent / 100)} INR</h4>
                    </div>
                  </div>
                </div>

                <center>
                  <button
                    className="bg-transparent border-0 mt-3 mb-3"
                    onClick={() => {
                      if (items.length === 0) {
                        alert("You need to add items to cart first.");
                      } else {
                        handleCheckout();
                      }
                    }}
                  >
                    <Button text="Proceed to checkout" />
                  </button>
                </center>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewCart;
