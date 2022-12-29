// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { createQRC, getQRC, updateQRC } from "./db/dbUtils";
import logger from '../../../helpers/logger';

type Data = {
    response: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    logger.log( 'info', '=========== saveqrc =============')
    logger.log('info', `${req.body.data}-${req.body.qrcId}`);

    // does it exist?
    let response = await getQRC( req.body.qrcId );
    const qrc = {
        background: req.body.background,
        color: req.body.color,
        data: req.body.data,
        userId: 'myuser@muser.com',
        qrcId: req.body.qrcId,
        qrcName: req.body.name,
        qrcConfiguration: req.body.data,
        type: req.body.type,
        width: req.body.width
    }
    if ( response.rowCount === 0 ) {
        // does not exist, create it
        await createQRC( qrc );
    } else {
        // update it
        await updateQRC( qrc );
    }



    res.status(200).json({response: 'ok'})
}
