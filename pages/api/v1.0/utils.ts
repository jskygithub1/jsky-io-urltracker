// @ts-ignore
import browserParser from 'ua-parser-js';
// @ts-ignore
import geoIP from 'geoip-lite';

const  getBrowserMetaData = ( req: any ) => {
    return browserParser(req.headers['user-agent']);
}

const getIncomingIP = ( req: any ) => {
    let ipAddress;

    if (req.headers["x-forwarded-for"]) {
        ipAddress = req.headers["x-forwarded-for"].split(',')[0]
    } else {
        ipAddress = req.connection.remoteAddress
    }

    return ipAddress;
}

const getGEOIP = ( req: any ) => {
    const ipAddress = '80.192.115.76'; // getIncomingIP( req );
    return geoIP.lookup(ipAddress);
}

export { getBrowserMetaData, getIncomingIP, getGEOIP };
