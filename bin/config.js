
const dir = '~/Desktop/node';
const fileName = 'hosts';

module.exports = {
    dir: dir,
    file: fileName,
    originFilePath: `${dir}/${fileName}`,
    backFilePath:  `${dir}/${fileName}.bck`,
    backFileDir: `${dir}/`,
    host: '/etc/hosts',
    hostPath: '/etc'
}