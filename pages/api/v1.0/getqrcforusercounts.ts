// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { getQRCForUserCounts } from "./db/dbUtils";
import logger from '../../../lib/logger';

type Data = {
    response: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    logger.log( 'info', '=========== getqrcforuser =============')
    logger.log('info', `${req.query.userid}`);

    // does it exist?
    const response = await getQRCForUserCounts( req.query.userid as string );
    console.log( response )
    if ( response.rowCount === 0 ) {
        return res.status(404).json({ response: 'Not found.' } );
    }

    res.status(200).json({response: response.rows})
}
