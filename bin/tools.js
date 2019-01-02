
const childProcess = require('child_process');

const fs = require('fs');

const cmd = (cmdStr)=> {
    return new Promise(resolve => {
        childProcess.exec(cmdStr, (err, stdout, stderr) => {
            resolve(err || stdout);
        })
    })
}

const checkIfFileExist = (filePath) => {
    try {
        fs.accessSync(filePath);
        return true;
    } catch(e) {
        return false;
    }
}



module.exports = {
    cmd,
    checkIfFileExist
};