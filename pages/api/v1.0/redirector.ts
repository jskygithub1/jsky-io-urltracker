import type { NextApiRequest, NextApiResponse } from 'next'


import { Utils } from './utils';

const utils = new Utils ();

export default async function handler(req: any, res: any ) {

    /*const browserData = getBrowserMetaData( req );
    console.log( browserData );

    //res.end(JSON.stringify(browserData ));*/
console.log( 'aaaaaaaaaaaaaaredirector');
   // res.writeHead(302, {'Location': 'https://bbc.com' });
    //res.end();
    res.redirect( 'https://bbc.co.uk');
    res.end ();

}