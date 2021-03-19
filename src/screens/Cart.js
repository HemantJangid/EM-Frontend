import React from 'react'
import Header from '../components/Header'
import '../assets/css/Cart.css'
import dots from '../assets/img/design/dots.svg'
import Button from '../components/Button'
import Footer from '../components/Footer'
import camera from '../assets/img/design/camera.svg'

function Cart() {
    return (
        <div>
            <Header />
            <section id="cart">
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block bg-dark sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-5 mb-1 text-muted">
                                    <span><h2>Aditya Pathak</h2></span>
                                    <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                                        <span data-feather="plus-circle"></span>
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-2">
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
                                </ul>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 col-lg-7 px-md-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                                <div>
                                    <h4>Final touch up</h4>
                                    <h3>My Cart</h3>
                                    <img src={dots} alt="Dots" className="dots" />
                                </div>
                                <Button text="Log out" />
                            </div>
                            <div className="cart-box px-4 py-4">
                                <h3 className="pri">Shopping cart</h3>
                                <div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <td>Image</td>
                                                    <td>Product Name</td>
                                                    <td>Color</td>
                                                    <td>Quantity</td>
                                                    <td>Unit Price</td>
                                                    <td>Sub Total</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="#">
                                                            <img src={camera} className="img-fluid" alt="Age Of Wisdom Tan Graphic Tee" /></a>
                                                    </td>
                                                    <td>
                                                        <h4>EMX</h4>
                                                        <p>Model No. 10343</p>
                                                    </td>
                                                    <td>
                                                        <select name="">
                                                            <option value="" selected="selected">Red</option>
                                                            <option value="">Blue</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        + 1 -
                                                    </td>
                                                    <td>10000</td>
                                                    <td>$122.21</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">
                                                        <div className="d-flex align-items-center">
                                                            <p className="mr-3 mb-0 text-nowrap">Apply Promo Code</p>
                                                            <input className="form-control" type="text" name="promo" id="promo" />
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                    <td colSpan="1">Total</td>
                                                    <td><b>$163.47</b>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <center>
                                        <Button text="Proceed to checkout" />
                                    </center>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Cart
