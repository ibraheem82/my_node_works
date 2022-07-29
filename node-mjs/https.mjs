
// * In order to use ecma script modules 

import { send } from './request.mjs';
import { read } from './response.mjs';


// * Node treats javaScript file commonJs module by default for backward compatibility 
// const request = require('./request');
// const response = require('./response');

//  OR

// const { send } = require('./request');
// const { read } = require('./response');

function makeRequest(url, data) {
    send(url, data);
    read();
};


// function makeRequest(url, data) {
//     request.send(url, data);
//     return response.read();
// };






const responseData = makeRequest('www.google.com', 'hello')
console.log(responseData);