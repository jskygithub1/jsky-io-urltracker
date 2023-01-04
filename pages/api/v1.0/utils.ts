import axios from 'axios';
// @ts-ignore
import browserParser from 'ua-parser-js';
// @ts-ignore


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
    const ipAddress = getIncomingIP( req );
    // testing

    //const ipAddress = '81.99.125.73';
    const url = `https://api.bigdatacloud.net/data/ip-geolocation?ip=${ipAddress}&localityLanguage=en&key=${process.env.BDC_API_KEY}`
    return axios.get( url );
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
