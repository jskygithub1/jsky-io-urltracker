import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header                         from './components/header';
import Footer                         from './components/footer';
import loginStyles                    from '../styles/login.module.css';
import Link                           from 'next/link';

const Template = () => {

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header/>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h3>Sign in</h3>
                        <form className="py-2">
                            <div className="form-floating mb-4">
                                <input type="email" id="form2Example1" className="form-control"
                                       placeholder="Email address"/>
                                <label className="form-label" htmlFor="form2Example1">Email address</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="password" id="form2Example2" className="form-control"
                                       placeholder="Password"/>
                                <label className="form-label" htmlFor="form2Example2">Password</label>
                            </div>

                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31"
                                               checked/>
                                        <label className="form-check-label" htmlFor="form2Example31"> Remember
                                                                                                      me </label>
                                    </div>
                                </div>

                                <div className="col">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-12 ">
                                <button type="button" className="width_100 btn btn-primary btn-block mb-4">Sign in</button>
                                </div>
                            </div>

                            <div className="text-center">
                                <p>Not a member?
                                    <Link href="/register">
                                        <strong><a className="pointer py-2 nav-link">Register here</a></strong>
                                    </Link>
                                </p>
                                <p>or sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="bi bi-facebook"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="bi bi-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="bi bi-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="bi bi-github"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mb-5"></div>

            <Footer/>

        </div>
    );
};

export default Template;