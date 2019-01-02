#!/usr/bin/env node

// const program = require('commander');
const childProcess = require('child_process');
const backUp = require('./backUp');
const createNew = require('./add');
const shelljs = require('shelljs');
const readline = require('readline-sync');
const argvs = process.argv;
const operation = argvs[2];
const config = require('./config');
const listBck = require('./list');
console.log(argvs[2] === 'create');
const utils = require('../lib/utils');
const figlet = require('figlet');

const program = require('commander');


program
  .version('0.1.0')
  .option('-l, --list', 'list the hosts files')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook');

  utils.colorLog(figlet.textSync('MY', { horizontalLayout: 'full' }))


// const shell = require('shelljs');
const  processChild = require('child_process');

async function main() {
    backUp();
    
    if(operation === 'create'){
        const file = `${argvs[3]}`;
        shelljs.exec(`cp ${config.host} ${file} && open ${file}; `);
        const ifSwitchNow = readline.keyInYN('是否立即切换为新增的文件？');
        if(!ifSwitchNow){
            process.exit(0);
        }
        console.log('switch');
        shelljs.exec(`sudo cp ${file} ${config.host}`);   
    }
    if(operation === 'list') {
        listBck();
    }
    
}

main();