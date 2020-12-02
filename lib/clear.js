const dir = `${require('os').homedir()}/.termi-todo/`;
const fs = require('fs');

module.exports = () => {
    const data = { todos : [] };
    fs.writeFileSync(dir + 'todo.json', JSON.stringify(data), (err) => err && console.error(err));
}