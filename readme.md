# github-markdown-css

> The minimal amount of CSS to replicate the GitHub Markdown style

[<img src="https://cloud.githubusercontent.com/assets/170270/5219062/f22a978c-7685-11e4-8316-af25b6c89bc0.png" width="300">](http://sindresorhus.com/github-markdown-css)

## [Demo](http://sindresorhus.com/github-markdown-css)


## Install

Download [manually](https://raw.githubusercontent.com/sindresorhus/github-markdown-css/gh-pages/github-markdown.css) or with a package-manager.

```sh
$ npm install --save github-markdown-css
```

```sh
$ bower install --save github-markdown-css
```


## Usage

Import the `github-markdown.css` file and add a `markdown-body` class to the container of your rendered Markdown and set a width for it. GitHub uses `790px` width and `30px` padding.

```html
<link rel="stylesheet" href="github-markdown.css">
<style>
	.markdown-body {
		min-width: 200px;
		max-width: 790px;
		margin: 0 auto;
		padding: 30px;
	}
</style>
<article class="markdown-body">
	<h1>Unicorns</h1>
	<p>All the things</p>
</article>
```


## How

See [`generate-github-markdown-css`](https://github.com/sindresorhus/generate-github-markdown-css) for how it's generated and ability to generate your own.


## Dev

Run `npm run generate` to update the CSS.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
