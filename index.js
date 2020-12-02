const argv = require('minimist')(process.argv.slice(2));

// commands
const add = require('./lib/new');
const list = require('./lib/list');
const clear = require('./lib/clear');
const clearChecked = require('./lib/clearChecked');

const cmd = argv._[0];

switch (cmd) {
    case 'add':
        add(argv);
        break;
    case 'list':
        list(argv);
        break;
    case 'clear':
        clearChecked(argv);
        break;
    default:
        console.log('Default');
        list(argv);
        break;
}