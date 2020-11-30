var argv = require('minimist')(process.argv.slice(2));

const cmd = argv._[0];

switch (cmd) {
    case 'add':
        require('./cmd/new')(argv);
        break;
    case 'list':
        require('./cmd/list')(argv);
        break;
    case 'clear':
        require('./cmd/clear')(argv);
        break;
    default:
        console.log('erro');
        break;
}