#!/usr/bin/env node
var licence = require('./App'),
chalk = require('chalk');
(async () => {
var data = await licence(process.argv[2]);
data.map((names , index ) => console.log(chalk.cyanBright.bold(` \n ${data.length - index} : Version :  ${names.version} : ${names.license} \n `)))
})();
