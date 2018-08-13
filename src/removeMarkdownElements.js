const removeMarkdownElements = json => {
  if (!json || !json.type) return null;

  return json.children
    .map(child => {
      if (!child.type) return null;
      if (child.type !== "removeme") return child;
      if (!child.children || child.children.length === 0) return null;

      return removeMarkdownElements(child.children);
    })
    .filter(child => child !== null);
};

module.exports = removeMarkdownElements;
