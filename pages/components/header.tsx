import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Header = () => {


    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Head>
                <title>JSKY.IO</title>
                <meta name="description" content="Generated by create next app"/>

            </Head>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="#!">JSKY.IO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/login">
                                    <span >Login</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;