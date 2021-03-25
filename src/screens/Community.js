import React from 'react'
import '../assets/css/Community.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Community() {
    return (
        <div>
            <Header />
            <section id="comm-hero" className="d-flex justify-content-center flex-column">
                <div className="container h-100">
                    <div className=" flex-column h-100">
                        <h2 className="pri">Join the community</h2>
                        <p>Welcome to the world of EM, The EM-Community is a place where many like you come together to become a team of extra-ordinary one’s!</p>
                        <p>Here we all work together to find our impact ambition, connecting with each other for support and shared purpose, and enable one another to accelerate the impact.
So, if you are interested in expanding your professional network, gaining more knowledge about impact topics and the Sustainable Development Goals (SDGs), and further develop your businesses, join us to reach to a bigger goal with like-minded people.</p>
                        <p>Join the community and get invites and updates on all the EM events across the country. Enjoy exclusive discounts on accessories, extended warranties, and get a chance to feature on all our social pages.</p>
                    </div>
                </div>
            </section>

            <section id="community-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="form-box">
                                <form>
                                    <h2 className="mb-4">
                                        Fill the <span className="pri">Form</span>
                                    </h2>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            placeholder="First Name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="lname"
                                            id="lname"
                                            placeholder="Last Name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="oname"
                                            id="oname"
                                            placeholder="Organisation's Name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone Number"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder="Address"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            placeholder="Country"
                                            className="form-control"
                                        />
                                    </div><div className="form-group">
                                        <input
                                            type="text"
                                            name="cycleid"
                                            id="cycleid"
                                            placeholder="Cycle ID"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="Submit"
                                            defaultValue="Submit"
                                            name="submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Community
