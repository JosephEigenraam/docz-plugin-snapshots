const path = require("path");

const requireContext = require("./requireContext");
const defineSnapshots = require("./defineSnapshots");

const convertDoczToSnapshots = src => {
  if (typeof describe !== "function") {
    throw new Error(
      "docz-plugin-snapshots is intended only to be used inside jest"
    );
  }

  const docs = requireContext(src, true, /.mdx?$/);
  docs.keys().forEach(filename => {
    const doc = require(filename).default;
    defineSnapshots(doc, path.basename(filename, path.extname(filename)));
  });
};

module.exports = convertDoczToSnapshots;
