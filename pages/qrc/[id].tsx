import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header                       from '../components/header';
import Footer                       from '../components/footer';
import logger from '../../helpers/logger';
import { useRouter }                from 'next/router';
import axios                        from 'axios';
import { getQRC } from '../api/v1.0/db/dbUtils'

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
                if ( e.response.status === 404 ) {
                    setError( 'This QRC code does not exist.' );
                } else {
                    setError( e.message)
                }


            } );
        }
    },[ router.query.id ])

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

export async function getServerSideProps( context: object ) {
    logger.log( 'info', 'In server side props...' );
    //http://localhost:3000/qrc/4YuafITz
    console.log( context.query );
    const qrcId = context.query.id;
    const response = await getQRC( qrcId );
    if ( response.rowCount === 0 ) {
        console.log( 'it does not exist.');
        //context.res.end()
    } else {
        console.log( 'it exists not exist.');
        console.log( response.rows[ 0 ].qrc_configuration.data );
        context.res.writeHead(302, {Location: response.rows[ 0 ].qrc_configuration.data})
        context.res.end()
    }
    const data = {

    }

    return { props: data };
}

export default QrcId;