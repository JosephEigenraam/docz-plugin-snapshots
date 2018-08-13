# docz-plugin-snapshots

A plugin for docz that creates jest snapshots for all documented component usages

## Install

Add the docz-plugin-snapshots package to your project.

```
yarn add --dev docz-plugin-snapshots
```

## Usage

Add the jest-mdx-loader to your jest.config.js file

```js
/// jest.config.js

module.exports = {
  //...
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".mdx?$": "jest-mdx-loader"
  }
  //...
};
```

Add a new test file and initialize the plugin

```js
/// index.test.js

import initDoczPluginSnapshots from "docz-plugin-snapshots";
initDoczPluginSnapshots("./");
```

## Licence

MIT © [Joseph Black](https://josephconradblack.com)
