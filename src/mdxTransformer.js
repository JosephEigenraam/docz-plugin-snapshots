const createMdxTransformer = require("jest-mdx-loader/src/createTransformer");

const preProcess = function(src) {
  return src
    .replace(/<Playground>/g, "<React.Fragment>") // Auto-convert tags to div
    .replace(/<\/Playground>/g, "</React.Fragment>");
};

module.exports = {
  process: createMdxTransformer(preProcess)
};
