const dir = `${require('os').homedir()}/.termi-todo/`;
const fs = require('fs');
const chalk = require('chalk');

module.exports = (args) => {
    const data = require(dir + 'todo.json');
    const { todos } = data;
    
    console.log('\n\n',chalk.white('-------------------------------------------------------'),'\n\n');
    if(todos.length) {
        
        for(const todo of todos) {
            let label = ' • ' + todo.text;
            if(todo.check) {label = `${label} - ✔`;}
            console.log(chalk[todo.check ? 'greenBright' : 'white'](label));
        }
        
    } else {
        console.log(chalk.red('Nenhuma task em pendência.'))
    }
    console.log('\n\n',chalk.white('-------------------------------------------------------'),'\n\n');

}