
// const childProcess = require('child_process');
const { cmd, checkIfFileExist } = require('./tools');
const fs = require('fs');
const path = require('path');
const config = require('./config');

/**
 * 备份原有的host
 */
async function backUp() {
    // const ifBacked = await cmd('');
    const ifBacked = checkIfFileExist(config.backFilePath);
    if(ifBacked){
        console.log('已经备份');
        return;
    } else {
        console.log('原始host没有备份，开始备份');
    }

    await cmd(`cp ${config.host} ${config.backFilePath}`);
    console.log('备份完成');
    console.log(`备份文件地址: ${config.backFilePath}`)

    // try{
    //     fs.accessSync(`${config.backFilePath}`);
    //     console.log('已经备份');
    //     return;
    // } catch(e){
    //     console.log('原始host没有备份，开始备份');
    // }
    // // fs.copyFileSync(`${dir}/test.txt`, `${dir}/test.txt.bck`);
    // await cmd(`cp ${config.originFilePath} ${config.backFilePath}`);
    // console.log('备份完成');
    // console.log(`备份文件地址: ${config.backFilePath}`)

}

module.exports = backUp;