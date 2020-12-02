const dir = `${require('os').homedir()}/.termi-todo/`;
const fs = require('fs');
const list = require('./list');

module.exports = (args) => {
    const index = args._[1];
    const data = require(dir + 'todo.json');
    data.todos[index].check = data.todos[index].check === false ? true : false;
    fs.writeFileSync(dir + 'todo.json', JSON.stringify(data), (err) => err && console.error(err));
    list();
}