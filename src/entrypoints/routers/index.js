const fs = require("fs");
const path = require("path");
const errorHandler = require("./error-handler");

function fromDir(app, startPath, filter) {
  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      app.use(require(filename));
    }
  }
}

module.exports = app => {
  fromDir(app, __dirname, "router.js");
  app.use(errorHandler);
};
