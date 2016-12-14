'use strict';

import {getPhrase} from '../db';
import log from '../logger';
let logger = log(module);
// console.log(1111)

// console.log(log(module))
// console.log(222222)
// connect();

export default class User {
    constructor(name) {
        this.name = name;
    }

    hello(who) {
        // console.log(333666)
        logger(`${getPhrase("Hello")}, ${who.name}`);
    }
};