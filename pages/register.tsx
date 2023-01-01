// @ts-ignore
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header                         from './components/header';
import Footer                         from './components/footer';
import loginStyles                    from '../styles/login.module.css';
import {showModal} from "../helpers/modal";
import axios from "axios";

const Register = () => {

    const [email, setEmail] = React.useState<any | ''>('');
    const [firstName, setFirstName] = React.useState<any | ''>('');
    const [lastName, setLastName] = React.useState<any | ''>('');
    const [password, setPassword] = React.useState<any | ''>('');

    const registerClick = async () => {

        // call register API
        const data = {
            email,
            firstName,
            lastName,
            password
        }
        try {
            const response = await axios.post('/api/v1.0/register', data);
            console.log(response);
        } catch ( e: any ) {
            showModal('title', 'message..' )
        }
    }

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
                                               onChange={(event) => setFirstName(event.target.value)}
                                               value={firstName}
                                               placeholder="First name"/>
                                        <label className="form-label" htmlFor="firstName">First name</label>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-floating mb-4">
                                        <input type="text" id="lastName" className="form-control"
                                               onChange={(event) => setLastName(event.target.value)}
                                               value={lastName}
                                               placeholder="Last name"/>
                                        <label className="form-label" htmlFor="lastname">Last name</label>
                                    </div>
                                </div>
                            </div>

                            <div className={ 'row justify-content-center' }>
                                <div className="col-12">
                                    <div className="form-floating mb-4">
                                        <input type="email" id="email" className="form-control"
                                               onChange={(event) => setEmail(event.target.value)}
                                               value={email}
                                               placeholder="eMail address"/>
                                        <label className="form-label" htmlFor="password">eMail</label>
                                    </div>
                                </div>
                            </div>

                            <div className={ 'row justify-content-center' }>
                                <div className="col-12">
                                    <div className="form-floating mb-4">
                                        <input type="password" id="password" className="form-control"
                                               onChange={(event) => setPassword(event.target.value)}
                                               value={password}
                                               placeholder="Password"/>
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-12 ">
                                    <button disabled={!(firstName && lastName && password) }
                                            onClick={() => registerClick()}
                                            type="button" className="width_100 btn btn-primary btn-block mb-4">Register
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

            <div
                className="modal fade"
                id="registerErrorUserExists"
                aria-labelledby="registerErrorUserExistsLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerErrorUserExistsLabel">
                                Oops!
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            The attempt to register has failed because this email address is already in use.
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;