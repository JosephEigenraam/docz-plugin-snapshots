const convertDocsToSnapshots = require("./src/convertDoczToSnapshots");

const initDoczPluginSnapshots = src => {
  convertDocsToSnapshots(src);
};

module.exports = initDoczPluginSnapshots;
