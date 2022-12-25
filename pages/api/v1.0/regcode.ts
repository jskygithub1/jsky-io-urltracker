// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { doQuery, getUserByRegCode } from "./db/dbUtils";
import logger from '../../../helpers/logger';

type Data = {
    response: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

  //  logger.log('info', `${req.body.firstName}-${req.body.lastName}-${req.body.email}-${req.body.password}`);

    let user: any = await getUserByRegCode ( req.body.regcode );
    console.log( user );
    if (user ) {
        logger.log('info', `Confirmation code is ok.`);
        // update user to set is_confirmed to true.
        user.is_confirmed = true;
        await doQuery( `update "public"."user" set is_confirmed = true where email = '${user.email}' `);
        res.status(200).json({ response: user })
        return;
    }


    res.status(404).json({response: 'Userid/password combination not found'})
}
