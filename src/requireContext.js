const fs = require("fs");
const path = require("path");

// require.context polyfill as it's not available in jest

const requireContext = (
  base = ".",
  scanSubDirectories = false,
  regularExpression = /\.js$/
) => {
  const files = {};

  function readDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
      const fullPath = path.resolve(directory, file);

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath);

        return;
      }

      if (!regularExpression.test(fullPath)) return;

      files[fullPath] = true;
    });
  }

  const appDir = path.dirname(require.main.filename);
  const searchPath = path.resolve(appDir, base);
  readDirectory(searchPath);

  function Module(file) {
    return require(file);
  }

  Module.keys = () => Object.keys(files);

  return Module;
};

module.exports = requireContext;
