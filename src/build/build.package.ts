import { writeFileSync } from "fs";
let distPackage = require('./package.json');


distPackage["node-remote"] = "http://localhost:8964";
distPackage['node-main'] = "backend/server.js";
distPackage.window.icon = "assets/icon.png";
distPackage.build.win.icon = "assets/icon.ico";
distPackage.build.mac.icon = "assets/icon.icns";


writeFileSync('dist/package.json', JSON.stringify(distPackage, null, 4));

