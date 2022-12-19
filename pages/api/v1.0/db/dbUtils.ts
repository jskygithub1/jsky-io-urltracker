const { Pool } = require('pg')

let pool: any;

const doConnect = () => {
    if ( !pool ) {
        console.log( process.env.POSTGRES_PWD );
        pool = new Pool({
            database: process.env.POSTGRES_DB,
            host: process.env.POSTGRES_HOST,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PWD,
            max: 20,
            ssl: true,
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