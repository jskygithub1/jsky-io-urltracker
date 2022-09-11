import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type {NextPage} from 'next'
import Head from 'next/head'


const Home: NextPage = () => {


    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);


    // @ts-ignore
    return (
        <div >
            <div className="col-lg-8 mx-auto p-3 py-md-5">
                <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                    <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <span className="fs-4">JSKY.IO</span>
                    </a>
                </header>

                <main>
                    <h1>The URL Shortener with QRC generation</h1>
                    <p className="fs-5 col-md-8">
                        The URL Shortener with QRC generation and extended statistics.
                    </p>

                    <div className="b-example-divider"></div>


                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <i style={{color: "red"}} className="bi bi-link"></i>
                            </div>
                            <div>
                                <h2>URL Shortener</h2>
                                <p>Turn your long URLs into custom dynamic QRC's or simple short URLs.</p>
                                <a href="#" className="btn btn-primary">
                                    Primary button
                                </a>
                            </div>
                        </div>

                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <i style={{color: "red"}} className="bi bi-bar-chart"></i>
                            </div>
                            <div>
                                <h2>Track usage</h2>
                                <p>Track their usage (including GEOIP) with your own comprehensive Dashboard</p>
                                <a href="#" className="btn btn-primary">
                                    Primary button
                                </a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <i style={{color: "red"}} className="bi bi-tools"></i>
                            </div>
                            <div>
                                <h2>Manage your campaigns</h2>
                                <p>Get a deeper understanding of your Marketing campaigns with our comprehensive analysis</p>
                                <a href="#" className="btn btn-primary">
                                    Primary button
                                </a>
                            </div>
                        </div>
                    </div>




                </main>

                <footer className={"pt-5 my-5 text-muted border-top"}>
                    jsky.io &copy; {new Date().getUTCFullYear() }
                    </footer>

            </div>

        </div>
    )
}

export default Home
