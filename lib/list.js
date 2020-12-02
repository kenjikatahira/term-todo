const dir = `${require('os').homedir()}/.termi-todo/`;
const fs = require('fs');
const chalk = require('chalk');

module.exports = (args) => {
    const data = require(dir + 'todo.json');
    const { todos } = data;
    
    console.log('\n\n',chalk.white('-------------------------------------------------------'),'\n\n');
    if(todos.length) {
        for(const [index,todo] of todos.entries()) {
            let label = ' • ' + todo.text;
            if(todo.check) {label = `${label} - ✔`;}
            console.log(chalk.white(index),chalk[todo.check ? 'greenBright' : 'white'](label));
        }
    } else {
        console.log(chalk.red('Nenhuma task em pendência.'))
    }
    console.log('\n\n',chalk.white('-------------------------------------------------------'),'\n\n');
}