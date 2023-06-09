import * as util from 'util';
import * as fs from 'fs';
import touch from './utils/touch';
import cat from './utils/cat';
import testEmitter from './event-emitter/emitter-set-timeout';

const command = process.argv[2];
const path = process.argv[3];

if (command && path) {
    switch (command) {
        case 'touch': {
            touch(path);
            break;
        }
        case 'cat': {
            cat(path);
            break;
        }
        default: {
            console.log('Unknown command');
        }
    }
} else {
    console.log('Command missing');
}

testEmitter();