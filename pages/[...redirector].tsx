import Link from "next/link";
// @ts-ignore
import redirect from 'next-redirect';
import React, {useEffect, useState} from "react";

const Page2 = () => {

    return (
        <div>
            <Link href="/">home..</Link>
            <div>catchsdfsdfa;l..........</div>
        </div>
    );
}

Page2.getInitialProps = async (ctx: any) => {
   //console.log( ctx );

    if (ctx.res) {
        console.log( 'will redirect..' );
        ctx.res.writeHead(302, { Location: 'https://www.bbc.co.uk' })
        ctx.res.end()
    }
    //else {
    //    document.location.pathname = path
    //}
    //return redirect(ctx, 'https://bbc.co.uk/')
   //return { msg: 'ok' }
}

export default Page2