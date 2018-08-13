const React = require("react");
const renderer = require("react-test-renderer");

const removeMarkdownElements = require("./removeMarkdownElements");

const defineSnapshot = (name, idx, childDocument) => {
  it(`${name}_${idx}`, () => {
    expect(childDocument).toMatchSnapshot();
  });
};

const defineSnapshots = (component, name) => {
  const element = React.createElement(
    component,
    {
      components: {
        hr: "removeme",
        h1: "removeme",
        h2: "removeme",
        p: "removeme"
      }
    },
    null
  );

  let jsonDocument = renderer.create(element).toJSON();

  const children = removeMarkdownElements(jsonDocument);
  children.forEach((child, idx) => defineSnapshot(name, idx, child));
};

module.exports = defineSnapshots;
