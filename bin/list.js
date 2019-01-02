const config = require('./config');
const fs = require('fs');
const shelljs = require('shelljs');

function list () {
    shelljs.exec(`ls ${config.backFileDir}`);
}

module.exports = list;