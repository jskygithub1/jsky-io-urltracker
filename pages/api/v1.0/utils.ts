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
    //const ipAddress = getIncomingIP( req );
    // tesing
    const ipAddress = '81.99.125.73';
    return geoIP.lookup(ipAddress);
}

/**
 * For each digit, get corresponding letter/number from alphabet
 *
 * ex: 0 gets first...9 gets tenth etc.. whatever is in the alphabet
 *
 * @param str
 * @returns {string}
 */
const getId = () => {

    const iterations = 6;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    alphabet += '0123456789';
    alphabet += 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for ( let n = 0; n < iterations; n++ ) {
        const number = Math.round( Math.random () * alphabet.length );
        result += alphabet.substring( number, number + 1 );
    }
    return result;
}

export { getBrowserMetaData, getIncomingIP, getGEOIP, getId };
