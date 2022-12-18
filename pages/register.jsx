import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header                         from './components/header';
import Footer                         from './components/footer';
import loginStyles                    from '../styles/login.module.css';

const Template = () => {

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header/>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-8 ">
                        <h3>Register</h3>
                        <form>
                            <div className={ 'row justify-content-center' }>
                                <div className="col-6 ">
                                    <div className="form-floating mb-4">
                                        <input type="text" id="firstName" className="form-control"
                                               placeholder="First name"/>
                                        <label className="form-label" htmlFor="firstName">First name</label>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-floating mb-4">
                                        <input type="text" id="lastName" className="form-control"
                                               placeholder="Last name"/>
                                        <label className="form-label" htmlFor="lastname">Last name</label>
                                    </div>
                                </div>
                            </div>

                            <div className={ 'row justify-content-center' }>
                                <div className="col-12">
                                    <div className="form-floating mb-4">
                                        <input type="password" id="password" className="form-control"
                                               placeholder="Password"/>
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>
                                </div>

                            </div>



                            <div className="row mb-4">
                                <div className="col-12 ">
                                    <button type="button" className="width_100 btn btn-primary btn-block mb-4">Register
                                    </button>
                                </div>
                            </div>

                            <div className="text-center">
                                <p>or register with:</p>
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