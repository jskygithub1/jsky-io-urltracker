// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import logger from '../../helpers/logger';
import {doQuery} from "./db/dbUtils";

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    logger.log( 'info', `${req.body.firstName}-${req.body.lastName}-${req.body.email}-${req.body.password}`);

    const results: any = await doQuery( `select id from "public"."user" where email = '${req.body.email}';`);
    if ( results.rowCount > 0 ) {
        logger.log( 'error', `This email address already exists.` );
        res.status(409).json({ message: `This email address already exists.`  })
        return;
    }

    // create this user
    res.status(200).json({ message: 'ok' })
}
