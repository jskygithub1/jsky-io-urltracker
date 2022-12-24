// @ts-ignore
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header                         from './components/header';
import Footer                         from './components/footer';
import loginStyles                    from '../styles/login.module.css';
import Link                           from 'next/link';
import axios                          from 'axios';

const Login = () => {

    const [email, setEmail] = React.useState<any | ''>('');
    const [password, setPassword] = React.useState<any | ''>('');
    const [rememberMe, setRememberMe] = React.useState<Boolean | false>(false);
    const [statusMessage, setStatusMessage] = React.useState<String | ''>('');

    const signIn = async () => {

        const data = {
            email,
            password
        }

        try {
            const response = await axios.post ( '/api/v1.0/signin', data );
            setStatusMessage( '' );
        } catch ( e ) {
            console.log( e );
            setStatusMessage( 'This userid/password combination does not exist.' );
        }

    };

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
                                <input onChange={(event) => setEmail(event.target.value)}
                                       type="email" id="email" className="form-control"
                                       placeholder="Email address"
                                       value={email}
                                />
                                <label className="form-label" htmlFor="email">Email address</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input onChange={(event) => setPassword(event.target.value)}
                                       type="password" id="password" className="form-control"
                                       placeholder="Password"
                                       value={password}
                                />
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>

                            {statusMessage !== '' &&
                                <>
                                    <div className="row mb-4">
                                        <div className="col-12 ">
                                            <div className="error">{statusMessage}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">

                                    <div className="form-check">
                                        <input onChange={(event) => setRememberMe(!rememberMe)}
                                               className="form-check-input" type="checkbox" value="" id="rememberme"
                                               checked={rememberMe}/>
                                        <label className="form-check-label" htmlFor="rememberme"> Remember
                                                                                                      me </label>
                                    </div>
                                </div>

                                <div className="col">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-12 ">
                                <button onClick={() => signIn ()} type="button" className="width_100 btn btn-primary btn-block mb-4">Sign in</button>
                                </div>
                            </div>

                            <div className="text-center">
                                <p>Not a member?
                                    <Link className="pointer py-2 nav-link" href="/register">
                                        <strong><span >Register here</span></strong>
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

export default Login;