// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { createUser, getUser } from "./db/dbUtils";
import logger from '../../helpers/logger';
import moment from 'moment';
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
    if (results.rowCount > 0) {
        logger.log('error', `This email address already exists.`);
        res.status(409).json({message: `This email address already exists.`})
        return;
    }

    // create this user

    User.firstName = req.body.firstName;
    User.lastName= req.body.lastName;
    User.email = req.body.email;
    User.password = req.body.password;
    // @ts-ignore
    User.createdAt = moment().format( 'YYYY-MM-DDTH:mm:ss' );

    logger.log( 'info', User );


    // @ts-ignore
    results = await createUser ( User );
    logger.log( 'info', results );
    res.status(200).json({message: 'ok'})
}
