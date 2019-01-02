const { cmd } = require('./tools');
const config = require('./config');

async function createNew(fileName){
    await cmd(`pwd`);
   await cmd(`vim ${fileName}.txt`);
}

module.exports = createNew;