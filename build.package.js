let package = require('./package.json');
let fs = require("fs");


package["node-remote"] = "http://localhost:8964";
package['node-main'] = "backend/server.js";
package.window.icon = "assets/icon.png";
package.build.win.icon = "assets/icon.ico";
package.build.mac.icon = "assets/icon.icns";


fs.writeFileSync('dist/package.json', JSON.stringify(package, null, 4));

