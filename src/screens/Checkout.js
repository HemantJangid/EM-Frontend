import constants from "../constant/RequestUrls";
import React from "react";
import { auth } from "./../firebase";
import axios from "axios";
import { useHistory } from "react-router-dom";
import navUrls from "./../constant/navUrls";
import "../assets/css/Checkout.css";

function Checkout(props) {
  const order = props.location.state.order;
  const address = `${order.user_address.address_line_1}, ${order.user_address.address_line_2} ${order.user_address.landmark} ${order.user_address.city} ${order.user_address.state}, ${order.user_address.pincode}`;
  const history = useHistory();
  const domain = window.location.hostname;

  const verifyPayment = (razorpay_id, order_id) => {
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      axios
        .post(
          `${constants.base_url}${constants.razorpay}`,
          { razorpay_id, order_id },
          { headers }
        )
        .then((res) => {
          alert(res.data.message);
          if (res.status === 200) {
            history.push(navUrls.home);
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    });
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const openRazorpayModal = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      //   key: "rzp_live_rrQB0T2BkwBGLm", // DO NOT MESS WITH THIS!!!! PROD
      key:
        domain === "localhost"
          ? "rzp_test_t4fMAIqMYPBJ38"
          : "rzp_live_rrQB0T2BkwBGLm", // DO NOT MESS WITH THIS!!!! TEST
      amount: order.total_amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Emotorad",
      description: "Checkout Payment",
      image:
        "https://res.cloudinary.com/emotorad/image/upload/v1603493352/website/emotorad-logo_duvmv8.png",

      handler: function (response) {
        // console.log(response);
        verifyPayment(response.razorpay_payment_id, order.id);
      },
      prefill: {
        name: order.user_address.full_name,
        contact: order.user_address.phone_number,
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#68db85",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  console.log(order);

  return (
    <>
      <section id="checkout">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-box">
                <h2 className="mb-4">
                  Check <span className="pri">Out</span>
                </h2>
                <p>Check your order details and click pay</p>
                <div className="form-group">
                  {order != undefined &&
                    order != null &&
                    order.order_items.map((item, index) => {
                      return (
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-block">
                            <h4 className="text-capitalize">
                              {item.product.name}
                            </h4>
                            <p>
                              {item.quantity} x {item.product.selling_price}
                            </p>
                          </div>
                          <h3>{Math.round(item.quantity * item.amount)} INR</h3>
                        </div>
                      );
                    })}
                  <hr />
                  <p className="m-0">{address}</p>
                  <p>{address.pincode}</p>
                  {/* add more p tags here */}
                  <input
                    onClick={openRazorpayModal}
                    className="form-control"
                    type="Submit"
                    defaultValue="Pay"
                    name="submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
