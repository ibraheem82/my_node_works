const REQUEST_TIMEOUT = 500;


function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}



// console.log(module);
// module.exports = {
    // REQUEST_TIMEOUT,
//     send,
// }


module.exports = {
    REQUEST_TIMEOUT,
    send,
}

console.log('Hello from request.js')