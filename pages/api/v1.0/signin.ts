// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { createUser, getUser } from "./db/dbUtils";
import logger from '../../../lib/logger';



type Data = {
    response: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    logger.log('info', `${req.body.firstName}-${req.body.lastName}-${req.body.email}-${req.body.password}`);

    let response: any = await getUser ( req.body.email );
    console.log( req.body.password );
    if (response && ( req.body.password === response.password )) {
        logger.log('info', `Logged in`);
        logger.log( 'info', response );
        res.status(200).json({response})
        return;
    }


    res.status(404).json({response: 'Userid/password combination not found'})
}
