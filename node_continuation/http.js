;

// const { request } = require('https');


// const req = request('https://www.facebook.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });




// * when using all this you don't need the [ req.end(); ] because it is called directly by [get]
const { get } = require('https');

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});





















// const http = require('http');
// const http = require('https')

// const req = http.request('https://www.facebook.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });

// *  [ req.end(); ] will cause the request to be sent
// req.end();