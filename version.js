var pjson = require('./lerna.json');
const fs = require('fs')

const version = pjson.version;
console.log(version);

fs.writeFileSync('./buildver.txt', version);

// replace AAA=<old version> with AAA=<new version> in .env.production
const versionEnvVariableName = "(AAA=)";
const envFileContent = fs.readFileSync('./env.productions', 'utf8') 
const regEx = new RegExp(`${versionEnvVariableName}=.*`, "gm")
const updatedEnvProd = regEx.replace(envFileContent, `${versionEnvVariableName}=${version}`);
fs.writeFileSync("./env.productions", updatedEnvProd, 'utf8');