import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header                       from '../components/header';
import Footer                       from '../components/footer';
import { useRouter }                from 'next/router';
import axios                        from 'axios';

const QrcId = () => {

    const router = useRouter();
    const [error, setError ] = React.useState<any | ''>(null);

    useEffect( () => {
        if (Object.keys(router.query).length > 0) {

            const callGetQRC = async () => {
                const response : any = await axios.post( '/api/v1.0/getqrc', {  qrcId: router.query.id } );
                // all good update logs and redirect
                // call redirect api!
                const qrcConfig = response.data.response.rows[ 0 ].qrc_configuration;
                // add id as a convenience
                qrcConfig.qrcId = router.query.id;
                await axios.post( '/api/v1.0/metrics', {  qrcConfig: qrcConfig } );
                window.location.replace(qrcConfig.data);
            }

            callGetQRC ().catch( e => {
                setError( e.message)

            } );
        }
    },[ router.query.id ])

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header />
            sdfsdfsdf
            {error &&
                <>
                <h1>{error}</h1>
                </>
            }



            <Footer />
        </div>
    )
}

export default QrcId;