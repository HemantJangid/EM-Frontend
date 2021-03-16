import React from 'react'

import dots from '../assets/img/design/dots.svg'
import Button from '../components/Button'
import rect from '../assets/img/backgrounds/rect.jpg'
import man from '../assets/img/backgrounds/man.jpg'

import '../assets/css/Contact.css'


function Contact() {
    return (
        <div>
            <section id="hero">
                <div className="container">
                    <h3 className="pri">Reach us out at</h3>
                    <h1>info@emotorad.com</h1>
                    <img src={dots} className="dots mb-4" alt="Dots" />
                    <Button text="View products" />
                </div>
            </section>

            <section id="form">
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6 form-img">
                    </div>
                    <div className="col-lg-6">
                        <form action="" >
                            <h3 className="mb-5">Ask any query!</h3>
                            <div className="form-row form-group">
                                <div className="col-lg-6">
                                    <input className="mb-4" type="text" name="fname" id="fname" placeholder="First Name" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="mb-4" type="text" name="lname" id="lname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input className="mb-4" type="text" name="address" id="address" placeholder="Address" />
                            </div>
                            <div className="form-row form-group">
                                <div className="col-lg-6">
                                    <input className="mb-4" type="email" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="mb-4" type="text" name="number" id="number" placeholder="Contact Number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="query" id="query" rows="7" placeholder="Query" ></textarea>
                            </div>
                            <Button text="Enquire" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
