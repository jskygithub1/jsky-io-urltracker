import moment from "moment/moment";
import logger from "../../../../lib/logger";
import User from '../../models/user';

const { Pool } = require('pg')

let pool: any;

type QRCOpts = {
    background: string,
    color: string,
    data: string,
    type: string,
    userId: string,
    qrcId: string,
    qrcName: string,
    targetURL: string,
    width: number
}

type UserOpts = {
    confirmationHash: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt: string
}

const createMetric = async( qrc: QRCOpts, geoIp: any, ua: any ) => {

    const data = {
        qrc_id:  qrc.qrcId,
        geoIp,
        ua
    }

    return doQuery( `insert into metrics
        ( 
            "created_at",
            "qrc_id",
            "ua",
            "geo_ip"
             )
        values( 
            '${moment().format('YYYY-MM-DDTH:mm:ss')}',
            '${data.qrc_id}', 
            '${JSON.stringify( data.ua )}', 
            '${JSON.stringify( data.geoIp )}')
            `);
}

const createQRC = async ( qrc: QRCOpts ) => {
    const qrcConfiguration = {
        background: qrc.background,
        color: qrc.color,
        data: qrc.data,
        type: qrc.type,
        width: qrc.width
    }
    return doQuery( `insert into product
        ( 
            "created_at",
            "qrc_configuration",
            "qrc_name",
            "qrc_id",
            "target_url",
            "user_id"
             )
        values( 
            '${moment().format('YYYY-MM-DDTH:mm:ss')}',
            '${JSON.stringify(qrcConfiguration)}', 
            '${qrc.qrcName}', 
            '${qrc.qrcId}', 
            '${qrc.targetURL}', 
            '${qrc.userId}')`);
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

const getQRC = async( qrcId: string ) => {
    return doQuery( `select * from product where qrc_id = '${qrcId}'` );
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

const updateQRC = async ( qrc: QRCOpts ) => {
    const qrcConfiguration = {
        background: qrc.background,
        color: qrc.color,
        data: qrc.data,
        type: qrc.type,
        width: qrc.width
    }
    return doQuery( `update product
        set qrc_configuration = '${JSON.stringify(qrcConfiguration)}',
        qrc_name = '${qrc.qrcName}',
        target_url = '${qrc.targetURL}',
        updated_at='${moment().format( 'YYYY-MM-DDTH:mm:ss' )}',
        user_id = '${qrc.userId}'
        where qrc_id = '${qrc.qrcId}'` );

}

export { createMetric, createQRC, createUser, doQuery, getQRC, getUser, getUserByRegCode, updateQRC }