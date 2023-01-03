const getId = ( iterations =6 )=> {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    alphabet += '0123456789';
    alphabet += 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for ( let n = 0; n < iterations; n++ ) {
        const number = Math.round( Math.random () * alphabet.length );
        result += alphabet.substring( number, number + 1 );
    }
    return result;
}

export default getId;