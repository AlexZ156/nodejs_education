'use strict';
const express = require('express');
const http = require('http');
const config = require('./config');

let app = express();

app.set('port', 3000);

http.createServer(app).listen(app.get('port'), () => {
    console.log(app.get('env'));
    // console.log(process.env.NODE_ENV);
    console.log(process.env.NODE_PATH);
    console.log(111, app.get('port'));
});

app.use((req, res, next) => {
    res.end('Hello');
});

app.use((err, req, res, next) => {
    if (app.get('env') === 'development') {
        let errorHandler = app.use(express.errorHandler());
        errorHandler(err, req, res, next);
    } else {
        res.send(500);
    }
});