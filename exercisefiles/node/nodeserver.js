// write a nodejs server that will expose a method call "get" that will return the value of the key passed in the query string
// example: http://localhost:3000/get?key=hello
// if the key is not passed, return "key not passed"
// if the key is passed, return "hello" + key
// if the url has other methods, return "method not supported"
// when server is listening, log "server is listening on port 3000"



// add logging to the method "get" to log the time taken to process the request


const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const urlParts = url.parse(req.url);
    const query = querystring.parse(urlParts.query);
    const key = query.key;
    // add logging to the method "get" to log the key passed
    console.log('key passed is ' + key);

    if (urlParts.pathname === '/get') {
        if (!key) {
            res.write('key not passed');
        } else {
            res.write('hello ' + key);
        }
    } else {
        res.write('method not supported');
    }
    res.end();
    // add logging to the method and log request details including headers and body
    console.log('request details are ' + req.url + req.method + req.querystring + req.headers + req.body);

    // add logging to the method "get" to log request duration
    console.log('request duration is ' + res.duration);
}
);

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});

// add a method to parse a vcard file and return the data as json
function parseVcard(vcard) {
    const lines = vcard.split('\n');
    const json = {};
    for (let line of lines) {
        const parts = line.split(':');
        json[parts[0]] = parts[1];
    }
    return json;
}
