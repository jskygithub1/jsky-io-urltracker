


const Xredirector = () => {

    return (
        <div>
            This will not be used
        </div>
    );
}

/**
 * If we have a response object, redirect to the target url
 *
 * @param ctx
 */
Xredirector.getInitialProps = async (ctx: any) => {

    const { getBrowserMetaData, getGEOIP }  = require( './api/v1.0/utils')
    //import {getBrowserMetaData, getGEOIP} from './api/v1.0/utils';
    const {req} = ctx;

    if (ctx.res) {
        // Get browser metadata
        const ua = getBrowserMetaData(req);
        console.log(ua);

        const geoIP = getGEOIP(req);
        console.log(geoIP);

        console.log('will redirect..');
        ctx.res.writeHead(302, {Location: 'https://www.bbc.co.uk'})
        ctx.res.end()
    }
    //else {
    //    document.location.pathname = path
    //}
    //return redirect(ctx, 'https://bbc.co.uk/')
    //return { msg: 'ok' }
}

export default Xredirector