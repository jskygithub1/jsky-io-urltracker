// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import { createMetric } from "./db/dbUtils";
import logger from '../../../helpers/logger';

type Data = {
    response: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { getBrowserMetaData, getGEOIP }  = require( './utils')
    const qrcConfig = req.body.qrcConfig;
    logger.log('info', `Creating metric for: ${ qrcConfig.qrcId }`);

    const ua = getBrowserMetaData(req);
    const geoIP = getGEOIP(req);
    await createMetric( qrcConfig, geoIP, ua );
    //res.writeHead(302, {Location: qrcConfig.data })
    //res.end()
    res.status(200).json({response: 'ok'})
}
