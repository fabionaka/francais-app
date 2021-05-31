import * as fs from "fs";
import * as path from "path";
import { copySync } from "fs-extra";
import chalk from "chalk";
interface Config {
    isProd?: boolean;
}
let backendConf: Config;
let conf = {
    backend: {
        from: path.join(__dirname, 'src/backend'),
        to: path.join(__dirname, "dist/backend")
    },
    assets: {
        from: path.join(__dirname, 'src/assets'),
        to: path.join(__dirname, "dist/assets")
    }
}

try {
    copySync(conf.backend.from, conf.backend.to);
    console.log(chalk.green('>'), `Diretório ${conf.backend.from} copiado para ${conf.backend.to}`)

    // obtem config 
    backendConf = require(path.join(__dirname, "src/backend/config.json"));
    backendConf.isProd = true;

} catch (err) {
    console.log(err)
    console.log(`ocorreu um erro ao copiar a pasta ${conf.backend.from}`);
}


try {
    copySync(conf.assets.from, conf.assets.to);
    console.log(chalk.green('>'), `Diretório ${conf.assets.from} copiado para ${conf.assets.to}`)
}
catch (err) {
    console.log(chalk.red(`Ocorreu um erro ao tentar copiar o diretório ${conf.assets.from} para ${conf.assets.to}`))
}

if (typeof backendConf !== 'undefined' && fs.existsSync(path.join(__dirname, './dist/backend'))) {
    fs.writeFileSync(path.join(__dirname, './dist/backend/config.json'), JSON.stringify(backendConf, null, 4));
    console.log(chalk.green('>'), `Config.json Alterado`);
}
