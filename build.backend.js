"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var fs_extra_1 = require("fs-extra");
var chalk_1 = __importDefault(require("chalk"));
var backendConf;
var conf = {
    backend: {
        from: path.join(__dirname, 'src/backend'),
        to: path.join(__dirname, "dist/backend")
    },
    assets: {
        from: path.join(__dirname, 'src/assets'),
        to: path.join(__dirname, "dist/assets")
    }
};
try {
    fs_extra_1.copySync(conf.backend.from, conf.backend.to);
    console.log(chalk_1.default.green('>'), "Diret\u00F3rio " + conf.backend.from + " copiado para " + conf.backend.to);
    // obtem config 
    backendConf = require(path.join(__dirname, "src/backend/config.json"));
    backendConf.isProd = true;
}
catch (err) {
    console.log(err);
    console.log("ocorreu um erro ao copiar a pasta " + conf.backend.from);
}
try {
    fs_extra_1.copySync(conf.assets.from, conf.assets.to);
    console.log(chalk_1.default.green('>'), "Diret\u00F3rio " + conf.assets.from + " copiado para " + conf.assets.to);
}
catch (err) {
    console.log(chalk_1.default.red("Ocorreu um erro ao tentar copiar o diret\u00F3rio " + conf.assets.from + " para " + conf.assets.to));
}
if (typeof backendConf !== 'undefined' && fs.existsSync(path.join(__dirname, './dist/backend'))) {
    fs.writeFileSync(path.join(__dirname, './dist/backend/config.json'), JSON.stringify(backendConf, null, 4));
    console.log(chalk_1.default.green('>'), "Config.json Alterado");
}
