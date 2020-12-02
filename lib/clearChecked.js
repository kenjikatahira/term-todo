const dir = `${require('os').homedir()}/.termi-todo/`;
const fs = require('fs');
const list = require('./list');

module.exports = () => {
    const data = require(dir + 'todo.json');
    const { todos } = data;
    const newTodos = todos.filter(o => !o.check);
    data.todos = newTodos;
    fs.writeFileSync(dir + 'todo.json', JSON.stringify(data), (err) => err && console.error(err));
    list();
}