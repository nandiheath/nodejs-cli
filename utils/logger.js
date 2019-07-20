const chalk = require('chalk');

module.exports = {
  info: (msg) => {
    console.log(chalk.cyan(msg));
  },
  important: (msg) => {
    console.log(chalk.yellow(msg));
  },
  error: (msg) => {
    console.log(chalk.red(msg));
  },
};
