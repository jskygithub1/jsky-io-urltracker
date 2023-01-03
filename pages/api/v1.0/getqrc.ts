// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { createQRC, getQRC, updateQRC } from "./db/dbUtils";
import logger from '../../../lib/logger';

type Data = {
    response: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    logger.log( 'info', '=========== getqrc =============')
    logger.log('info', `${req.body.qrcId}`);

    // does it exist?
    const response = await getQRC( req.body.qrcId );
    if ( response.rowCount === 0 ) {
        return res.status(404).json({ response: 'Not found.' } );
    }

    res.status(200).json({response})
}
