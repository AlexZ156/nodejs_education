'use strict';
// import {connect, getPhrase} from './db';
// connect()
import User from './user';

const vasya = new User("Вася");
const petya = new User("Петя");


vasya.hello(petya);

// console.log(module);