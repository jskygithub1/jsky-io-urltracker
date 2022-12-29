import React from "react";
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const ProductInfo = () => {
    return (
        <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">

                { /* Links/QrcId */}
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi  bi-link-45deg"></i>
                        </div>
                        <div className="margin-left-12 feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-qr-code"></i>
                        </div>
                        <h2 className="h4 fw-bolder">Link and QRC Generation</h2>
                        <p>
                            Our URL shortener and QRC generation technology will seamlessly link to your website, and capture GEOIP and device info.
                        </p>
                        <p>And...</p>
                        <p>
                            Create QRC's for Calendar events, Contacts, LinkedIn profiles, Send eMail, Whatsapp, or SMS messages, or simplify WIFI connections...
                        </p>
                        <p>
                            Use an image on your QRC for an even bigger impact -- ex: Your picture that takes your audience to your LiknkedIn profile...
                        </p>

                        <Link className="nav-link" href="/linkandqrc">
                            <span className="text-decoration-none">
                                More
                                <i className="bi bi-arrow-right"></i>
                            </span>
                        </Link>
                    </div>

                    { /* Manage campaigns */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                        <h2 className="h4 fw-bolder">Manage Campaigns</h2>
                        <p>
                            Which campaigns are effective?
                        </p>
                        <p>
                            Your personal dashboard with interactive charting gets you to the answers you need -- when you need them.
                        </p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    { /* Other */}
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-geo-alt-fill"></i></div>
                        <h2 className="h4 fw-bolder">GEOIP and Device Tracking</h2>
                        <p>
                            Track geographic usage with our GEOIP capabilities and get details on which devices, OS's, Browsers your users and prospects are using.
                        </p>
                        <p>
                            L.A, New York, London, Tokyo...  You'll know when and where your links and QRCs are used.
                        </p>
                        <p>
                            With our best-in-class tracking, find out what works -- and what doesn't.
                        </p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfo;