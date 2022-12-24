// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { createUser, getUser } from "./db/dbUtils";
import logger from '../../../helpers/logger';
import User from '../models/user';


type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    logger.log('info', `${req.body.firstName}-${req.body.lastName}-${req.body.email}-${req.body.password}`);

    let results: any = await getUser ( req.body.email );
    console.log( results );
    if (results.rowCount > 0) {
        logger.log('error', `This email address already exists.`);
        res.status(200).json({message: `ok`})
        return;
    }


    res.status(404).json({message: 'Userid/password combination not found'})
}
