

const chalk = require('chalk');

const colorLog = (msg, color = 'white') => {
    console.log(chalk[color](msg));
}


module.exports = {
    colorLog: colorLog,
}