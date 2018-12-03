# storybook-addon-notes-github-markdown-css

> The minimal amount of CSS to replicate the GitHub Markdown style

Make your notes addon look like github markdown. Shameless fork of [this](https://github.com/sindresorhus/github-markdown-css).

[<img src="https://cloud.githubusercontent.com/assets/170270/5219062/f22a978c-7685-11e4-8316-af25b6c89bc0.png" width="300">](http://sindresorhus.com/github-markdown-css)

## [Demo](http://sindresorhus.com/github-markdown-css)

## Install

Download [manually](https://raw.githubusercontent.com/sindresorhus/github-markdown-css/gh-pages/github-markdown.css), from [CDNJS](https://cdnjs.com/libraries/github-markdown-css), or with npm:

```
$ npm install storybook-addon-notes-github-markdown-css
```

## Usage

To use within you storybook you need to load the style sheet into the manager's head. The best way I have found to do this is to interact with storybook's html-webpack-plugin. To facilitate this I released [html-webpack-inject-plugin](https://github.com/hipstersmoothie/html-webpack-inject-plugin), it lets you easily inject text into the head or body of the html document.

`webpack.config.js`:

```js
const HtmlWebpackInsertTextPlugin = require("html-webpack-insert-text-plugin")
  .default;

module.exports = (baseConfig, env, config) => {
  config.plugins.push(
    new HtmlWebpackInsertTextPlugin([
      {
        target: "index.html",
        parent: "head",
        text:
          '<link rel="stylesheet" type="text/css" href="https://unpkg.com/storybook-addon-notes-github-markdown-css@1.0.0/github-markdown.css" />'
      }
    ])
  );

  return config;
};
```

## How

See [`generate-github-markdown-css`](https://github.com/sindresorhus/generate-github-markdown-css) for how it's generated and ability to generate your own.

## Dev

Run `npm run make` to update the CSS.

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
