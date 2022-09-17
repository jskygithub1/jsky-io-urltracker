// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log( req.method);


    console.log( 'Here.222222222222222222222222222222..' + new Date() );
    res.status(200).json({ name: '222222222222222' })
}
