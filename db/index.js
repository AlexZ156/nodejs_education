'use strict';

import phrases from './ru';

const getPhrase = name => {
    // console.log(222)
    if (!phrases[name]) {
        throw new Error(`Нет такой фразы: ${name}`);
    }

    return phrases[name];
}

export {getPhrase};