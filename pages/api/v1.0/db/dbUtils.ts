const { Pool } = require('pg')

let pool: any;

const doConnect = () => {
    if ( !pool ) {
        pool = new Pool({
            host: process.env.POSTGRES_HOST,
            user: process.env.POSTGRES_USER,
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        })
    }
};

const doQuery =   ( query: String ) => {
    doConnect ();
    return pool.query ( query );
}

export { doQuery }