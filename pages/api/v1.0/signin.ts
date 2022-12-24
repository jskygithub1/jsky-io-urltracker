// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { createUser, getUser } from "./db/dbUtils";
import logger from '../../../helpers/logger';
import User from '../models/user';


type Data = {
    response: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    logger.log('info', `${req.body.firstName}-${req.body.lastName}-${req.body.email}-${req.body.password}`);

    let response: any = await getUser ( req.body.email );
    console.log( response );
    if (response.rowCount > 0) {
        logger.log('error', `This email address already exists.`);
        res.status(200).json({response})
        return;
    }


    res.status(404).json({response: 'Userid/password combination not found'})
}
