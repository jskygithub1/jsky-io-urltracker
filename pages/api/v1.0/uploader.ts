// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// @ts-ignore
import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false,
    },
};

import { Utils } from './utils';

import fs from "fs";

const utils = new Utils ();


export default async function handler(req: any, res: any ) {

    try {

        console.log( 'uploader..' );
        const form = new formidable.IncomingForm();
        form.uploadDir = "./";
        form.keepExtensions = true;
        form.parse(req, (err: any, fields: any, files: any) => {
            console.log(err, fields, files);
            var oldpath = files.myfile.filepath;
            var newpath = files.myfile.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });

        /*console.log( '================================');
        const fs = require( 'fs' );
        fs.writeFileSync( req.file.originalname as string, req.file.buffer );
        res.status( 200 ).send( {response: 'ok' });*/
        //res.status( 200 ).send( {response: 'ok' });

    } catch (  e: any ) {
        console.log(e);
        res.status( 500 ).send( e.message );
    }
}
