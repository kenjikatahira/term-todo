#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));

// commands
const add = require('./lib/new');
const list = require('./lib/list');
const check = require('./lib/check');
const remove = require('./lib/remove');
const clearChecked = require('./lib/clearChecked');

const cmd = argv._[0];

switch (cmd) {
    case 'add':
        add(argv);
        break;
    case 'remove':
        remove(argv);
        break;
    case 'list':
        list(argv);
        break;
    case 'clear':
        clearChecked(argv);
        break;
    case 'check':
        check(argv);
        break;
    default:
        list(argv);
        break;
}