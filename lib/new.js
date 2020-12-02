const dir = `${require('os').homedir()}/.termi-todo/`;
const fs = require('fs');

module.exports = (args) => {
    const data = require(dir + 'todo.json');
    const { todos } = data;
    const todo = {
        text : args._[1],
        check : args.check || false
    }
    
    todos.push(todo);

    fs.writeFileSync(dir + 'todo.json', JSON.stringify(data), (err) => err && console.error(err));
}