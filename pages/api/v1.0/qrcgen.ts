// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// @ts-ignore
import QRCode from 'qrcode';

import { getId } from './utils';

type Data = {
    name: string | Object
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    interface optionsIF {
        color?: Object;
        margin?: number;
        text?: string | null;
        textBackground?: string | null;
        textColor?: string | null;
        textPointer?: boolean;
        textPosition?: string | null;
        width: number
    }

    const options: optionsIF = {
        color: {
            dark: req.query.color ? `#${req.query.color}` : '#ffffff',
            light: req.query.background ? `#${req.query.background}` : '#000000',
        },
        margin: parseInt( <string>req.query.margin )  || 4,
        text: req.query.text as string || null,
        textBackground: req.query.textBackground as string || null,
        textColor: req.query.textColor as string || null,
        textPointer: req.query.textPointer  as string === 'true' ? true : false,
        width: parseInt( <string>req.query.width ) || 100
    }

    console.log( typeof options.width )

    // extra validation
    if ( options.width < 100 ) {
        options.width = 100;
    }


    // @ts-ignore
    options.width += parseInt( options.margin );

    const uniqueId = getId ();
    console.log( `unique id is: ${ uniqueId }` );

    const sendResponse = ( id: string | any, image: string | any[] ) => {

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': image.length,
            'jskyio-unique-id': uniqueId
        });

        res.end( image );

    };

    //options.width=500;

    console.log(options);


    try {

        const {createCanvas, Image, loadImage} = require('canvas')
        // @ts-ignore
        const canvas = createCanvas(options.width * 1.5, options.width * 1.5)
        const ctx = canvas.getContext('2d');
        console.log(canvas);

        const fs = require('fs');
        const image = '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';

        let buff = Buffer.from(image, 'base64');
        fs.writeFileSync('image.png', buff);

        const ximage = await loadImage('image.png'); //logo

        console.log( `logo image: ${ximage.width} ${ximage.height}`);

        /*
            Generate QRC here
         */
        await QRCode.toCanvas(canvas, 'https://bbc.co.uk/', options);


        // todo figure our resize dimensions based on qrc size.
        // ex: qrc size = 100
        // image width = 100*60%
        // image width original = 300
        // new image width = 90
        // therefore resize factor is 300/90 = 3.333
        // calc height = ximhe.height = ximageheight / resizeFactor;
        /////////////////////////////////////////////////////////////////////////////////
        const resizeFactor = ximage.width / (options.width * .25);
        console.log(resizeFactor, ximage.width, ximage.height);

        // Draw logo into canvas with QRC  Center
        // image, sourcewidth, sourceheight, x, y, destination width, destination height... Use to resize!!!!!
       /* ctx.drawImage(ximage,
            0,
            0,
            ximage.width, // original
            ximage.height, // original
            (options.width - ximage.width / resizeFactor) / 2,  // x position
            options.width / 2 - (ximage.height / resizeFactor / 2), // y positions
            ximage.width / resizeFactor,  // resized width
            ximage.height / resizeFactor); // resized height*/

        // add surrounding text
        // text at bottom

        const data = canvas.toDataURL();

        sendResponse( 0, data );

        ///////////////////////////////////////////
        // TEMP TEMP
        //////////////////////////////////////////
        return;

        // Create new canvas whic his bigger than the original
        const canvasFinal = createCanvas(options.width * 2, options.width * 2)
        const ctxFinal = canvasFinal.getContext('2d')

        const img = new Image()
        img.onload = () => ctxFinal.drawImage(img, 0, 0)
        img.onerror = (err: any) => {
            throw err
        }

        // Load QRC into new Image object -- causes the onload above to execute
        // which draws it into our new Canvas
        img.src = data;

        console.log(canvasFinal);
        console.log(
            (options.width - ximage.width / resizeFactor) / 2,  // x position
            options.width / 2 - (ximage.height / resizeFactor / 2), // y positions
            ximage.width / resizeFactor,  // resized width
            ximage.height / resizeFactor
        )

        ctxFinal.font = '24px serif'
        ctxFinal.rotate(0.0)
        ctxFinal.fillText('xxxScan me!', 10, options.width * 2 - 20)
        ctxFinal.strokeStyle = '#ff8080';
        ctxFinal.lineWidth = 10;
        ctxFinal.strokeRect(0, 0, options.width * 2, options.width * 2)
        //console.log( data );
        const dataFinal = canvasFinal.toDataURL();

        sendResponse( null, dataFinal )

        //console.log( data );
    } catch (  e: any ) {
        console.log(e);
        res.status( 500 ).send( e.message );
    }
}
