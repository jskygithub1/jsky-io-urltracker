import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type {NextPage} from 'next'
import Head from 'next/head'
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';
import Pricing from './components/pricing';
import ProductInfo from './components/productInfo';
import SubHeader from './components/subHeader';
import Testimonials from './components/testimonials';
import TryIt from './components/tryIt';

const Home: NextPage = () => {

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div >
            <Header />

            <SubHeader />

            <ProductInfo />

            <TryIt />

            <Pricing />

            <Testimonials />

            <Contact />

            <Footer />
        </div>
    )
}

export default Home
