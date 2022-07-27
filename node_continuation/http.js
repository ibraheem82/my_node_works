const http = require('http');






http.request('www.facebook.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

// *  [ req.end(); ] will cause the request to be sent
// req.end();