// Packages
const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

//Configs
const logger = require('../configs/logger');

const savePassword = (password) => {
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        logger.info(chalk.green('Password saved to passwords.txt'));
      });
    });
  });
};

module.exports = savePassword;
