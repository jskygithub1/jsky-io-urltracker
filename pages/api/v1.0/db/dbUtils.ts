import moment from "moment/moment";
import logger from "../../../../helpers/logger";
import User from '../../models/user';

const { Pool } = require('pg')

let pool: any;

type UserOpts = {
    confirmationHash: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt: string
}

const createUser = async ( user: UserOpts ) => {
    return doQuery( `insert into "public"."user" 
        ( 
            "confirmation_hash",
            "first_name", 
            "last_name", 
            "email", 
            "password", 
            "is_confirmed",
            "created_at" )
        values( 
            '${user.confirmationHash}', 
            '${user.firstName}', 
            '${user.lastName}', 
            '${user.email}', 
            '${user.password}',
            false, 
            '${moment().format( 'YYYY-MM-DDTH:mm:ss' )}') `);
}

const doConnect = () => {
    if ( !pool ) {
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
    const response = await doQuery(`select * from "public"."user" where email = '${email}';`);

    /*
        {
      id: 1,
      first_name: 'James',
      last_name: 'young',
      email: 'jamesskyoung@outlook.com',
      password: 'password',
      is_confirmed: false,
      created_at: 2022-12-23T16:33:01.000Z,
      confirmation_hash: null
    }

     */
    if ( response.rows.length === 0 ) {
        return null;
    }
    return populateUser( response );

    return User;
}

const getUserByRegCode = async ( regCode: String ) => {
    const response = await doQuery(`select * from "public"."user" where confirmation_hash = '${regCode}';`);

    if ( response.rows.length === 0 ) {
        return null;
    }
    return populateUser( response );
}

const populateUser = ( (response: any) => {
    const data = response.rows[ 0 ];
    User.confirmationHash = data.confirmation_hash;
    User.createdAt = data.created_at;
    User.email = data.email;
    User.firstName = data.first_name;
    User.lastName = data.last_name;
    User.password = data.password;

    return User;
})

export { createUser, doQuery, getUser, getUserByRegCode }