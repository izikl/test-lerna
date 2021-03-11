var pjson = require('./lerna.json');
const fs = require('fs')

const version = pjson.version;
console.log(version);

fs.writeFileSync('./buildver.txt', version);

// replace AAA=<old version> with AAA=<new version> in .env.production
const fileName = './.env.production';
const versionEnvVariableName = "(AAA=)";
const envFileContent = fs.readFileSync(fileName, 'utf8') 
const regEx = new RegExp(`${versionEnvVariableName}=.*`, "gm")
const updatedEnvProd = envFileContent.replace(regEx, `${versionEnvVariableName}=${version}`);
fs.writeFileSync(fileName, updatedEnvProd, 'utf8');