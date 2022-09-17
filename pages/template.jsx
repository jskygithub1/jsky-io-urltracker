import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';

const Template = () => {


    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header />
            <section className="py-5 " id="x">
                <div className="container px-5 my-5">
                    <h1>Section 1</h1>
                </div>
            </section>

            <section className="py-5 border-bottom" id="y">
                <div className="container px-5 my-5">
                    <h1>Section 2</h1>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Template;