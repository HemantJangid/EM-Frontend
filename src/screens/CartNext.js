import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/newCart.css";
import dots from "../assets/img/design/dots.svg";
import confirmation from "../assets/img/design/confirmation.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import cycle from "../temp/cycle.png";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
import clsx from "clsx";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import "../assets/css/CartNext.css";
import { useFormik } from "formik";
import constants from "../constant/RequestUrls";
import { auth } from "../firebase";
import axios from "axios";
import { useHistory } from "react-router-dom";
import navUrls from "../constant/navUrls";
import { addUser } from "./../redux/actions/user";
import { addItem } from "./../redux/actions/cart";
import { addCode } from "./../redux/actions/discount";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
    color: "#fff",
  },
  active: {
    "& $line": {
      backgroundColor: "#68db85",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#68db85",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#68db85",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#68db85",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ShoppingCartIcon style={{ color: "#000" }} />,
    2: <PaymentIcon style={{ color: "#000" }} />,
    3: <PlaylistAddCheckIcon style={{ color: "#000" }} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ["1. Checkout", "2. Payment", "3. Confirmation"];
}

const CartNext = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState();
  const [addresses, setAddresses] = useState([]);
  const dispatch = useDispatch();
  const [order, setOrder] = useState({});
  const steps = getSteps();
  const domain = window.location.hostname;

  let comp;

  useEffect(() => {
    getAddress();
  }, []);

  function getAddress() {
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      axios
        .get(`${constants.base_url}${constants.address}`, { headers })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setAddresses(res.data.payload.address_list);
            setReRender(!reRender);
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    });
  }

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
        .then(async (res) => {
          alert(res.data.message);
          console.log(res);
          if (res.status === 200) {
            if (activeStep < 2)
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            window.scroll(0, 0);
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
          ? "rzp_test_eitK7NxhWmXGHL"
          : "rzp_live_rrQB0T2BkwBGLm", // DO NOT MESS WITH THIS!!!! TEST
      amount: order.total_amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Emotorad",
      description: "Checkout Payment",
      image:
        "https://res.cloudinary.com/emotorad/image/upload/v1603493352/website/emotorad-logo_duvmv8.png",

      handler: function (response) {
        console.log(response);
        // console.log(order.id);
        verifyPayment(response.razorpay_payment_id, order.id);
      },
      prefill: {
        name: order.user_address.full_name,
        contact: `+91-${order.user_address.phone_number}`,
      },
      notes: {
        address: `${order.user_address.address_line_1}, ${order.user_address.address_line_2} ${order.user_address.landmark} ${order.user_address.city} ${order.user_address.state}, ${order.user_address.pincode}`,
      },
      theme: {
        color: "#68db85",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  function createOrder() {
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      axios
        .post(
          `${constants.base_url}${constants.order}`,
          {
            user_address_uuid: selectedAddress,
            discount_code: discount.discount_code,
          },
          { headers }
        )
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            // history.push(navUrls.home);
            // history.push(navUrls.checkout, { order: res.data.payload });
            setOrder(res.data.payload);
            if (activeStep < 2)
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            window.scroll(0, 0);
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    });
  }

  const handleNext = async () => {
    console.log(activeStep);
    switch (activeStep) {
      case 0:
        console.log("making request for creating order");
        createOrder();
        break;

      case 1:
        console.log("trying to make payment");
        openRazorpayModal();
        break;

      case 2:
        console.log("finishing order");
        dispatch(addUser(""));
        dispatch(addItem([]));
        dispatch(
          addCode({
            discount: {
              discountApplied: false,
              discount_code: "NO-PROMO-CODE",
              percent: 0,
            },
          })
        );
        await logout();
        history.push(navUrls.home);
        break;
    }
  };

  const handleBack = () => {
    window.scroll(0, 0);
    if (activeStep !== -1)
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [reRender, setReRender] = useState(true);
  const { discount } = useSelector((state) => state.discountReducer);
  const { logout } = useAuth();
  const { items } = useSelector((state) => state.cartReducer);
  function totalAmount() {
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].product.selling_price * items[i].quantity;
    }
    return totalAmount;
  }

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone_number: "",
      pincode: "",
      address_line_1: "",
      address_line_2: "",
      landmark: "",
      city: "",
      state: "",
    },
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      auth.currentUser.getIdToken(true).then((idToken) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: idToken,
        };
        axios
          .post(`${constants.base_url}${constants.address}`, values, {
            headers,
          })
          .then((res) => {
            // console.log(res);
            alert(res.data.message);
            // history.push(navUrls.selectAddress);
            getAddress();
            setReRender(!reRender);
            formik.resetForm();
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      });
    },
  });

  console.log(selectedAddress);
  console.log(order);

  if (activeStep === 0) {
    comp = (
      <div className="row justify-content-center">
        <div className="col-lg-5 my-2">
          <div className="py-4 px-2 px-sm-4 bg-box">
            <h4 className="px-3">Detail Order</h4>
            <table className="table table-borderless mb-0" width="100%">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-right">
                    {discount.discountApplied && (
                      <strike>{totalAmount()} INR</strike>
                    )}{" "}
                    {totalAmount() * (1 - discount.percent / 100)} INR
                  </td>
                </tr>
                <tr>
                  <td>Shipping Cost</td>
                  <td className="text-right">Free</td>
                </tr>
                <tr>
                  <td>Promo Code</td>
                  <td className="text-right">{discount.discount_code}</td>
                </tr>
                <tr>
                  <td>Packaging</td>
                  <td className="text-right">Free</td>
                </tr>
                <tr>
                  <td>GST (18%)</td>
                  <td className="text-right">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-5 my-2">
          <div className="py-4 px-2 px-sm-4 bg-box">
            <h4>Shipping Address</h4>
            {addresses.length > 0 && <h6>Select an address</h6>}

            {addresses.map((address, index) => (
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id={`addressRadio${index}`}
                  name="user_address_uuid"
                  className="custom-control-input"
                  onClick={() => setSelectedAddress(address.uuid)}
                  value={address.uuid}
                />
                <label
                  className="custom-control-label"
                  for={`addressRadio${index}`}
                >
                  {`${address.address_line_1}, ${address.address_line_2}, ${address.landmark}, ${address.city}, ${address.state}, ${address.pincode}`}
                </label>
              </div>
            ))}
            <h6 className="my-4">Add a new address</h6>
            <form className="p-0" onSubmit={formik.handleSubmit}>
              <div className=" form-group">
                <label htmlFor="full_name">Full Name</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  name="full_name"
                  id="full_name"
                  //   placeholder="Full Name"
                  onChange={formik.handleChange}
                  value={formik.values.full_name}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  name="email"
                  id="email"
                //   placeholder="Email Address"
                  onChange={formik.email}
                  value={formik.values.email}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  //   placeholder="Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.phone_number}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address_line_1">Flat, House, Apartment</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  name="address_line_1"
                  id="address_line_1"
                  //   placeholder="Flat, House No, Building, Apartment"
                  onChange={formik.handleChange}
                  value={formik.values.address_line_1}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address_line_2">
                  Area, Colony, Street Sector, Village
                </label>
                <input
                  type="text"
                  name="address_line_2"
                  id="address_line_2"
                  //   placeholder="Area, Colony, Street Sector, Village"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.address_line_2}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  name="city"
                  id="city"
                  //   placeholder="City"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
              </div>
              {/* <div className="form-group">
                            <label htmlFor="name">State/Province</label>
                            <select
                                required
                                id="state"
                                name="state"
                                className="form-control"
                            >
                                <option value="Delhi">Delhi</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="China">China</option>
                            </select>
                        </div> */}
              <div className="form-row">
                <div className="col form-group">
                  <label htmlFor="state">State</label>
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="state"
                    id="state"
                    // placeholder="State"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                  />
                </div>
                {/* <div className="col form-group">
                                <label htmlFor="name">City</label>
                                <select
                                    required
                                    id="state"
                                    name="state"
                                    className="form-control"
                                >
                                    <option value="Delhi">New Delhi</option>
                                    <option value="Pakistan">Indore</option>
                                    <option value="China">China</option>
                                </select>
                            </div> */}
                <div className="col form-group">
                  <label htmlFor="pincode">Zip Code</label>
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="pincode"
                    id="pincode"
                    // placeholder="Zip Code"
                    onChange={formik.handleChange}
                    value={formik.values.pincode}
                  />
                </div>
              </div>
              {/* <div className="form-group">
                            <label for="courier">Choose Courier</label>
                            <select
                                className="form-control"
                                required
                                id="courier"
                                name="courier"
                            >
                                <option value="GATI">GATI</option>
                            </select>
                        </div> */}
              {/* <button
                        disabled={formLoading}
                        type="submit"
                        className="bg-transparent border-0 mx-auto w-100"
                    >
                        <Button text="Enquire" color="black" />
                    </button> */}
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  type="Submit"
                  defaultValue="Add Address"
                  name="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else if (activeStep === 1) {
    comp = (
      <div className="row justify-content-center">
        <div className="col-lg-5 my-2">
          <div className="py-4 px-2 px-sm-4 bg-box">
            <h4 className="px-2">Detail Order</h4>
            <table className="table table-borderless mb-0" width="100%">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-left">
                    {order.base_amount > order.total_amount && (
                      <strike>{order.base_amount / 100} INR</strike>
                    )}{" "}
                    {order.total_amount / 100} INR
                  </td>
                </tr>
                <tr>
                  <td>Shipping Cost</td>
                  <td className="text-left">Free</td>
                </tr>
                <tr>
                  <td>Promo Code</td>
                  <td className="text-left">{discount.discount_code}</td>
                </tr>
                <tr>
                  <td>Packaging</td>
                  <td className="text-left">Free</td>
                </tr>
                <tr>
                  <td>GST (18%)</td>
                  <td className="text-left">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="py-4 px-2 px-sm-4 bg-box mt-3">
            <h4 className="px-1">Payment Detail</h4>
            <p>
              Please make a payment according with the limit time specified,
              starting from now
            </p>
          </div> */}
        </div>
        <div className="col-lg-6 my-2">
          <div className="py-4 px-2 px-sm-4 bg-box">
            <h4>Shipping Address</h4>
            <table className="table table-borderless mb-0" width="100%">
              <tbody>
                <tr>
                  <td>Order Id</td>
                  <td className="text-left">
                    <div className="d-flex m-0">
                      <h5 className="mb-0 mr-4">{order.id}</h5>
                      {/* <h5 className="pri">COPY</h5> */}
                    </div>
                    <p>Always remember Order Id for easy tracking</p>
                  </td>
                </tr>
                {/* <tr>
                  <td>Purchase Date</td>
                  <td className="text-left">2019-11-07 14:01:48</td>
                </tr> */}
                <tr>
                  <td>Items</td>
                  <td className="text-left">
                    {order.order_items.map((item, index) => {
                      return (
                        <>
                          <h5>
                            {item.product.name} ({JSON.parse(item.color).name})
                          </h5>
                          <p>
                            {item.quantity} x INR {item.product.selling_price}
                          </p>
                        </>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td className="text-left">{order.user_address.full_name}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td className="text-left">
                    {order.user_address.phone_number}
                  </td>
                </tr>
                {/* <tr>
                  <td>Email</td>
                  <td className="text-left">{}</td>
                </tr> */}
                <tr>
                  <td>Shipping Address</td>
                  <td className="text-left">
                    {`${order.user_address.address_line_1}, ${order.user_address.address_line_2}, ${order.user_address.landmark} ${order.user_address.city} ${order.user_address.state}, ${order.user_address.pincode}`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else if (activeStep === 2) {
    comp = (
      <div className="row justify-content-center">
        <div className="col-lg-5 my-2">
          <div className="py-4 px-2 px-sm-4 bg-box">
            <img src={confirmation} alt="Confirmation" className="img-fluid" />
            <div className="text-center">
              <h4 className="my-3">Order Confirmed</h4>
              <p>
                Your order have been confirmed, please wait and track your order
              </p>
              <Button text="Track Order" />
              <p className="mt-3">
                Your assembly information will be sent to you on email
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 my-2">
          <div className="py-4 px-2 px-sm-4 bg-box">
            <table className="table table-borderless mb-0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <p>
                      <i class="far fa-clock mr-2"></i> 10 days delivery
                    </p>
                  </td>
                  {/* <td className="text-left">
                    <p>
                      <i class="fas fa-truck mr-2"></i>GATI Express
                    </p>
                  </td> */}
                </tr>
                {order.order_items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={JSON.parse(item.color).image}
                          alt="Cycle"
                          className="img-fluid"
                          width="180"
                        />
                      </td>
                      <td className="text-left">
                        <h5>
                          {item.product.name} ({JSON.parse(item.color).name})
                        </h5>
                        <p>
                          {item.quantity} x INR {item.product.selling_price}
                        </p>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>Subtotal</td>
                  <td className="text-left">
                    {order.base_amount > order.total_amount && (
                      <strike>{order.base_amount / 100} INR</strike>
                    )}{" "}
                    {order.total_amount / 100} INR
                  </td>
                </tr>
                <tr>
                  <td>Shipping Cost</td>
                  <td className="text-left">Free</td>
                </tr>
                <tr>
                  <td>Promo Code</td>
                  <td className="text-left">{discount.discount_code}</td>
                </tr>
                <tr>
                  <td>Packaging</td>
                  <td className="text-left">Free</td>
                </tr>
                <tr>
                  <td>GST (18%)</td>
                  <td className="text-left">Included</td>
                </tr>
                <tr
                  style={{
                    borderTop: "1px solid #fff",
                    borderBottom: "1px solid #fff",
                  }}
                >
                  <td>Grand Total</td>
                  <td className="text-left">
                    <h3>{order.total_amount / 100} INR</h3>
                  </td>
                </tr>
                <tr>
                  <td>Shipping Address</td>
                  <td className="text-left">
                    <h3>
                      <p>
                        {`${order.user_address.address_line_1}, ${order.user_address.address_line_2}, ${order.user_address.landmark} ${order.user_address.city} ${order.user_address.state}, ${order.user_address.pincode}`}
                      </p>
                    </h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section id="cart-next">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <div>
              <h3>Checkout</h3>
              <img src={dots} alt="Dots" className="dots" />
            </div>
            {auth.currentUser && (
              <button
                onClick={async () => {
                  await logout();
                  dispatch(addUser(""));
                  dispatch(addItem([]));
                  dispatch(
                    addCode({
                      discount: {
                        discountApplied: false,
                        discount_code: "NO-PROMO-CODE",
                        percent: 0,
                      },
                    })
                  );
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
            <div>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    {/* <h4>All steps completed</h4>
                                        <button onClick={handleReset}>Reset</button> */}
                  </div>
                ) : (
                  <div>
                    {comp}
                    <div className="d-flex justify-content-center flex-wrap">
                      {/* {activeStep !== 0 ? <button className="bg-transparent border-0 mx-2 my-3" onClick={handleBack}><Button text="Back" /></button> : <></>} */}
                      <button
                        className="bg-transparent border-0 mx-2 my-3"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? (
                          <Button text="Finish" />
                        ) : activeStep === 1 ? (
                          <Button text="Pay" />
                        ) : (
                          <Button text="Next" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartNext;
