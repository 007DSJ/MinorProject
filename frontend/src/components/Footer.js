import React from 'react';

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-dark text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Connect With Us</span>
                </div>
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <a href="" className="me-4 text-reset"><i className="fa fa-facebook-f"></i></a>
                    <a href="" className="me-4 text-reset"><i className="fa fa-twitter"></i></a>
                    <a href="" className="me-4 text-reset"><i className="fa fa-google"></i></a>
                    <a href="" className="me-4 text-reset"><i className="fa fa-instagram"></i></a>
                    <a href="" className="me-4 text-reset"><i className="fa fa-linkedin"></i></a>
                    <a href="" className="me-4 text-reset"><i className="fa fa-github"></i></a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Pack&Move
                            </h6>
                            <p>
                                The only place you need for re-locating to your new place.
                                Home shifting, vehicle transportation, and custom clearing we do it all.
                                Supervised Packaging to ensure safety of the goods.

                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Locations</h6>
                            <p>Mumbai</p>
                            <p>Delhi</p>
                            <p>Varanasi</p>
                            <p>Chennai</p>
                            <p>Bengaluru</p>
                            <p>Bhopal</p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Locations</h6>
                            <p>Bhubaneshwar</p>
                            <p>Hyderabad</p>
                            <p>Jaipur</p>
                            <p>Patna</p>
                            <p>Ranchi</p>
                            <p>Kolkata</p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fa fa-home me-3"></i>KP-14,Campus-12,KIIT University,Patia</p>
                            <p><i className="fa fa-envelope me-3"></i>email@gmail.com</p>
                            <p><i className="fa fa-phone me-3"></i>+919876543211</p>
                            <p><i className="fa fa-phone me-3"></i>+911123456789</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4">
                © 2023 Copyright:

                <a class="text-reset fw-bold" >Pack&Move</a>

            </div>
        </footer>
    )
}

export default Footer;