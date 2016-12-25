'use strict';
const http = require('http');
const fs = require('fs');
const chat = require('./chat');

const sendFile = (fileName, res) => {
    var fileStream = fs.createReadStream(fileName);

    fileStream
        .on('error', () => {
            res.statusCode = 500;
            res.end('Server Error');
        })
        .pipe(res);
}

http.createServer((req, res) => {
    console.log(req.url)
    switch (req.url) {
        case '/':
            sendFile('index.html', res);
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            break;
        case '/publish':
            var body = '';
            var qqq;
            req
                .on('readable', () => {
                    var currBody = req.read();
                    console.log(1111111)

                    if (currBody) {
                        body += currBody;
                    }
                })
                .on('end', () => {
                    console.log(222222)
                    try {
                        body = JSON.parse(body);
                    } catch (err) {
                        res.statusCode = 400;
                        res.end('Bad Request');
                        return;
                    }
                     console.log('body =>>', body)
                    chat.publish(body.message);
                    res.end('ok');
                });
            break;
        default:
            res.statusCode = 404;
            res.end('Not Found');
    }
}).listen(3000);



/*const fs = require('fs');
const stream = new fs.ReadStream(__filename);


stream.on('readable', () => {
    const data = stream.read();
    console.log(data);
});

stream.on('end', () => {
    console.log('The End!!');
});


*/
