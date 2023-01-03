import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header                       from '../components/header';
import Footer                       from '../components/footer';
import logger from '../../lib/logger';
import { useRouter }                from 'next/router';
import axios                        from 'axios';
import { createMetric, getQRC } from '../api/v1.0/db/dbUtils';
import { getBrowserMetaData, getGEOIP } from "../api/v1.0/utils";

const QrcId = () => {

    const router = useRouter();
    const [error, setError ] = React.useState<any | ''>(null);

    // leave as an example!
    /*useEffect( () => {
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
                if ( e.response.status === 404 ) {
                    setError( 'This QRC code does not exist.' );
                } else {
                    setError( e.message)
                }


            } );
        }
    },[ router.query.id ])*/

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header />

            {error &&
                <>
                <h3 className={"error"}>{error}</h3>
                </>
            }



            <Footer />
        </div>
    )
}

export async function getServerSideProps( context: any ) {
    logger.log( 'info', 'In server side props...' );
    //http://localhost:3000/qrc/4YuafITz
    console.log( context.query );
    const qrcId = context.query.id;
    const response = await getQRC( qrcId );
    if ( response.rowCount === 0 ) {
        console.log( 'it does not exist.');
        //context.res.end()
    } else {
        const { data }  = await getGEOIP( context.req );
        const geoIP = data;
        console.log( geoIP );
        console.log( '*********************************');
        const qrcConfig = response.rows[ 0 ].qrc_configuration;
        const ua = getBrowserMetaData( context.req );
        console.log( ua );
        console.log( '*********************************');
        // add id as a convenience
        qrcConfig.qrcId = qrcId;
        await createMetric( qrcConfig, geoIP, ua );
        context.res.writeHead(302, {Location: response.rows[ 0 ].qrc_configuration.data})
        context.res.end()
    }
    const data = {

    }

    return { props: data };
}

export default QrcId;