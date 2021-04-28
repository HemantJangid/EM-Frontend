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
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import '../assets/css/CartNext.css'


const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
        color: '#fff',
    },
    active: {
        '& $line': {
            backgroundColor: '#68db85',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#68db85',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#68db85',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundColor: '#68db85',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <ShoppingCartIcon style={{ color: '#000' }} />,
        2: <PaymentIcon style={{ color: '#000' }} />,
        3: <PlaylistAddCheckIcon style={{ color: '#000' }} />,
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
    return [
        "1. Checkout",
        "2. Payment",
        "3. Confirmation",
    ];
}

function CartNext() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    let comp;

    const handleNext = () => {
        window.scroll(0, 0)
        if (activeStep < 2)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        window.scroll(0, 0)
        if (activeStep !== -1)
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    if (activeStep === 0) {
        comp = <div className="row justify-content-center">
            <div className="col-lg-5 my-2">
                <div className="py-4 px-2 px-sm-4 bg-box">
                    <h4 className="px-3">Detail Order</h4>
                    <table className='table table-borderless mb-0' width="100%">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="text-right">74,990 INR</td>
                            </tr>
                            <tr>
                                <td>Shipping Cost</td>
                                <td className="text-right">Free</td>
                            </tr>
                            <tr>
                                <td>Promo Code</td>
                                <td className="text-right">EM-15</td>
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
                    <form className="p-0">
                        <div className=" form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                className="form-control"
                                required
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                className="form-control"
                                required
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                className="form-control"
                                required
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shipping">Shipping Address</label>
                            <input
                                className="form-control"
                                required
                                type="text"
                                name="shipping"
                                id="shipping"
                                placeholder="Shipping Address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input
                                className="form-control"
                                required
                                type="text"
                                name="country"
                                id="country"
                                placeholder="Country"
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="name">Country</label>
                            <select
                                required
                                id="country"
                                name="country"
                                className="form-control"
                            >
                                <option value="India">India</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="China">China</option>
                            </select>
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="state">State/Province</label>
                            <input
                                className="form-control"
                                required
                                type="text"
                                name="state"
                                id="state"
                                placeholder="State/Province"
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
                                <label htmlFor="city">City</label>
                                <input
                                    className="form-control"
                                    required
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="City"
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
                                <label htmlFor="zipcode">Zip Code</label>
                                <input
                                    className="form-control"
                                    required
                                    type="text"
                                    name="zipcode"
                                    id="zipcode"
                                    placeholder="Zip Code"
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
                    </form>
                </div>
            </div>
        </div>
    } else if (activeStep === 1) {
        comp = <div className="row justify-content-center">
            <div className="col-lg-5 my-2">
                <div className="py-4 px-2 px-sm-4 bg-box">
                    <h4 className="px-2">Detail Order</h4>
                    <table className='table table-borderless mb-0' width="100%">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="text-left">74,990 INR</td>
                            </tr>
                            <tr>
                                <td>Shipping Cost</td>
                                <td className="text-left">Free</td>
                            </tr>
                            <tr>
                                <td>Promo Code</td>
                                <td className="text-left">EM-15</td>
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
                <div className="py-4 px-2 px-sm-4 bg-box mt-3">
                    <h4 className="px-1">Payment Detail</h4>
                    <p>Please make a payment according with the limit time specified, starting from now</p>
                </div>
            </div>
            <div className="col-lg-6 my-2">
                <div className="py-4 px-2 px-sm-4 bg-box">
                    <h4>Shipping Address</h4>
                    <table className='table table-borderless mb-0' width="100%">
                        <tbody>
                            <tr>
                                <td>Order Number</td>
                                <td className="text-left">
                                    <div className="d-flex m-0">
                                        <h5 className="mb-0 mr-4">MTAWEB-3A86D4DB</h5>
                                        <h5 className="pri">COPY</h5>
                                    </div>
                                    <p>Always remember Order Number for easy tracking</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Purchase Date</td>
                                <td className="text-left">2019-11-07 14:01:48</td>
                            </tr>
                            <tr>
                                <td>Items</td>
                                <td className="text-left">
                                    <h5>T-rex (Yellow and Green)</h5>
                                    <p>1 x  INR 38,990</p>
                                    <h5>T-rex (Yellow and Green)</h5>
                                    <p>1 x  INR 38,990</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td className="text-left">John Doe</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td className="text-left">+91 9990099900</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className="text-left">JohnDoe@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Shipping Address</td>
                                <td className="text-left">40 Saket Vihar, Palasia, Pakistan, New York 452001</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    } else if (activeStep === 2) {
        comp = <div className="row justify-content-center">
            <div className="col-lg-5 my-2">
                <div className="py-4 px-2 px-sm-4 bg-box">
                    <img src={confirmation} alt="Confirmation" className="img-fluid" />
                    <div className="text-center">
                        <h4 className="my-3">Order Confirmed</h4>
                        <p>Your order have been confirmed, please wait and track your order</p>
                        <Button text="Track Order" />
                        <p className="mt-3">Your assembly information will be sent to you on email</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 my-2">
                <div className="py-4 px-2 px-sm-4 bg-box">
                    <table className='table table-borderless mb-0' width="100%">
                        <tbody>
                            <tr>
                                <td><p><i class="far fa-clock mr-2"></i> 10 days delivery</p></td>
                                <td className="text-left"><p><i class="fas fa-truck mr-2"></i>GATI Express</p></td>
                            </tr>
                            <tr>
                                <td><img src={cycle} alt="Cycle" className="img-fluid" /></td>
                                <td className="text-left">
                                    <h5>T-rex (Yellow and Green)</h5>
                                    <p>1 x  INR 38,990</p>
                                </td>
                            </tr>
                            <tr>
                                <td><img src={cycle} alt="Cycle" className="img-fluid" /></td>
                                <td className="text-left">
                                    <h5>T-rex (White and Red)</h5>
                                    <p>1 x  INR 38,990</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td className="text-left">74,990 INR</td>
                            </tr>
                            <tr>
                                <td>Shipping Cost</td>
                                <td className="text-left">Free</td>
                            </tr>
                            <tr>
                                <td>Promo Code</td>
                                <td className="text-left">EM-15</td>
                            </tr>
                            <tr>
                                <td>Packaging</td>
                                <td className="text-left">Free</td>
                            </tr>
                            <tr>
                                <td>GST (18%)</td>
                                <td className="text-left">Included</td>
                            </tr>
                            <tr style={{ borderTop: '1px solid #fff', borderBottom: '1px solid #fff' }}>
                                <td>Grand Total</td>
                                <td className="text-left"><h3>74,990 INR</h3></td>
                            </tr>
                            <tr>
                                <td>Shipping Address</td>
                                <td className="text-left"><h3><p>40 Saket Vihar, Palasia, Indore Madhya pradesh 452001</p></h3></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
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
                        <button className="bg-transparent border-0 my-3">
                            <Button text="Log out" />
                        </button>
                    </div>
                    <div className="cart-box px-4 py-4">
                        <div>
                            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
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
                                                {activeStep === steps.length - 1 ? <Button text="Finish" /> : <Button text="Next" />}
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
}

export default CartNext;