// ! You dont need this when using the spread operator
// const request = require('./request');
// const response = require('./response');

// module.exports = { 
//     request: require('./request.js'),
//     response: require('./response.js'),
// }


// * Using spread operator
module.exports = {
    ...require('./request'),
    ...require('./response'),
}



// module.exports = {
//     REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//     send: request.send,
//     read: response.read,
// }