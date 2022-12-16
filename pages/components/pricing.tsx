/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Pricing = () => {
    return (
        <section className="bg-light py-5 border-bottom">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Pay as you grow</h2>
                    <p className="lead mb-0">With our no hassle pricing plans</p>
                </div>
                <div className="row gx-5 justify-content-center">

                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold text-muted">Free</div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$0</span>
                                    <span className="text-muted">/ mo.</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        URL Shortner
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        QRC Generation (All types)
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Custom size and colors
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        API Access - Bulk generation of Links/QRC's
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dashboard.  Summary level GEOIP
                                    </li>

                                </ul>
                                <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    Pro
                                </div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$4.99</span>
                                    <span className="text-muted">/ mo.</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        URL Shortner
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        QRC Generation (All types)
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Custom size and colors
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        API Access - Bulk generation of Links/QRC's
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dashboard.  Track your activity with interactive charting
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Detailed level GEO location
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Custom urls <i className="bi bi-arrow-right"></i> /pay_me
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Customizable content.  Add meta data to your link/QRC
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Add your logo to your QRC
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Custom text on your QRC -- with border, colours of your choosing
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Use an image instead of text for a bigger impact.  ex: Your picture that goes to your LinkedIn profile.
                                    </li>

                                </ul>
                                <div className="d-grid"><a className="btn btn-primary" href="#!">Choose plan</a></div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: 'none'}} className="col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold text-muted">Enterprise</div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$49</span>
                                    <span className="text-muted">/ mo.</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Unlimited users</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        5GB storage
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited public projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Community access
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited private projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dedicated support
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Unlimited</strong>
                                        linked domains
                                    </li>
                                    <li className="text-muted">
                                        <i className="bi bi-check text-primary"></i>
                                        Monthly status reports
                                    </li>
                                </ul>
                                <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;