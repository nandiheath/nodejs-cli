#!/usr/bin/env node
const program = require('commander');
require('dotenv').config();

const { info, important } = require('./utils/logger');

/**
 * Termination process
 */
function end() {
  process.exit(1);
}

async function test(arg, cmd) {
  if (cmd.value) {
    important(`Value: ${cmd.value}`);
  }

  if (cmd.boolean) {
    important(`Boolean: ${cmd.boolean}`);
  }

  info(`ARG: ${arg}`);

  end();
}

/**
 * Commander functions
 */
program
  .version('0.1.0');

/**
 * Entry point
 */
program
  .command('test <arg>')
  .description('a test function with options')
  .option('-b, --boolean', 'with boolean')
  .option('-v, --value <value>', 'with values')
  .action(test);


program.parse(process.argv);

// If no arguments we should output the help
if (!program.args.length) program.help();
