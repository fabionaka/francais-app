let conf = require('./src/backend/config.json');
let fs = require("fs");

conf.isProd = true;



fs.writeFileSync('dist/backend/config.json', JSON.stringify(conf, null, 4));

