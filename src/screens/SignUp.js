import React from 'react'

import '../assets/css/Sign.css'

function SignUp() {
    return (
        <div>
            <section id="signup">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="form-box">
                                <form action="">
                                    <h2 className="mb-4">Sign <span className="pri">Up</span></h2>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col">
                                                <input className="form-control" type="text" name="fname" id="fname" placeholder="First Name" />
                                            </div>
                                            <div className="col">
                                                <input className="form-control" type="text" name="fname" id="fname" placeholder="First Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="phone" id="phone" placeholder="Phone Number" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" id="password" placeholder="Password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="Submit" value="Create Account" name="submit" />
                                    </div>
                                    <hr />
                                    <p>Already have an account? <a href="">Sign In</a></p>
                                    <hr />
                                    <p>Or Sign up with <a href="">Facebook</a> or <a href="">Google</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp
