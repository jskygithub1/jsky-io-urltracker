import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type {NextPage} from 'next'
import Head from 'next/head'



const Header = () => {



    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">
                                Dynamic Link and QRC Generation/Tracking
                            </h1>
                            <p className="lead text-white-50 mb-4">
                                Reach your target audience and track where they came from using our state-of-the-art Link and QRC generator.
                            </p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;