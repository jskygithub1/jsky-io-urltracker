import moment from "moment/moment";
import logger from "../../../../helpers/logger";

const { Pool } = require('pg')

let pool: any;

type UserOpts = {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: String
}

const createUser = async ( user: UserOpts ) => {
    return doQuery( `insert into "public"."user" 
        ( 
            "first_name", 
            "last_name", 
            "email", 
            "password", 
            "is_confirmed",
            "created_at" )
        values( 
            '${user.firstName}', 
            '${user.lastName}', 
            '${user.email}', 
            '${user.password}',
            false, 
            '${moment().format( 'YYYY-MM-DDTH:mm:ss' )}') `);
}

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
    logger.log( 'info', query );
    return pool.query ( query );
}

const getUser = async ( email: String ) => {
    return doQuery(`select * from "public"."user" where email = '${email}';`);
}

export { createUser, getUser }