// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// @ts-ignore
import { doQuery } from './dbUtils';

type Data = {
    name: string
}

/**
 * Database interface.
 *
 * q=getuser|createuser|...
 *
 * @param req
 * @param res
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    console.log( req.method);
    console.log( 'DBIO' + new Date() );
    const results: any = doQuery( 'select * from "public"."user";')
    // @ts-ignore
    res.status(200).json({ results });
    res.end ();
}
