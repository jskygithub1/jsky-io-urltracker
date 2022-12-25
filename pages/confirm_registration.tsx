import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.min.css";
import Header                       from './components/header';
import Footer                       from './components/footer';

import axios from "axios";

const ConfirmRegistration = () => {

    const router = useRouter();
    const [status, setStatus ] = React.useState<any | ''>('');

    useEffect( () => {
        if (Object.keys(router.query).length > 0) {
            console.log( router.query );

            const callRegCode = async () => {
                const response = await axios.post( '/api/v1.0/regcode', {  regcode: router.query.code } );
                setStatus( 'Thank you! Your email has been been confirmed,  Re-directing to your Dashboard...')
            }

            callRegCode ().catch( e => {
                console.log( e );
            } );
        }
    },[ router.query ])

    // @ts-ignore
    return (
        <div>
            <Header />
            <section className="py-5 " id="x">
                <div className="container px-5 my-5">
                    {status}
                </div>
            </section>


            <Footer />
        </div>
    )
}


export default ConfirmRegistration;