var pjson = require('./package.json');
const fs = require('fs')

const version = pjson.version;
console.log(version);

fs.writeFileSync('./buildver.txt', version);


