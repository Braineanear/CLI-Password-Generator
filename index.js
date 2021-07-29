#!/usr/bin/env node

// Packages
const { Command } = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

// Configs
const logger = require('./configs/logger');

// Utils
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

const program = new Command();

program.version('1.0.0').description('A password generator');

program
  .option('-l, --length <number>', 'password length', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .option('-nc, --no-chars', 'remove chars')
  .option('-u, --upper-chars', 'password contain upper chars')
  .parse();

const { length, save, numbers, symbols, chars, upperChars } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols, chars, upperChars);

if (save) {
  savePassword(generatedPassword);
}

clipboardy.writeSync(generatedPassword);

logger.info(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
logger.info(chalk.yellow('Password copied to clipboard'));
