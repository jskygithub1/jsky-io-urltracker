import moment from 'moment';

const log = ( level: String, message: any ) => {

    if (typeof message === 'object' ) {
        message = JSON.stringify ( message );
    }

    const timeStamp = moment().format( 'YYYY-MM-DD HH:mm:ss:SSS');
    const red = '\x1b[31m';
    const yellow='\x1b[33m';
    const cyan='\x1b[36m';
    const magenta = '\x1b[35m';
    const reset = '\x1b[0m';

    switch( level) {
        case 'debug': {
            console.log( `${level} - [${timeStamp}]-${message}` );
            break;
        }
        case 'warn': {
            console.log( `${magenta}${level}${reset}  - [${timeStamp}]-${message}` );
            break;
        }
        case 'info': {
            console.info( `${cyan}${level}${reset}  - [${timeStamp}]-${message}` );
            break;
        }
        case 'error': {
            console.error( `${red}${level}${reset} - [${timeStamp}]-${message}` );
            break;
        }
        default:
            break;
    }

}

export default { log }