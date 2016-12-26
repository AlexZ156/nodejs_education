'use strict';
const nconf = require('nconf');
const path = require('path');

console.log('==========================================')
nconf.argv()
   .env()
   .file({ file: path.resolve(__dirname, '/config.json') });