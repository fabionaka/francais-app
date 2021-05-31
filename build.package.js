"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var distPackage = require('./package.json');
distPackage["node-remote"] = "http://localhost:8964";
distPackage['node-main'] = "backend/server.js";
distPackage.window.icon = "assets/icon.png";
distPackage.build.win.icon = "assets/icon.ico";
distPackage.build.mac.icon = "assets/icon.icns";
fs_1.writeFileSync('dist/package.json', JSON.stringify(distPackage, null, 4));
